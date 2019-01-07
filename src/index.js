/**
 * @Author: Atishoo <Atishoo>
 * @Date:   2018-12-19
 * @Filename: index.js
 * 主要用于建立即时通讯的主UI
 * @Last modified by:   Atishoo
 * @Last modified time: 2019-01-07
 * @Copyright: Atishoo
 */


/**
 * 传入的props
 * user里必须要有id，username，avator
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Mainbox from './components/Mainbox';
import Listbox from './components/Listbox';
import Chat from './components/Chat';
import NetCall from './components/NetCall';

import RongCloud from './util/RongCloud';
import YunXin from './util/YunXin';
import {
  getUser,
  addUser,
  addUsers,
  addChatLog,
  setPanelStatus,
  getPanelStatus,
  clearUserUnread,
  addUnread,
  getUserStatus,
  updateUser,
} from './util/Storage';
import * as QiNiu from './vendor/qiniu';
import { PutPolicy2 } from './util/QiNiuToken';
import { getTimestamp, getFormatTime, generateStr } from './util/Helper';

const RongConf = {
  appKey: 'y745wfm8y7wrv',
  token: '+mgILCQFITVvWgTYun9zIJ7WMnttap5Ec3T0fLowxO+dYQ6SDWBI5MFXJdH4mcTAzGdJC2/fxKN0Sj/6k4XyVw==',
};

const YunXinConf = {
  appKey: '45c6af3c98409b18a84451215d0bdd6e',
  account: '15000295159',
  token: 'd0fff482a46c4e9e010d3f6710874998',
};

export default class ATIMUI extends Component {
  imInstance = undefined;

  chatBoxInstance = undefined;
  netcallBoxInstance = undefined;

  constructor(props) {
    super(props);
    this.state = {
      panelStatus: false,
    };
  }

  static defaultProps = {
    im: 'yunxin', // rongyun/yunxin/other
    defaultAvatar:require('./static/default.png'),
    position: {
      // 设置初始位置信息
      left: 'auto',
      right: 'auto',
      top: 'auto',
      bottom: 'auto',
    },
    qiniu: {
      bucket: 'asdf',
      access_key: '9Hv1lSQTzSFsGjJqZXuFCW9gto5A8dGQxR3MpSy6',
      secret_key: 'BDRCKYAYZ0SSsgHkAAclSXHsR6UjQBG7Hsp_u3RV',
      url: 'http://oh6s1iwf5.bkt.clouddn.com/',
    },
    user: undefined,
    signature:"",
    enableAudio: true,
    enableNetCall: true,
    fixedChatBox: false,
    fixedMiniBox: false,
    autoReplyRule:[], // 每个数字里是个数组，0下标表示关键词，1下标表示是否全匹配，2下标表示自动回复的文本内容
    shortcutText:[], // 快捷短语
    onUserStatusListener: key => {
      console.log(`这是监听用户状态切换的方法，现在的状态是${key}`);
    },
    handleUserProfile: id => {},
    handleSessionList: ids => {},
    onSignChangeListener: text => {},
    onReceiveMessageListener: msg => {},
    onSendTextMsgListener: data=>{},
    onChatBoxShow: ()=>{},
    onChatBoxHide: ()=>{},
  };

  componentDidMount() {
    document.addEventListener('dragover', event => {
      event.preventDefault();
    });
    document.addEventListener('dragenter', event => {
      event.preventDefault();
    });
    document.addEventListener('drop', event => {
      event.preventDefault();
    });
    // document.addEventListener("dragover",event=>{event.stopPropagation();});
    // document.addEventListener("dragenter",event=>{event.stopPropagation();});
    // document.addEventListener("drop",event=>{event.stopPropagation();});

    // document.addEventListener("dragover",event=>{event.stopPropagation();event.preventDefault();});
    // document.addEventListener("dragenter",event=>{event.stopPropagation();event.preventDefault();});
    // document.addEventListener("drop",event=>{event.stopPropagation();event.preventDefault();});
    if (
      this.props.user != undefined &&
      this.props.user.id != undefined &&
      this.props.user.id != 0
    ) {
      if (this.props.im.toLowerCase() == 'yunxin') {
        this.imInstance = new YunXin({
          onReceived: this._onReciveMsg,
          onStatusChange: this._onStatusChange,
          onSessionList: this._onSessionList,
          // 音视频通话方法监听
          onBeCallingListener: this._onCallBeCallingListener,
          onHangup: this._onCallHangup,
          onCallingAccept: this._onCallAccept,
        });
        this.imInstance.init(this.props.user.appkey, this.props.user.id, this.props.user.imtoken, this.props.enableNetCall);
        // this.imInstance.init(YunXinConf.appKey, YunXinConf.account, YunXinConf.token);
      } else if (this.props.im.toLowerCase() == 'rongyun') {
        this.imInstance = new RongCloud({
          debug: true,
          onReceived: this._onReciveMsg,
          onStatusChange: this._onStatusChange,
          onSessionList: this._onSessionList,
        });
        // this.imInstance.init(RongConf.appKey, RongConf.token);
        this.imInstance.init(this.props.user.appkey, this.props.user.imtoken, this.props.enableNetCall);
      }
      // console.log('聊天初始化完成');
    }

    if (getPanelStatus()) {
      this.setState({ panelStatus: true });
    } else {
      this.setState({ panelStatus: false });
    }

    // this.initYunXin();
  }

  // 这个方法是监听连接的状态，来修改UI的显示效果
  _onStatusChange = status => {
    this.panel != undefined && this.panel.changeStatus(status);
  };

  // 这个方法用来监听初始化的时候会话列表的用户信息
  _onSessionList = list => {
    // 伪造假数据先
    let userstmp = [];
    for (let userid of list) {
      userstmp.push({
        id: userid,
        img: '',
        name: '正在加载...',
        sign: '这个家伙很懒，什么都没有写~',
        last_msg:"加载中..."
      });
    }
    addUsers(userstmp);
    this.panel != undefined && this.panel.undateUnread();
    this.props.handleSessionList(list, userdata => {
      addUsers(userdata, true);
      this.panel != undefined && this.panel.undateUnread();
    });
  }

  // 这个方法是监听用户设置的状态，来调用类库的重新连接
  _onUserStatusChange = status => {
    if (status == 'offline') {
      this.imInstance.logout();
    } else if (status == 'online') {
      if (getUserStatus() == 'offline') {
        this.imInstance.reconnect();
      }
    } else if (getUserStatus() == 'offline') {
      this.imInstance.reconnect();
      const timer = setInterval(() => {
        if (getUserStatus() == 'online') {
          this._onStatusChange('busy');
          clearInterval(timer);
        }
      }, 50);
    }
    this.props.onUserStatusListener(status);
  };

  /**
   * 最终要传递给消息列表的对象数据是一定的
   */
  _onReciveMsg = obj => {
    let msg = { msgtype: '', content: '', time: '', uid: '' };
    if (this.props.im.toLowerCase() == 'yunxin') {
      switch (obj.type) {
        case 'text': // 处理文本消息
          msg.msgtype = obj.type;
          msg.content = obj.text;
          msg.time = obj.time;
          msg.uid = obj.from;
          msg.touid = obj.to;
          obj.from != this.props.user.id && this.playSound();
          break;
        case 'image':
          msg.msgtype = obj.type;
          msg.content = { url: obj.file.url, width: obj.file.w, height: obj.file.h };
          msg.time = obj.time;
          msg.uid = obj.from;
          msg.touid = obj.to;
          obj.from != this.props.user.id && this.playSound();
          break;
        case 'audio':
          msg.msgtype = obj.type;
          msg.content = { url: obj.file.url, duration: obj.file.dur };
          msg.time = obj.time;
          msg.uid = obj.from;
          msg.touid = obj.to;
          obj.from != this.props.user.id && this.playSound();
          break;
        case 'custom': // 单独处理自定义消息
          let tmpmsg = { msgtype: '', content: '', time: '', uid: '' };
          if (obj.type == "custom") {
            obj.content = JSON.parse(obj.content);
            if (obj.content.type == 2) {
              tmpmsg.msgtype = 'custom';
              tmpmsg.content = obj.content.data;
              tmpmsg.time = obj.time;
              tmpmsg.uid = obj.from;
              tmpmsg.touid = obj.to;
              this.props.onReceiveMessageListener(tmpmsg);
            }
          }
          break;
        default: // 在面板提示收到了位置消息类型的消息
      }
      this.props.onReceiveMessageListener(msg);
    } else if (this.props.im.toLowerCase() == 'rongyun') {
      switch (obj.messageType) {
        case 'TextMessage': // 处理文本消息
          msg.msgtype = 'text';
          msg.content = obj.content.content;
          msg.time = obj.sentTime;
          msg.uid = obj.senderUserId;
          msg.touid = obj.targetId;
          obj.senderUserId != this.props.user.id && this.playSound();
          break;
        case 'ImageMessage': // 处理图片消息
          msg.msgtype = 'image';
          msg.content = { url: obj.content.imageUri, width: 400, height: 400 };
          msg.time = obj.sentTime;
          msg.uid = obj.senderUserId;
          msg.touid = obj.targetId;
          obj.senderUserId != this.props.user.id && this.playSound();
          break;
        case 'UnknownMessage': // 单独处理自定义消息
          let tmpmsg = { msgtype: '', content: '', time: '', uid: '' };
          if (obj.objectName == "custom" && obj.content.message.content.content.type == 2) {
            tmpmsg.msgtype = 'custom';
            tmpmsg.content = obj.content.message.content.content.data;
            tmpmsg.time = obj.sentTime;
            tmpmsg.uid = obj.senderUserId;
            tmpmsg.touid = obj.targetId;
          }
          this.props.onReceiveMessageListener(tmpmsg);
          break;
        default: // 在面板提示收到了位置消息类型的消息
      }
      this.props.onReceiveMessageListener(msg);
    }

    // 判断是自己发送的还是对方发送的
    if (msg.uid == this.props.user.id) {
      // 自己发送的消息
      // 判断用户是否存在
      const user = getUser(msg.touid);
      if (user == undefined) {
        // 调用获取用户资料的接口获取资料
        let userinfo = {
          id: msg.uid,
          img: '',
          name: msg.uid,
          sign: '',
          last_msg: msg.msgtype == 'text' ? msg.content : (msg.msgtype == 'image' ? '[图片消息]' : (msg.msgtype == 'audio' ? '[语音消息]' : '未知消息')),
        };

        this.props.handleUserProfile(msg.touid, res => {
          userinfo = { ...userinfo, ...res };
          addUser(userinfo);
          this.panel != undefined && this.panel.addUser(userinfo);
        });
      } else {
        // 更新用户的最新消息
        updateUser({ ...user, last_msg: msg.msgtype == 'text' ? msg.content : (msg.msgtype == 'image' ? '[图片消息]' : (msg.msgtype == 'audio' ? '[语音消息]' : '未知消息')) });
      }

      addChatLog(msg, msg.touid);

      // 判断当前的聊天窗口是否是touid的用户，是的话就更新UI界面
      if (
        this.chatBoxInstance != undefined &&
        this.chatBoxInstance.getCurrentUser() != undefined &&
        msg.touid == this.chatBoxInstance.getCurrentUser().id
      ) {
        this.chatBoxInstance != undefined &&
          this.chatBoxInstance.autoReply({
            type: msg.msgtype,
            content: msg.content,
          });
      }
      this._updateUnreadTag(msg.uid);
    } else {
      // 来自客户

      // 判断用户是否存在
      const user = getUser(msg.uid);
      if (user == undefined) {
        // 调用获取用户资料的接口获取资料
        let userinfo = {
          id: msg.uid,
          img: '',
          name: msg.uid,
          sign: '',
          last_msg: msg.msgtype == 'text' ? msg.content : (msg.msgtype == 'image' ? '[图片消息]' : (msg.msgtype == 'audio' ? '[语音消息]' : '未知消息')),
        };

        this.props.handleUserProfile(msg.uid, res => {
          userinfo = { ...userinfo, ...res };
          console.log("异步请求的用户资料", userinfo, res, msg);
          addUser(userinfo);
          this.panel != undefined && this.panel.addUser(userinfo);
          this._updateUnreadTag(msg.uid);
        });
      } else {
        // 更新用户的最新消息
        updateUser({ ...user, last_msg: msg.msgtype == 'text' ? msg.content : (msg.msgtype == 'image' ? '[图片消息]' : (msg.msgtype == 'audio' ? '[语音消息]' : '未知消息')) });
        this._updateUnreadTag(msg.uid);
      }

      // 将接受到的新消息插入存储起来
      addChatLog(msg, false);
    }

    // 更新未读标记
    // if (this.chatBoxInstance == undefined) {
    //   // 直接更新
    //   addUnread(1, msg.uid);
    //   console.log("添加未读");
    // } else if (
    //   this.chatBoxInstance.getCurrentUser() == undefined ||
    //   msg.uid != this.chatBoxInstance.getCurrentUser().id
    // ) {
    //   addUnread(1, msg.uid);
    //   console.log("添加未读2");
    // }
    // console.log("添加未读3",this.chatBoxInstance);
    // this.panel != undefined && this.panel.undateUnread(msg.uid);
    // 更新最新的聊天日志
    this.chatBoxInstance != undefined && this.chatBoxInstance.onReceivedMsg(msg);

    // 自动回复的逻辑, 文本消息并且是客户发送的消息
    if (msg.msgtype == 'text' && msg.uid != this.props.user.id) {
      const { auto, reply } = this._autoReplyRule(msg);
      if (auto) {
        this._sendMsg(
          {
            type: 'text',
            content: reply,
          },
          {
            id: msg.uid,
            avator: '',
            name: '',
            sign: '',
          }
        );

        // 给当前的聊天界面加戏
        if (
          this.chatBoxInstance != undefined &&
          this.chatBoxInstance.getCurrentUser() != undefined &&
          msg.uid == this.chatBoxInstance.getCurrentUser().id
        ) {
          this.chatBoxInstance.autoReply({
            type: 'text',
            content: reply,
          });
        } else {
          // 加入历史记录里
          addChatLog(
            {
              id: getFormatTime(),
              uid: this.props.user.id,
              msgtype: 'text',
              content: reply,
              time: getTimestamp(),
              name: this.props.user.nickname,
              img: this.props.user.avator,
            },
            msg.uid
          );
        }
      }
    }
  };

  _updateUnreadTag = (uid) => {
    // 更新未读标记
    if (this.chatBoxInstance == undefined) {
      // 直接更新
      addUnread(1, uid);
    } else if (
      this.chatBoxInstance.getCurrentUser() == undefined ||
      uid != this.chatBoxInstance.getCurrentUser().id
    ) {
      addUnread(1, uid);
    }
    this.panel != undefined && this.panel.undateUnread(uid);
  }

  _autoReplyRule = msg => {
    if (this.props.autoReplyRule.length>0) {
      for (var i = 0; i < this.props.autoReplyRule.length; i++) {
        this.props.autoReplyRule[i]
        if (this.props.autoReplyRule[i][1] == 1) {
          // 全匹配规则
          if (msg.content == this.props.autoReplyRule[i][0]) {
            return { auto: true, reply: this.props.autoReplyRule[i][2] };
          }
        }else{
          // 半匹配
          if (msg.content.indexOf(this.props.autoReplyRule[i][0]) >= 0) {
            return { auto: true, reply: this.props.autoReplyRule[i][2] };
          }
        }
      }
    }
    return { auto: false, reply: '' };
  };

  _sendMsg = (msg, userinfo, callback) => {
    // console.log('发送的内容', msg, userinfo);

    // 判断用户是否存在
    const user = getUser(userinfo.id);
    if (user == undefined) {
      // 调用获取用户资料的接口获取资料
      const tmpuserinfo = {
        id: userinfo.id,
        img: userinfo.img,
        name: userinfo.name,
        sign: userinfo.sign,
        last_msg: msg.msgtype == 'text' ? msg.content : (msg.msgtype == 'image' ? '[图片消息]' : (msg.msgtype == 'audio' ? '[语音消息]' : '未知消息')),
        unread: 0,
      };

      // console.log(tmpuserinfo, "放入的内容");
      addUser(tmpuserinfo);
      this.panel != undefined && this.panel.addUser(tmpuserinfo);
      // this.props.handleUserProfile(msg.uid, res => {
      //   userinfo = { ...tmpuserinfo, ...res };
      //   console.log(tmpuserinfo, '通过接口返回的用户资料2');
      // });
    } else {
      // 更新用户的最新消息
      updateUser({ ...user, last_msg: msg.msgtype == 'text' ? msg.content : (msg.msgtype == 'image' ? '[图片消息]' : (msg.msgtype == 'audio' ? '[语音消息]' : '未知消息')) });
    }

    if (msg.type == 'text') {
      this.imInstance.sendText(msg.content, userinfo.id, (sendResult, msgObj) => {
        // console.log(sendResult);
        callback(sendResult, msgObj);
      });
      this.props.onSendTextMsgListener({text:msg.content,user:userinfo});
    } else if (msg.type == 'image') {
      this.imInstance.sendImage(
        { base64: msg.content.base64, url: msg.content.name, ori_file: msg.content.ori_file },
        userinfo.id,
        (sendResult, msgObj) => {
          // console.log(sendResult);
          callback(sendResult, msgObj);
        }
      );
    } else if (msg.type == 'audio') {
      this.imInstance.sendAudio(
        msg.content,
        userinfo.id,
        (sendResult, msgObj) => {
          // console.log(sendResult);
          callback(sendResult, msgObj);
        }
      );
    } else if (msg.type == 'custom') {
      this.imInstance.sendCustom(msg.content, userinfo.id, (sendResult, msgObj) => {
        // console.log(sendResult);
        callback(sendResult, msgObj);
      });
    }
  };

  playSound = () => {
    // const audioid = 'imaduio';
    const audioid = "audio_play_"+getTimestamp();
    let audio = document.getElementById(audioid);
    if (audio == null) {
      audio = document.createElement('audio');
      audio.id = audioid;
      audio.style.display = 'none';
      console.log("播放声音l");
      audio.autoplay = true;
      audio.setAttribute('src', require('./static/tishi.wav'));
      audio.addEventListener('ended',()=>{
        const div = document.getElementById(audioid);
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
      });
      document.body.appendChild(audio);
    }
    // audio.play();
  };

  _clearUnreadBages = uid => {
    // 清空角标
    clearUserUnread(uid);
    this.panel != undefined && this.panel.undateUnread(uid);
  };

  closeChat = () => {
    this.chatBoxInstance != undefined && this.chatBoxInstance.closePanel();
  };

  openChat = user => {
    this.chatBoxInstance = Chat.open(user, this.props.user);
    this.chatBoxInstance.fixedChatBox = this.props.fixedChatBox;
    this.chatBoxInstance.send = this._sendMsg;
    this.chatBoxInstance.onChatBoxHide = this.props.onChatBoxHide;
    this.chatBoxInstance.clearUnreadFun = this._clearUnreadBages;
    this.chatBoxInstance.defaultAvatar = this.props.defaultAvatar;
    this.chatBoxInstance.enableAudio = this.props.enableAudio;
    this.chatBoxInstance.uploader = this.uploader;
    this.chatBoxInstance.shortcutText = this.props.shortcutText;
    this.chatBoxInstance.loadMoreHistoryFromSDK = this.loadHistoryMessagePrivateTalk;

    // 音视频通话
    this.chatBoxInstance.enableNetCall = this.props.enableNetCall; // ok
    this.chatBoxInstance.calling = this.netcallCalling; // ok

    // this.chatBoxInstance.send = this._sendMsg;

    // 清空角标
    this._clearUnreadBages(user.id);
    this.chatBoxInstance.updateChatList();
    this.imInstance.clearUnreadCount(user.id); // 清除远程未读数
    this.props.onChatBoxShow(); // 执行回调
  };

  netcallCalling = (userinfo) => {
    this.netcallBoxInstance = NetCall.open(userinfo, 0);
    this.netcallBoxInstance.defaultAvatar = this.props.defaultAvatar;
    this.netcallBoxInstance.hangup = this.netcallHangup;
    this.netcallBoxInstance.answer = this.netcallAccept;
    this.imInstance.callup(userinfo.id);
  }

  netcallHangup = () => {
    this.imInstance.hangup();
    this.chatBoxInstance != undefined && this.chatBoxInstance.getCurrentUser() != undefined && this.chatBoxInstance.cancelCalling();
  }

  netcallAccept = ()=>{
    this.imInstance.acceptcall();
  }

  _onCallBeCallingListener = (obj)=>{
    // 判断用户是否存在
    const user = getUser(obj.from);
    if (user == undefined) {
      // 调用获取用户资料的接口获取资料
      let userinfo = {
        id: msg.uid,
        img: '',
        name: msg.uid,
      };

      this.props.handleUserProfile(msg.uid, res => {
        userinfo = { ...userinfo, ...res };
        console.log("异步请求的用户资料", userinfo, res, msg);
        addUser(userinfo);
        this.netcallBoxInstance = NetCall.open({...userinfo, img: userinfo.img == '' ? this.props.defaultAvatar: userinfo.img}, 1);
      });
    } else {
      // 更新用户的最新消息
      this.netcallBoxInstance = NetCall.open({...user, img: user.img == '' ? this.props.defaultAvatar: user.img}, 1);
    }

    this.netcallBoxInstance.defaultAvatar = this.props.defaultAvatar;
    this.netcallBoxInstance.hangup = this.netcallHangup;
    this.netcallBoxInstance.answer = this.netcallAccept;
  }

  _onCallHangup = () =>{
    this.netcallBoxInstance != undefined && this.netcallBoxInstance.hanguped();
  }

  _onCallAccept = () =>{
    this.netcallBoxInstance != undefined && this.netcallBoxInstance.acceptCall();
  }

  loadHistoryMessagePrivateTalk = (target, callback, lasttimestamp)=>{
    if (
      this.props.user != undefined &&
      this.props.user.id != undefined &&
      this.props.user.id != 0
    ) {
      if (this.props.im.toLowerCase() == 'yunxin') {
        this.imInstance.loadHistoryMessage(target,callback,lasttimestamp);
      } else if (this.props.im.toLowerCase() == 'rongyun') {
        this.imInstance.loadHistoryMessage(target,callback);
      }
    }
  }

  uploader = (file, callback) => {

    // 计算base64
    let base64Str = '';
    let imgobj = new Image();
    const fr = new FileReader(); // 实例FileReader对象
    fr.onload = e => {
      // base64Str = fr.result;
      imgobj.src = fr.result;
    };

    imgobj.onload = () => {
      const maxWidth = 200;
      const maxHeight = 250;
      //生成比例
      let width = imgobj.width, height = imgobj.height;
      //计算缩放比例
      if (height > maxHeight) {
        width = width / height * maxHeight;
        height = maxHeight;
      }else{
        if (width > maxWidth) {
          height = maxWidth * height / width;
          width = maxWidth;
        }
      }

      imgobj.width = width;
      imgobj.height = height;

      //生成canvas
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(imgobj, 0, 0, width, height);
      base64Str = canvas.toDataURL('image/png', 0.9);
    };
    fr.readAsDataURL(file); // 把上传的文件对象转换成url

    const scope = `chat_${getTimestamp()}_${file.size}_${generateStr(32)}`;
    const putPolicy = new PutPolicy2({ scope }, this.props.qiniu);
    const observable = QiNiu.upload(file, scope, putPolicy.token(), {}, {});
    observable.subscribe(
      next => {},
      error => {
        callback({ status: false, data: error });
      },
      complete => {
        complete.base64 = base64Str;
        complete.name = this.props.qiniu.url + complete.name;
        callback({ status: true, data: complete });
      }
    );
  };

  render() {
    if (this.state.panelStatus) {
      return (
        <Listbox
          ref={ref => (this.panel = ref)}
          onClose={() => {
            this.setState({ panelStatus: false });
            setPanelStatus(false);
          }}
          fixedMiniBox={this.props.fixedMiniBox}
          defaultAvatar={this.props.defaultAvatar}
          position={this.props.position}
          user={this.props.user}
          signature={this.props.signature}
          onpenChat={this.openChat}
          onUserStatusListener={this._onUserStatusChange}
          onSignChangeListener={this.props.onSignChangeListener}
        />
      );
    } else {
      return (
        <Mainbox
          ref={ref => (this.panel = ref)}
          fixedMiniBox={this.props.fixedMiniBox}
          onClick={() => {
            this.setState({ panelStatus: true });
            setPanelStatus(true);
          }}
          position={this.props.position}
          user={this.props.user}
          onUserStatusListener={this._onUserStatusChange}
        />
      );
    }
  }
}
