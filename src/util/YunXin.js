/**
 * @Author: Atishoo <Atishoo>
 * @Date:   2018-10-08
 * @Filename: YunXin.js
 * @Last modified by:   Atishoo
 * @Last modified time: 2019-01-07
 * @Copyright: Atishoo
 */


import NIM from '../vendor/yunxin/NIM_Web_NIM_v5.6.0'; // 引入网易云信sdk
import Netcall from '../vendor/yunxin/NIM_Web_WebRTC_v5.6.0'; // 引入网易云信sdk

export default class YunXin {
  instance = undefined;
  netcall = undefined;

  debug = false;
  calling = false;
  beCalling = false;
  type = null; // 通话类型
  beCalledInfo = null; // 正在进行通话的基础信息

  onReceived = obj => {};
  onStatusChange = obj => {};
  onSessionList = obj => {};

  constructor (event){
    this.onReceived = event.onReceived;
    this.onStatusChange = event.onStatusChange;
    this.onSessionList = event.onSessionList;

    // 音视频通话回调方法
    this.onBeCallingListener = event.onBeCallingListener;
    this.onHangup = event.onHangup;
    this.onCallingAccept = event.onCallingAccept;

    if (NIM.getInstance != undefined) {
      window.NIM = NIM;
    }

    if (Netcall.getInstance != undefined) {
      window.Netcall = Netcall;
      window.NIM.use(window.Netcall);
    }
  }

  init = (appKey, account, token, enableNetCall) => {
    this.instance = window.NIM.getInstance({
      // debug: true,
      appKey:appKey,
      account:account,
      token:token,
      // privateConf: {}, // 私有化部署方案所需的配置
      onconnect: () => {
        console.log('链接成功');
        this.onStatusChange('online');
        if (enableNetCall) {
          // 连接音视频服务
          this.netcall = window.Netcall.getInstance({
            nim: this.instance,
            // container: document.getElementById('container'),
            // remoteContainer: document.getElementById('remoteContainer'),
            debug:true
          });

          // 收到呼叫监听
          this.netcall.on('beCalling', (obj) => {
            console.log('on beCalling', obj);
            const channelId = obj.channelId;
            // 被叫回应主叫自己已经收到了通话请求
            this.netcall.control({
              channelId: channelId,
              command: window.Netcall.NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED
            });
            // 只有在没有通话并且没有被叫的时候才记录被叫信息, 否则通知对方忙并拒绝通话
            if (!this.calling && !this.beCalling) {
              this.type = obj.type;
              this.beCalling = true;
              this.beCalledInfo = obj;

              console.log(44);
              // 执行回调显示UI
              this.onBeCallingListener({from:obj.account,calltype:obj.type});
            } else {
              let busy = false;
              if (this.calling) {
                busy = this.netcall.notCurrentChannelId(obj);
              } else if (this.beCalling) {
                busy = this.beCalledInfo.channelId !== channelId;
              }
              console.log(55);
              if (busy) {
                console.log(66);
                this.netcall.control({
                  channelId: channelId,
                  command: window.Netcall.NETCALL_CONTROL_COMMAND_BUSY
                });
                // 拒绝通话
                this.netcall.response({
                  accepted: false,
                  beCalledInfo: obj
                });
              }else{
                console.log(77);
                // 这一部分的逻辑空白
                this.onBeCallingListener({from:obj.account,calltype:obj.type});
              }
            }
          });

          // 被叫接受的通知监听
          this.netcall.on('callAccepted', (obj) => {
            console.log('on callAccepted', obj);
            this.onCallingAccept();
            // 如果呼叫之前，启动了超时倒计时，这里可以取消呼叫倒计时
            // clearCallTimer();
            // 可以开启音视频连接操作。。。
          });

          // 被叫拒绝的通知
          this.netcall.on('callRejected', (obj) => {
            console.log('on callRejected', obj);
            // 如果呼叫之前，启动了超时倒计时，这里可以取消呼叫倒计时
            // clearCallTimer();
            // 挂断
            // hangup();
            // 做清理工作
            // resetWhenHangup();
          });

          // 被叫挂断的通知
          this.netcall.on('hangup', (obj) => {
            console.log('on hangup', obj);
            // 判断需要挂断的通话是否是当前正在进行中的通话
            if (!this.beCalledInfo || this.beCalledInfo.channelId === obj.channelId) {
              // 清理工作
              this.netcall.hangup();
              // ui
              this.onHangup();
            }
          });


          // sdk报错监听
          this.netcall.on('error', (obj) => {
            console.log('sdk反馈错误信息', obj);
            if(obj.code){
              if(obj.code == 509){
                console.warn('你被提出房间了');
              } else if(obj.code == 500){
                console.warn('你的web不支持H264视频编码，无法进行呼叫，请检测浏览器的H264插件是否正常');
              }
            }
          });

          // 设备插入监听
          this.netcall.on('deviceAdd', (devices) => {
            console.log('新增设备列表', devices);
          });

          // 设备移除监听
          this.netcall.on('deviceRemove', (devices) => {
            console.log('移除设备列表', devices);
          });

          // 设备状态监听
          this.netcall.on('deviceStatus', (obj) => {
            console.log('设备状态发生变化', obj);

            // 检查摄像头
            this.netcall.getDevicesOfType(window.Netcall.DEVICE_TYPE_VIDEO).then((devices) => {
              console.log('摄像头', devices);
            });

            // 检查麦克风
            this.netcall.getDevicesOfType(window.Netcall.DEVICE_TYPE_AUDIO_IN).then((devices) => {
              console.log('麦克风', devices);
            });

            // 检查扬声器
            this.netcall
              .getDevicesOfType(window.Netcall.DEVICE_TYPE_AUDIO_OUT_CHAT)
              .then(function(devices) {
                console.log('扬声器', devices);
              });
          });

        }
      },
      onwillreconnect: obj => {
        console.log('将会重连', obj);
        this.onStatusChange('offline');
      },
      ondisconnect: error => {
        console.log('发生错误', error);
        this.onStatusChange('offline');
      },
      onerror: error => {
        console.log('发生错误', error);
        this.onStatusChange('offline');
      },
      onroamingmsgs: obj => {
        console.log('漫游消息', obj);
      },
      onofflinemsgs: obj => {
        console.log('离线消息', obj);
      },
      onmsg: msg => {
        console.log('收到消息', msg);
        this.onReceived(msg);
      },
      // 获取最近会话列表
      onsessions: sessions => {
        let userlist = [];
        for (let user of sessions) {
          if (user.scene == "p2p") {
            userlist.push(user.to);
          }
        }
        this.onSessionList(userlist);
      }
    });
  };

  sendText = (text, targetId, callback = () => {}) => {
    this.instance.sendText({
      scene: 'p2p',
      to: targetId,
      text,
      done: (error, msg) => {
        if (error != null) {
          callback(error.message, msg);
        }else{
          callback(null, msg);
        }
        console.log('消息内容发送结果', error, msg);
      },
    });
  };

  sendImage = (data, targetId, callback = () => {}) => {
    console.log(data, "asdfaf");
    this.instance.sendFile({
      scene: 'p2p',
      to: targetId,
      type: 'image',
      // dataURL: data.base64,
      blob: data.ori_file,
      beforesend: msg => {},
      done: (error, msg) => {
        if (error != null) {
          callback(error.message, msg);
        }else{
          callback(null, msg);
        }
        console.log('消息内容发送结果', error, msg);
      },
    });
  };

  sendAudio = (data, targetId, callback = () => {}) => {
    this.instance.sendFile({
      scene: 'p2p',
      to: targetId,
      type: 'audio',
      // dataURL: data.base64,
      blob: data.ori_file,
      beforesend: msg => {},
      done: (error, msg) => {
        if (error != null) {
          callback(error.message, msg);
        }else{
          msg.file.url = msg.file.url.substr(0, msg.file.url.indexOf('?'));
          callback(null, msg);
        }
        console.log('消息内容发送结果', error, msg);
      },
    });
  };

  // data={type:1,data:""}
  // 1,data="evaluate,please"表示评价消息
  sendCustom = (data, targetId, callback = () => {}) => {
    this.instance.sendCustomMsg({
      scene: 'p2p',
      to: targetId,
      content: JSON.stringify(data),
      done: (error, msg) => {
        if (error != null) {
          callback(error.message, msg);
        }else{
          callback(null, msg);
        }
        console.log('消息内容发送结果', error, msg);
      },
    });
  };

  loadHistoryMessage = (to, callback, timestrap=Date.now(), limit=20)=>{
    this.instance.getHistoryMsgs({
      scene: 'p2p',
      to: to,
      limit: limit,
      beginTime:0,
      endTime: timestrap,
      lastMsgId: null,
      reverse: false,
      asc: true,
      done: (error, obj)=>{
        console.log(obj, "YUNXIN收到的消息");
        if (!error) {
          // 获取历史消息成功
          let data = {data:[],hasMore:obj.msgs.length<limit?false:true,target:to};
          for (var i = 0; i < obj.msgs.length; i++) {
            switch (obj.msgs[i].type) {
              case 'text': // 处理文本消息
                data.data.push({
                  id:obj.msgs[i].fromDeviceId+obj.msgs[i].idServer+obj.msgs[i].time,
                  content:obj.msgs[i].text,
                  msgtype:'text',
                  time:obj.msgs[i].time,
                  uid:obj.msgs[i].from,
                  touid:obj.msgs[i].to,
                })
                break;
              case 'image':
                data.data.push({
                  id:obj.msgs[i].messageUId,
                  content:{ url: obj.msgs[i].file.url, width: obj.msgs[i].file.w, height: obj.msgs[i].file.h },
                  msgtype:'image',
                  time:obj.msgs[i].time,
                  uid:obj.msgs[i].from,
                  touid:obj.msgs[i].to,
                })
                break;
              default: // 在面板提示收到了位置消息类型的消息
            }
          }
          callback(data);
        }else{
          console.log("获取历史消息发生错误", error);
        }
      }
    });
  }

  clearUnreadCount = (targetId)=>{
    // this.instance.clearUnreadCount(RongIMLib.ConversationType.PRIVATE,targetId,{
    //     onSuccess:function(){
    //         // 清除未读消息成功。
    //         console.log("清除已读成功");
    //     },
    //     onError:function(error){
    //         // error => 清除未读消息数错误码。
    //     }
    // });
  }

  logout = () => {
    this.instance.disconnect();
  };

  reconnect = () => {
    this.instance.disconnect();
    this.instance.connect();
  };

  // 音视频通话部分
  callup = (targetId) => {
    console.log(this.netcall, "正在拨打电话", targetId);
    this.calling = true;
    this.netcall
      .call({
        type: Netcall.NETCALL_TYPE_AUDIO,
        webrtcEnable: true,
        account: targetId,
        pushConfig: {
          enable: true, // 是否需要推送
          needBadge: true, // 是否需要角标计数
          needPushNick: true, // 是否需要推送昵称
          pushContent: '您有一个新的电话！', // 推送内容
          custom: '测试自定义数据haha', // 自定义通知数据, 推荐封装成 JSON 字符串
          pushPayload: '', // JSON格式的推送 payload
          sound: '',  // 推送声音
          forceKeepCalling: 0
        },
        sessionConfig: {
          videoQuality: Netcall.CHAT_VIDEO_QUALITY_HIGH,
          videoFrameRate: Netcall.CHAT_VIDEO_FRAME_RATE_15,
          videoBitrate: 0,
          recordVideo: false,
          recordAudio: false,
          highAudio: true,
          bypassRtmp: false,
          rtmpUrl: '',
          rtmpRecord: false,
          splitMode: Netcall.LAYOUT_SPLITLATTICETILE
        },
        webrtcEnable: true
      })
      .then(function(obj) {
        // 成功发起呼叫
        console.log('call success', obj);
      })
      .catch(function(err) {
        // 被叫不在线
        if (err.event.code === 11001) {
          console.log('callee offline', err, err.event.message);
        }
      });
    // 设置超时计时器
    // let callTimer = setTimeout(function() {
    //   if (!netcall.callAccepted) {
    //     console.log('超时未接听, hangup');
    //     // hangup();
    //   }
    // }, 1000 * 30);
  }

  acceptcall = () => {
    // 接听
    this.beCalling = false;

    console.log(121, this.beCalledInfo);

    this.netcall
      .response({
        accepted: true,
        beCalledInfo: this.beCalledInfo,
        sessionConfig: {
          videoQuality: Netcall.CHAT_VIDEO_QUALITY_HIGH,
          videoFrameRate: Netcall.CHAT_VIDEO_FRAME_RATE_15,
          videoBitrate: 0,
          recordVideo: false,
          recordAudio: false,
          highAudio: true,
          bypassRtmp: false,
          rtmpUrl: '',
          rtmpRecord: false,
          splitMode: Netcall.LAYOUT_SPLITLATTICETILE
        }
      })
      .catch(function(err) {
        reject();
        console.log('接听失败', err);
      });

    // 拒绝
    // 可以先通知对方自己忙, 拒绝的时候需要回传在 `beCalling` 事件里面接收到的对象

    // this.netcall.control({
    //   channelId: this.beCalledInfo.channelId,
    //   command: window.Netcall.NETCALL_CONTROL_COMMAND_BUSY
    // });
    // this.netcall.response({
    //   accepted: false,
    //   beCalledInfo: this.beCalledInfo,
    // });
    // this.beCalledInfo = null;
    // this.beCalling = false;
  }

  hangup = () => {
    console.log(this.netcall, 4545);
    // this.netcall.control({
    //   channelId: this.beCalledInfo.channelId,
    //   command: window.Netcall.NETCALL_CONTROL_COMMAND_BUSY
    // });
    // this.netcall.response({
    //   accepted: false,
    //   beCalledInfo: this.beCalledInfo,
    // });
    this.calling = false;
    this.beCalling = false;
    this.netcall.hangup();
  }


}
