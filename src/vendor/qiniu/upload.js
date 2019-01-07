import {
  getChunks,
  isChunkExpired,
  createMkFileUrl,
  setLocalFileInfo,
  removeLocalFileInfo,
  getLocalFileInfo,
  isContainFileMimeType,
  sum,
  getDomainFromUrl,
  getPortFromUrl,
  getHeadersForChunkUpload,
  getHeadersForMkFile,
  request,
  computeMd5,
  getUploadUrl,
  filterParams,
} from './utils';

import { Pool } from './pool';

const BLOCK_SIZE = 4 * 1024 * 1024;

export class UploadManager {
  constructor(options, handlers, statisticsLogger) {
    this.config = Object.assign(
      {
        useCdnDomain: true,
        disableStatisticsReport: false,
        retryCount: 3,
        checkByMD5: false,
        uphost: null,
        concurrentRequestLimit: 3,
        region: null,
      },
      options.config
    );
    this.putExtra = Object.assign(
      {
        fname: '',
        params: {},
        mimeType: null,
      },
      options.putExtra
    );
    this.statisticsLogger = statisticsLogger;
    this.progress = null;
    this.xhrList = [];
    this.xhrHandler = xhr => this.xhrList.push(xhr);
    this.aborted = false;
    this.file = options.file;
    this.key = options.key;
    this.token = options.token;
    this.onData = () => {};
    this.onError = () => {};
    this.onComplete = () => {};
    this.retryCount = 0;
    Object.assign(this, handlers);
  }

  putFile() {
    this.aborted = false;
    if (!this.putExtra.fname) {
      this.putExtra.fname = this.file.name;
    }
    if (this.putExtra.mimeType && this.putExtra.mimeType.length) {
      if (!isContainFileMimeType(this.file.type, this.putExtra.mimeType)) {
        const err = new Error("file type doesn't match with what you specify");
        this.onError(err);
        return;
      }
    }
    const upload = getUploadUrl(this.config, this.token).then(res => {
      this.uploadUrl = res;
      this.uploadAt = new Date().getTime();
      return this.file.size > BLOCK_SIZE ? this.resumeUpload() : this.directUpload();
    });
    upload.then(
      res => {
        this.onComplete(res.data);
        if (!this.config.disableStatisticsReport) {
          this.sendLog(res.reqId, 200);
        }
      },
      err => {
        this.clear();
        if (err.isRequestError && !this.config.disableStatisticsReport) {
          const reqId = this.aborted ? '' : err.reqId;
          const code = this.aborted ? -2 : err.code;
          this.sendLog(reqId, code);
        }

        const needRetry = err.isRequestError && err.code === 0 && !this.aborted;
        const notReachRetryCount = ++this.retryCount <= this.config.retryCount;
        if (needRetry && notReachRetryCount) {
          this.putFile();
          return;
        }

        this.onError(err);
      }
    );
    return upload;
  }

  clear() {
    this.xhrList.forEach(xhr => xhr.abort());
    this.xhrList = [];
  }

  stop() {
    this.clear();
    this.aborted = true;
  }

  sendLog(reqId, code) {
    this.statisticsLogger.log(
      {
        code,
        reqId,
        host: getDomainFromUrl(this.uploadUrl),
        remoteIp: '',
        port: getPortFromUrl(this.uploadUrl),
        duration: (new Date().getTime() - this.uploadAt) / 1000,
        time: Math.floor(this.uploadAt / 1000),
        bytesSent: this.progress ? this.progress.total.loaded : 0,
        upType: 'jssdk-h5',
        size: this.file.size,
      },
      this.token
    );
  }

  // 直传
  directUpload() {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('token', this.token);
    if (this.key != null) {
      formData.append('key', this.key);
    }
    formData.append('fname', this.putExtra.fname);
    filterParams(this.putExtra.params).forEach(item => formData.append(item[0], item[1]));

    return request(this.uploadUrl, {
      method: 'POST',
      body: formData,
      onProgress: data => {
        this.updateDirectProgress(data.loaded, data.total);
      },
      onCreate: this.xhrHandler,
    }).then(res => {
      this.finishDirectProgress();
      return res;
    });
  }

  // 分片上传
  resumeUpload() {
    this.loaded = {
      mkFileProgress: 0,
      chunks: null,
    };

    this.ctxList = [];
    this.localInfo = getLocalFileInfo(this.file);
    this.chunks = getChunks(this.file, BLOCK_SIZE);
    this.initChunksProgress();

    const pool = new Pool(
      chunkInfo => this.uploadChunk(chunkInfo),
      this.config.concurrentRequestLimit
    );
    const uploadChunks = this.chunks.map((chunk, index) => {
      return pool.enqueue({ chunk, index });
    });
    const result = Promise.all(uploadChunks).then(() => {
      return this.mkFileReq();
    });
    result.then(
      res => {
        removeLocalFileInfo(this.file);
      },
      err => {
        // ctx错误或者过期情况下
        if (err.code === 701) {
          removeLocalFileInfo(this.file);
          return;
        }
        setLocalFileInfo(this.file, this.ctxList);
      }
    );
    return result;
  }

  uploadChunk(chunkInfo) {
    const { index, chunk } = chunkInfo;
    const info = this.localInfo[index];
    const requestUrl = `${this.uploadUrl}/mkblk/${chunk.size}`;

    const savedReusable = info && !isChunkExpired(info.time);
    const shouldCheckMD5 = this.config.checkByMD5;
    const reuseSaved = () => {
      this.updateChunkProgress(chunk.size, index);
      this.ctxList[index] = { ctx: info.ctx, time: info.time, md5: info.md5 };
      return Promise.resolve(null);
    };

    if (savedReusable && !shouldCheckMD5) {
      return reuseSaved();
    }

    return computeMd5(chunk).then(md5 => {
      if (savedReusable && md5 === info.md5) {
        return reuseSaved();
      }

      const headers = getHeadersForChunkUpload(this.token);
      const onProgress = data => {
        this.updateChunkProgress(data.loaded, index);
      };
      const onCreate = this.xhrHandler;
      const method = 'POST';

      return request(requestUrl, {
        method,
        headers,
        body: chunk,
        onProgress,
        onCreate,
      }).then(response => {
        this.ctxList[index] = {
          time: new Date().getTime(),
          ctx: response.data.ctx,
          md5,
        };
      });
    });
  }

  mkFileReq() {
    const putExtra = Object.assign({ mimeType: 'application/octet-stream' }, this.putExtra);

    const requestUrL = createMkFileUrl(this.uploadUrl, this.file.size, this.key, putExtra);

    const body = this.ctxList.map(value => value.ctx).join(',');
    const headers = getHeadersForMkFile(this.token);
    const onCreate = this.xhrHandler;
    const method = 'POST';
    return request(requestUrL, { method, body, headers, onCreate }).then(res => {
      this.updateMkFileProgress(1);
      return Promise.resolve(res);
    });
  }

  updateDirectProgress(loaded, total) {
    // 当请求未完成时可能进度会达到100，所以total + 1来防止这种情况出现
    this.progress = { total: this.getProgressInfoItem(loaded, total + 1) };
    this.onData(this.progress);
  }

  finishDirectProgress() {
    const total = this.progress.total;
    this.progress.total = this.getProgressInfoItem(total.loaded + 1, total.size);
    this.onData(this.progress);
  }

  initChunksProgress() {
    this.loaded.chunks = this.chunks.map(_ => 0);
    this.notifyResumeProgress();
  }

  updateChunkProgress(loaded, index) {
    this.loaded.chunks[index] = loaded;
    this.notifyResumeProgress();
  }

  updateMkFileProgress(progress) {
    this.loaded.mkFileProgress = progress;
    this.notifyResumeProgress();
  }

  notifyResumeProgress() {
    this.progress = {
      total: this.getProgressInfoItem(
        sum(this.loaded.chunks) + this.loaded.mkFileProgress,
        this.file.size + 1
      ),
      chunks: this.chunks.map((chunk, index) => {
        return this.getProgressInfoItem(this.loaded.chunks[index], chunk.size);
      }),
    };
    this.onData(this.progress);
  }

  getProgressInfoItem(loaded, size) {
    return {
      loaded,
      size,
      percent: (loaded / size) * 100,
    };
  }
}
