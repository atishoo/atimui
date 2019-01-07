/**
 * @Author: Atishoo <Atishoo>
 * @Date:   2018-10-08
 * @Filename: QiNiuToken.js
 * @Last modified by:   Atishoo
 * @Last modified time: 2019-01-07
 * @Copyright: Atishoo
 */


// import AppConfig from '../config';
import Crypto from 'crypto-js';

function base64_encode(text) {
  return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(text));
}

function hmac_sha1(data, secret_key, base64 = false) {
  return base64
    ? Crypto.HmacSHA1(data, secret_key).toString(Crypto.enc.Base64)
    : Crypto.HmacSHA1(data, secret_key).toString();
}

export function urlsafeBase64Encode(jsonFlags) {
  const encoded = base64_encode(jsonFlags);
  return base64ToUrlSafe(encoded);
}

function base64ToUrlSafe(v) {
  return v.replace(/\//g, '_').replace(/\+/g, '-');
}

export class PutPolicy2 {
  config = undefined;

  constructor(putPolicyObj, config) {
    if (typeof putPolicyObj !== 'object') {
      return false;
    }

    this.config = config;

    this.scope = `${config.bucket}:${putPolicyObj.scope}` || null;
    this.expires = putPolicyObj.expires || 3600;
    this.insertOnly = putPolicyObj.insertOnly || null;

    this.saveKey = putPolicyObj.saveKey || null;
    this.endUser = putPolicyObj.endUser || null;

    this.returnUrl = putPolicyObj.returnUrl || null;
    this.returnBody =
      putPolicyObj.returnBody ||
      `{
                                                      "name": $(key),
                                                      "size": $(fsize),
                                                      "w": $(imageInfo.width),
                                                      "h": $(imageInfo.height),
                                                      "hash": $(etag)
                                                }`;

    this.callbackUrl = putPolicyObj.callbackUrl || null;
    this.callbackHost = putPolicyObj.callbackHost || null;
    this.callbackBody = putPolicyObj.callbackBody || null;
    this.callbackBodyType = putPolicyObj.callbackBodyType || null;

    this.persistentOps = putPolicyObj.persistentOps || null;
    this.persistentNotifyUrl = putPolicyObj.persistentNotifyUrl || null;
    this.persistentPipeline = putPolicyObj.persistentPipeline || null;

    this.fsizeLimit = putPolicyObj.fsizeLimit || null;

    this.fsizeMin = putPolicyObj.fsizeMin || null;

    this.detectMime = putPolicyObj.detectMime || null;

    this.mimeLimit = putPolicyObj.mimeLimit || null;
  }

  token() {
    const flags = this.getFlags();
    const encodedFlags = urlsafeBase64Encode(JSON.stringify(flags));
    const encoded = hmac_sha1(encodedFlags, this.config.secret_key, true);
    const encodedSign = base64ToUrlSafe(encoded);
    const uploadToken = `${this.config.access_key}:${encodedSign}:${encodedFlags}`;
    return uploadToken;
  }

  getFlags() {
    const flags = {};
    const attrs = [
      'scope',
      'insertOnly',
      'saveKey',
      'endUser',
      'returnUrl',
      'returnBody',
      'callbackUrl',
      'callbackHost',
      'callbackBody',
      'callbackBodyType',
      'callbackFetchKey',
      'persistentOps',
      'persistentNotifyUrl',
      'persistentPipeline',
      'fsizeLimit',
      'fsizeMin',
      'detectMime',
      'mimeLimit',
    ];

    for (let i = attrs.length - 1; i >= 0; i--) {
      if (this[attrs[i]] !== null) {
        flags[attrs[i]] = this[attrs[i]];
      }
    }

    flags.deadline = this.expires + Math.floor(Date.now() / 1000);

    return flags;
  }
}

export class GetPolicy {
  constructor(expires) {
    this.expires = expires || 3600;
  }

  makeRequest(baseUrl) {
    const deadline = this.expires + Math.floor(Date.now() / 1000);

    if (baseUrl.indexOf('?') >= 0) {
      baseUrl += '&e=';
    } else {
      baseUrl += '?e=';
    }
    baseUrl += deadline;

    const signature = hmac_sha1(baseUrl, this.config.secret_key, true);
    const encodedSign = base64ToUrlSafe(signature);
    const downloadToken = `${this.config.access_key}:${encodedSign}`;

    return `${baseUrl}&token=${downloadToken}`;
  }
}
