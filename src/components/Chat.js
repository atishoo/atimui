/**
 * @Author: Atishoo <hbuy>
 * @Date:   2018-12-24
 * @Filename: Chat.js
 * @Last modified by:   hbuy
 * @Last modified time: 2019-01-04
 * @Copyright: Atishoo
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button, Menu, Dropdown, List, Modal, Badge, Drawer, Popover, Tooltip, Divider, Spin, message as MessageModal } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

import BenzAMRRecorder from 'benz-amr-recorder';

import styles from '../style/chat.less';
import { setSendType, getSendType, getChatLog, addChatLog, addBatchChatLogHistory, getUserList } from '../util/Storage';
import { getFormatTime, getTimestamp } from '../util/Helper';
import atiface from '../static/atiface.js';

require('../style/modal.css');

const divid = 'atichatbox';
let ChatRef;

const listdata = [
  {
    id: 1,
    uid: 2,
    msgtype: 'text',
    content: '我少见奥设计费奥设计费哦贾师傅就',
    time: '2018年07月24日12:36:41',
    name: '我是和',
    img: 'http://img4.imgtn.bdimg.com/it/u=2148335467,161933967&fm=27&gp=0.jpg',
  },
  {
    id: 2,
    uid: 7,
    msgtype: 'text',
    content: '我少见奥设计费奥设计费哦贾师傅就',
    time: '2018年07月24日12:36:41',
    name: '我发公司的',
    img: 'http://www.qqzhi.com/uploadpic/2015-01-25/193538794.jpg',
  },
  {
    id: 3,
    uid: 2,
    msgtype: 'text',
    content: 'qe;rkjjg;s圣诞快乐发给那里',
    time: '2018年07月24日12:36:41',
    name: '我是和',
    img: 'http://img4.imgtn.bdimg.com/it/u=2148335467,161933967&fm=27&gp=0.jpg',
  },
  {
    id: 4,
    uid: 2,
    msgtype: 'text',
    content: '；高哈尔阿萨德金凤凰；啊哈书法家和阿士大夫乐刻建安费',
    time: '2018年07月24日12:36:41',
    name: '我是和',
    img: 'http://img4.imgtn.bdimg.com/it/u=2148335467,161933967&fm=27&gp=0.jpg',
  },
  {
    id: 5,
    uid: 2,
    msgtype: 'text',
    content:
      '偶尔会就玩了； 加速度；好几个是；的脚后跟；十多个房间；圣诞节个；了圣诞节国剧盛典和更厉害上当了股份好',
    time: '2018年07月24日12:36:41',
    name: '我是和',
    img: 'http://img4.imgtn.bdimg.com/it/u=2148335467,161933967&fm=27&gp=0.jpg',
  },
  {
    id: 6,
    uid: 2,
    msgtype: 'text',
    content: '偶尔国剧盛典和更厉害上当了股份好',
    time: '2018年07月24日12:36:41',
    name: '我是和',
    img: 'http://img4.imgtn.bdimg.com/it/u=2148335467,161933967&fm=27&gp=0.jpg',
  },
  {
    id: 7,
    uid: 2,
    msgtype: 'text',
    content: '问题韩流文化管委会和个人我我略hiUS换个就环卫工',
    time: '2018年07月24日12:36:41',
    name: '我是和',
    img: 'http://img4.imgtn.bdimg.com/it/u=2148335467,161933967&fm=27&gp=0.jpg',
  },
  {
    id: 8,
    uid: 7,
    msgtype: 'text',
    content: '我少见奥设计费奥设计费哦贾师傅就',
    time: '2018年07月24日12:36:41',
    name: '我发公司的',
    img: 'http://www.qqzhi.com/uploadpic/2015-01-25/193538794.jpg',
  },
];

const RecoderIcon = ()=><svg viewBox="0 0 1024 1024" width="1em" height="1em"><path d="M512 702.836364c-104.727273 0-190.836364-86.109091-190.836364-190.836364V190.836364C321.163636 86.109091 407.272727 0 512 0s190.836364 86.109091 190.836364 190.836364V512c0 104.727273-86.109091 190.836364-190.836364 190.836364z m0-642.327273c-72.145455 0-130.327273 58.181818-130.327273 130.327273V512c0 72.145455 58.181818 130.327273 130.327273 130.327273s130.327273-58.181818 130.327273-130.327273V190.836364c0-72.145455-58.181818-130.327273-130.327273-130.327273z" p-id="2478"></path><path d="M404.945455 1024c-16.290909 0-30.254545-13.963636-30.254546-30.254545 0-16.290909 13.963636-30.254545 30.254546-30.254546h76.8V861.090909c-86.109091-6.981818-167.563636-46.545455-225.745455-111.709091-62.836364-62.836364-95.418182-148.945455-95.418182-237.381818 0-16.290909 13.963636-30.254545 30.254546-30.254545s30.254545 13.963636 30.254545 30.254545c0 160.581818 130.327273 290.909091 290.909091 290.909091S802.909091 672.581818 802.909091 512c0-16.290909 13.963636-30.254545 30.254545-30.254545s30.254545 13.963636 30.254546 30.254545c0 88.436364-32.581818 174.545455-95.418182 239.709091-60.509091 65.163636-139.636364 102.4-225.745455 111.709091v100.072727h76.8c16.290909 0 30.254545 13.963636 30.254546 30.254546 0 16.290909-13.963636 30.254545-30.254546 30.254545h-214.10909z" p-id="2479"></path></svg>

// 消息类型 text、image
class Chat extends Component {
  send = undefined;
  fixedChatBox = false;
  onChatBoxHide = undefined;
  defaultAvatar="";
  shortcutText=[];

  // 音视频电话
  calling = undefined;

  clearUnreadFun = undefined;

  audio = undefined;

  constructor(props) {
    super(props);
    this.state = {
      main: {
        height: 520,
        width: 600,
        left: 'auto',
        right: 0,
        top: 'auto',
        bottom: 0,
        x: 0, // 鼠标在msgbox的位置坐标
        y: 0,
      },
      isDragging: false,
      sendHotKey: '',
      chatList: [], // 打开的聊天用户列表
      chatLog: [], // 右侧聊天窗口的聊天日志
      userInfo: undefined,
      self: undefined,
      modalVisible: false,
      chatlogDrawerVisible: false,
      facePopoverVisible: false,
      sendImg: '',
      imgModalVisible:false,
      chatlogLoadMoreFromServer:true, // 拉去远程聊天历史记录
      // 语音消息
      audioRecord: false,
      audioTimer: 0,
      audioPlaying: undefined,
      // 网络电话
      netCall: false
    };
  }

  componentDidMount() {
    this.setState({
      main: Object.assign({}, this.state.main, {
        left: document.body.offsetWidth / 2 - 300,
        right: 'auto',
        top: document.body.offsetHeight / 2 - 260,
        bottom: 'auto',
      }),
      sendHotKey: getSendType(),
    });
  }

  getCurrentUser = () => {
    return this.state.userInfo;
  };

  // 打开新的聊天窗口
  openNewUser = (userinfo, self) => {
    // this.defaultAvatar = defaultAvatar;
    // this.send = sendFun;
    // this.clearUnreadFun = clearUnreadFun;
    userinfo.chose = true;
    let chatList = this.state.chatList;
    let currentUser = userinfo;
    let find = false;
    for (let index in chatList) {
      if (chatList[index].id == userinfo.id) {
        chatList[index].chose = true;
        find = true;
        currentUser = userinfo;
        currentUser.index = index;
      } else {
        chatList[index].chose = false;
      }
    }

    if (!find) {
      chatList.push(userinfo);
      currentUser.index = chatList.length - 1;
    }

    if (this.state.chatList.length == 1) {
      this.setState(
        { chatList, self, userInfo: currentUser, chatLog: getChatLog(userinfo.id) },
        () => {
          if (this.state.chatLog.length<=5) {
            this.loadMoreHistory(0);
          }
          ReactDOM.findDOMNode(
            this.chatLogListView
          ).parentNode.scrollTop = this.chatLogListView.scrollComponent.scrollHeight;
        }
      );
    } else {
      this.setState(
        {
          chatList,
          userInfo: currentUser,
          self,
          chatLog: getChatLog(userinfo.id),
          main: Object.assign({}, this.state.main, { width: 800 }),
        },
        () => {
          if (this.state.chatLog.length<=5) {
            this.loadMoreHistory(0);
          }
          ReactDOM.findDOMNode(
            this.chatLogListView
          ).parentNode.scrollTop = this.chatLogListView.scrollComponent.scrollHeight;
        }
      );
    }
  };

  static open = (userinfo, self) => {
    let div = document.getElementById(divid);
    if (div == null) {
      div = document.createElement('div');
      div.id = divid;
      document.body.appendChild(div);
      ChatRef = ReactDOM.render(<Chat />, div);
      ChatRef.openNewUser(userinfo, self);
    } else {
      ChatRef.openNewUser(userinfo, self);
    }

    return ChatRef;
  };

  onMouseDown = event => {
    if (!this.fixedChatBox) {
      if (event.type.indexOf('mouse') >= 0) {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
      } else {
        document.addEventListener('touchmove', this.onMouseMove);
        document.addEventListener('touchend', this.onMouseUp);
      }

      event.preventDefault();
      const { x, y } = ReactDOM.findDOMNode(this.chatbox).getBoundingClientRect();
      this.setState({
        main: Object.assign({}, this.state.main, { x: event.clientX - x, y: event.clientY - y }),
        isDragging: true,
      });
    }
  };

  onMouseMove = event => {
    if (!this.fixedChatBox) {
      this.state.isDragging &&
        this.setState({
          main: Object.assign({}, this.state.main, {
            left: event.clientX - this.state.main.x,
            right: 'auto',
            top: event.clientY - this.state.main.y,
            bottom: 'auto',
          }),
        });
    }
  };

  onMouseUp = event => {
    if (!this.fixedChatBox) {
      if (event.type.indexOf('mouse') >= 0) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
      } else {
        document.removeEventListener('touchmove', this.onMouseMove);
        document.removeEventListener('touchend', this.onMouseUp);
      }
      const { x, y } = ReactDOM.findDOMNode(this.chatbox).getBoundingClientRect();
      this.setState({
        main: Object.assign({}, this.state.main, {
          left: x,
          right: 'auto',
          top: y,
          bottom: 'auto',
        }),
        isDragging: false,
      });
    }
  };

  onReceivedMsg = obj => {
    if (this.state.userInfo != undefined) {
      if (obj.uid == this.state.userInfo.id) {
        // 滚动聊天记录到最新位置
        let chatLog = this.state.chatLog;
        obj.id = obj.time;
        obj.img = this.state.userInfo.img;
        // obj.uid = this.state.userInfo.id;
        obj.name = this.state.userInfo.name;
        // obj.time = getFormatTime(obj.time);;
        chatLog.push(obj);
        this.setState({ chatLog }, () => {
          this.scrollTo(
            ReactDOM.findDOMNode(this.chatLogListView).parentNode,
            this.chatLogListView.scrollComponent.scrollHeight,
            500
          );
        });
      } else {
        // 收到了别人的聊天记录
      }
    }

    this.updateChatList();
  };

  updateChatList = () => {
    // 更新侧边栏的数据显示
    const userlist = getUserList();
    let chatlist = this.state.chatList;
    for (let useritem in userlist) {
      for (let chatitem in chatlist) {
        if (userlist[useritem].id == chatlist[chatitem].id) {
          chatlist[chatitem] = { ...chatlist[chatitem], ...userlist[useritem] };
        }
      }
    }

    this.setState({ chatList: chatlist });
  };

  closePanel = () => {
    // 清楚不需要的信息
    this.setState({ userInfo: undefined }, () => {
      const div = document.getElementById(divid);
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult) {
        document.body.removeChild(div);
      }
    });
    this.onChatBoxHide(); // 执行隐藏回调
  };

  selectItem = i => {
    // 清空输入框
    this.textarea.value = '';

    let chatList = this.state.chatList;
    let currentUser;
    for (let index in chatList) {
      if (index == i) {
        chatList[index].chose = true;
        currentUser = chatList[index];
        currentUser.index = index;
      } else {
        chatList[index].chose = false;
      }
    }
    // 清理未读角标，设置当前选择用户，设置当前聊天列表的选择状态，获取当前选择用户的聊天历史记录
    this.clearUnreadFun != undefined && this.clearUnreadFun(currentUser.id);
    this.setState({ chatList, userInfo: currentUser, chatLog: getChatLog(currentUser.id) }, () => {
      ReactDOM.findDOMNode(
        this.chatLogListView
      ).parentNode.scrollTop = this.chatLogListView.scrollComponent.scrollHeight;
    });
    this.updateChatList();
  };

  closeItem = (i, event) => {
    event.preventDefault();
    event.stopPropagation();
    let chatList = this.state.chatList;

    if (chatList.length == 1) {
      this.closePanel();
    } else {
      const nowCurrent = chatList[i].chose;
      let currentUser = this.state.userInfo;
      if (nowCurrent) {
        // 当前删除的就是选中的
        for (let index in chatList) {
          chatList[index].chose = false;
        }
        if (i == 0) {
          if (chatList.length > 1) {
            currentUser = chatList[1];
            currentUser.index = 0;
            chatList[1].chose = true;
          }
        } else {
          currentUser = chatList[i - 1];
          currentUser.index = i - 1;
          chatList[i - 1].chose = true;
        }
      } else {
      }

      chatList = [].concat(chatList.slice(0, i), chatList.slice(parseInt(i) + 1));

      if (chatList.length == 1) {
        this.setState({
          chatList,
          userInfo: currentUser,
          chatLog: getChatLog(currentUser.id),
          main: Object.assign({}, this.state.main, { width: 600 }),
        }, () => {
          ReactDOM.findDOMNode(
            this.chatLogListView
          ).parentNode.scrollTop = this.chatLogListView.scrollComponent.scrollHeight;
        });
      } else {
        this.setState({ chatList, userInfo: currentUser, chatLog: getChatLog(currentUser.id) }, () => {
          ReactDOM.findDOMNode(
            this.chatLogListView
          ).parentNode.scrollTop = this.chatLogListView.scrollComponent.scrollHeight;
        });
      }

    }
  };

  scrollTo = (ele, to, duration) => {
    const start = ele.scrollTop;

    const change = to - start;

    let currentTime = 0;

    const increment = 20;

    currentTime += increment;
    const easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    const animateScroll = function() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      ele.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  autoReply = msg => {
    const message = {
      id: getFormatTime(),
      uid: this.state.self.id,
      msgtype: msg.type,
      content: msg.content,
      time: getTimestamp(),
      name: this.state.self.nickname,
      img: this.state.self.avator,
    };
    // 滚动聊天记录到最新位置
    let chatLog = this.state.chatLog;
    chatLog.push(message);
    this.state.userInfo != undefined && addChatLog(message, this.state.userInfo.id); // 加入历史记录
    this.setState({ chatLog }, () => {
      this.scrollTo(
        ReactDOM.findDOMNode(this.chatLogListView).parentNode,
        this.chatLogListView.scrollComponent.scrollHeight,
        500
      );
    });
  };

  loadMoreHistory = (page)=>{
    const oriheight = this.chatLogListView.scrollComponent.scrollHeight;
    this.loadMoreHistoryFromSDK(this.state.userInfo.id, data=>{
      // 先判断当前的用户是否是需要获取到历史数据的用户，不是的话就不需要再继续渲染
      if (this.state.userInfo.id.toString() === data.target.toString()) {
        // 开始准备渲染
        addBatchChatLogHistory(data.target.toString(), data.data);
        this.setState({chatLog: data.data.concat(this.state.chatLog.length>0?this.state.chatLog:[]), chatlogLoadMoreFromServer:data.hasMore});
        ReactDOM.findDOMNode(
          this.chatLogListView
        ).parentNode.scrollTop = this.chatLogListView.scrollComponent.scrollHeight-oriheight;
      }
    }, this.state.chatLog[0]==undefined?Date.now():this.state.chatLog[0].time);
  }

  _sendTextMsg = () => {
    if (
      this.textarea.value != '' &&
      this.textarea.value != undefined &&
      this.textarea.value != null
    ) {
      const message = {
        id: getFormatTime(),
        uid: this.state.self.id,
        msgtype: 'text',
        content: this.textarea.value,
        time: getTimestamp(),
        name: this.state.self.nickname,
        img: this.state.self.avator,
      };

      // 调用传入的消息发送功能
      this.send({ type: 'text', content: this.textarea.value }, this.state.userInfo, errormsg=>{
        if (errormsg == null) {
          // 滚动聊天记录到最新位置
          let chatLog = this.state.chatLog;
          chatLog.push(message);
          this.state.userInfo != undefined && addChatLog(message, this.state.userInfo.id); // 加入历史记录
          this.setState({ chatLog }, () => {
            this.scrollTo(
              ReactDOM.findDOMNode(this.chatLogListView).parentNode,
              this.chatLogListView.scrollComponent.scrollHeight,
              500
            );
          });
        }else{
          MessageModal.error(errormsg);
        }
      });
      // 清空输入框
      this.textarea.value = '';
    }
  };

  _sendImageMsg = obj => {
    const message = {
      id: getFormatTime(),
      uid: this.state.self.id,
      msgtype: 'image',
      content: { url: obj.name, width: obj.w, height: obj.h },
      time: getTimestamp(),
      name: this.state.self.nickname,
      img: this.state.self.avator,
    };

    // 调用传入的消息发送功能
    this.send({ type: 'image', content: obj }, this.state.userInfo, errormsg=>{
      if (errormsg == null) {
        // 滚动聊天记录到最新位置
        let chatLog = this.state.chatLog;
        chatLog.push(message);
        this.state.userInfo != undefined && addChatLog(message, this.state.userInfo.id); // 加入历史记录
        this.setState({ chatLog }, () => {
          this.scrollTo(
            ReactDOM.findDOMNode(this.chatLogListView).parentNode,
            this.chatLogListView.scrollComponent.scrollHeight,
            500
          );
        });
      }else{
        MessageModal.error(errormsg);
      }
    });
    // 清空输入框
    this.textarea.value = '';
  };

  _sendCustomMsg = (type = 1) => {
    switch (parseInt(type)) {
      case 1:
        const message = {
          id: getFormatTime(),
          uid: this.state.self.id,
          msgtype: 'custom',
          content: '您已向用户发送邀请评价！',
          time: getTimestamp(),
          name: this.state.self.nickname,
          img: this.state.self.avator,
        };

        // 调用传入的消息发送功能
        this.send(
          { type: 'custom', content: { type: 1, data: 'evaluate,please' } },
          this.state.userInfo,
          errormsg=>{
            if (errormsg == null) {
              // 滚动聊天记录到最新位置
              let chatLog = this.state.chatLog;
              chatLog.push(message);
              this.state.userInfo != undefined && addChatLog(message, this.state.userInfo.id); // 加入历史记录

              this.setState({ chatLog }, () => {
                this.scrollTo(
                  ReactDOM.findDOMNode(this.chatLogListView).parentNode,
                  this.chatLogListView.scrollComponent.scrollHeight,
                  500
                );
              });
            }else{
              MessageModal.error(errormsg);
            }
          }
        );
        break;
      default:
    }
  };

  _recordStart = ()=>{
    // 设置倒计时
    let timer = 60; // 最长录制60秒音频
    this.recorderTimer = window.setInterval(()=>{
      timer--;
      if (timer <= 0) {
        window.clearInterval(this.recorderTimer);
        this.recorderTimer = undefined;
        this._recordStop(true);
      } else if (timer <= 10) {
        this.setState({audioTimer: timer});
      }
    }, 1000)
    this.audio = new BenzAMRRecorder();
    this.audio.initWithRecord().then(() => {
      this.audio.startRecord();
    });
    // // 开始录音
    // window.navigator.mediaDevices.getUserMedia({
    //   // audio: {
    //   //   sampleRate: 8000, // 采样率
    //   //   channelCount: 1,   // 声道
    //   //   volume: 1.0        // 音量
    //   // },
    //   audio: true
    // }).then(mediaStream => {
    //   console.log(mediaStream, "mediaStream");
    //   // beginRecord(mediaStream);
    //   let audioContext = new (window.AudioContext || window.webkitAudioContext);
    //   let mediaNode = audioContext.createMediaStreamSource(mediaStream);
    //
    //   const BUFFER_SIZE = 4096;
    //   const INPUT_CHANNEL_COUNT = 2;
    //   const OUTPUT_CHANNEL_COUNT = 2;
    //   // createJavaScriptNode已被废弃
    //   let creator = audioContext.createScriptProcessor || audioContext.createJavaScriptNode;
    //   creator = creator.bind(audioContext);
    //   let jsNode = creator(BUFFER_SIZE, INPUT_CHANNEL_COUNT, OUTPUT_CHANNEL_COUNT);
    //
    //   // 这里connect之后就会自动播放了
    //   // mediaNode.connect(audioContext.destination)
    //   jsNode.connect(audioContext.destination)
    //   jsNode.onaudioprocess = e=>console.log(e.inputBuffer);
    //   // 把mediaNode连接到jsNode
    //   mediaNode.connect(jsNode);
    //   this.audio = {
    //     mediaStream:mediaStream,
    //     mediaNode:mediaNode,
    //     jsNode:jsNode
    //   }
    // }).catch(err => {
    //   // 如果用户电脑没有麦克风设备或者用户拒绝了，或者连接出问题了等
    //   // 这里都会抛异常，并且通过err.name可以知道是哪种类型的错误
    //   console.error(err, "声音错误");
    // })
  }

  _recordStop = (issend = false) => {
    // 停止录音
    if (this.audio != undefined) {
      if (issend) {
        // 保存文件并发送
        this.audio.finishRecord().then(() => {
          let message = {
            id: getFormatTime(),
            uid: this.state.self.id,
            msgtype: 'audio',
            content: { url: window.URL.createObjectURL(this.audio.getBlob()), duration: Math.round(this.audio.getDuration()*1000) },
            time: getTimestamp(),
            name: this.state.self.nickname,
            img: this.state.self.avator,
          };

          // 调用传入的消息发送功能
          this.send({ type: 'audio', content: { ori_file:this.audio.getBlob(),duration: Math.round(this.audio.getDuration()*1000) } }, this.state.userInfo, (errormsg, msg)=>{
            if (errormsg == null) {
              // console.log(msg, "返回的消息实体");
              message.content.url = msg.file.url;
              // message.content.url = msg.file.mp3Url;
              // 滚动聊天记录到最新位置
              let chatLog = this.state.chatLog;
              chatLog.push(message);
              this.state.userInfo != undefined && addChatLog(message, this.state.userInfo.id); // 加入历史记录
              this.setState({ chatLog }, () => {
                this.scrollTo(
                  ReactDOM.findDOMNode(this.chatLogListView).parentNode,
                  this.chatLogListView.scrollComponent.scrollHeight,
                  500
                );
              });
            }else{
              MessageModal.error(errormsg);
            }
          });
            // downRecordLink.href = window.URL.createObjectURL(this.audio..getBlob());
            // downRecordLink.innerHTML = '下载录音amr文件';
            // recordDuration.innerHTML = amrForRecorder.getDuration().toFixed(2) + '\'';
        });;
        // const aa = this.audio.getBlob();
      }else{
        this.audio.cancelRecord();
      }
      // this.audio.mediaStream.getAudioTracks()[0].stop();
      // this.audio.mediaNode.disconnect();
      // this.audio.jsNode.disconnect();
      // delete this.audio;
    }

    window.clearInterval(this.recorderTimer);
    this.recorderTimer = undefined;
    // this.setState({audioTimer: 0});
    this.setState({audioRecord:false,audioTimer:0});
  }

  _calling = () => {
    this.setState({netCall:true});
    this.calling({...this.state.userInfo, img: this._getTargetAvator()}); // 申请拨打电话
  }

  cancelCalling = () =>{
    this.setState({netCall:false});
  }

  playAudio = (index, data)=>{
    const play = (stop=false) =>{
      // data.duration 是毫秒
      if (this.player != undefined && this.player.isPlaying()) {
        if (stop) {
          this.player.stop();
        }else{
          this.player.stop();
          this.player = new BenzAMRRecorder();
          this.player.initWithUrl(data.url).then(() => {
            this.player.play();
            this.player.onEnded(() => {
              this.player.stop();
              this.setState({audioPlaying:undefined});
            });
            // setTimeout(()=>{}, Math.round(data.duration)+1000)
          });
        }
      }else{
        this.player = new BenzAMRRecorder();
        this.player.initWithUrl(data.url).then(() => {
          this.player.play();
          this.player.onEnded(() => {
            this.player.stop();
            this.setState({audioPlaying:undefined});
          });
          // setTimeout(()=>{this.player.stop();this.setState({audioPlaying:undefined});}, Math.round(data.duration)+1000);
        });
      }
    }
    let tmp = [];
    if (this.state.audioPlaying == undefined) {
      tmp[index]=true;
      this.setState({audioPlaying:tmp},play);
    }else{
      if (this.state.audioPlaying[index] == undefined) {
        tmp[index]=true;
        this.setState({audioPlaying:tmp},play);
      }else{
        this.setState({audioPlaying:undefined},play(true));
      }
    }

  }

  keyDownLinstener = event => {
    if (this.state.sendHotKey == 'Enter') {
      if (event.keyCode == 13 && event.key == 'Enter' && event.ctrlKey) {
        // 插入换行符
        this.textarea.value += '\r\n';
        event.preventDefault();
      } else if (event.keyCode == 13 && event.key == 'Enter') {
        // 发送消息
        event.preventDefault();
        this._sendTextMsg();
      }
    } else if (event.keyCode == 13 && event.key == 'Enter' && event.ctrlKey) {
      // 发送消息
      event.preventDefault();
      this._sendTextMsg();
    }
  };

  _bindKeyDownLinstener = () => {
    document.addEventListener('keydown', this.keyDownLinstener);
  };

  _unbindKeyDownLinstener = () => {
    document.removeEventListener('keydown', this.keyDownLinstener);
  };

  _dropListener = event => {
    event.preventDefault();
    // 限制只允许发送图片
    if (
      event.dataTransfer.files.length > 0 &&
      event.dataTransfer.files[0].type.indexOf('image') >= 0
    ) {
      this._fileUploader(event.dataTransfer.files[0]);
    }
  };

  _pasteListener = event => {
    console.log('event.clipboardData', event.clipboardData);
    console.log('event.clipboardDatafiles', event.clipboardData.files[0]);
    console.log('event.clipboardDataitems', event.clipboardData.items[0]);
    console.info('this.fileView', this.fileView.files);
    // 限制只允许图片可以上传并且发送消息
    if (
      event.clipboardData.files.length > 0 &&
      event.clipboardData.files[0].type.indexOf('image') >= 0
    ) {
      event.preventDefault();
      // this.textarea.value = '';
      this._fileUploader(event.clipboardData.files[0]);
    }

    // this.setState({modalVisible:true})

    // Modal.confirm({
    //   title: '您要上传本图片吗?',
    //   content: <div style={{width:314,height:314,display:"flex",justifyContent:"center",alignItems:"center"}}>{this.state.sendImg==""?<img src={this.state.sendImg} style={{width:80}} />:<img src={this.state.sendImg} style={{width:"100%"}} />}</div>,
    //   className:"vertical-center-modal",
    //   okText: "发送",
    //   cancelText: "取消",
    //   onOk: ()=>{
    //     this._fileUploader(event.clipboardData.files[0]);
    //   },
    //   onCancel: ()=>{
    //   },
    // });
    // this.fileView.file[0] = event.clipboardData.files[0];
    // let fr=new FileReader();//实例FileReader对象
    // fr.readAsDataURL(event.clipboardData.files[0]);//把上传的文件对象转换成url
    // console.log("clipboardDatafr",fr.result);
    // fr.onload = e=>{
    //   console.log(fr.result,"aclipboardDatadfngalkn");
    // }
  };

  _fileUploader = file => {
    // 2M以上拒绝上传
    if (file.size/1024/1024>2) {
      // 图片过大
      console.log("maximum size");
      MessageModal.warning('图片超出2M，请先压缩再发送！');
    }else{
      this.uploader(file, result => {
        console.log('回调获取到的信息', result);
        // 这里获取到上传的结果信息
        if (result.status) {
          this._sendImageMsg({...result.data,ori_file: file});
        }
      });
    }
  };

  _parseFaceMotion = text => {
    // text = "wwww[微笑]eeee[鬼脸]asdfasfasd[大笑]w222";
    const regex = new RegExp('\\[[a-zA-Z0-9\\/\\u4e00-\\u9fa5]+\\]', 'g');
    let contentArray = [];
    const regArray = text.match(regex);
    if (regArray === null) {
      return text;
    }

    let indexArray = [];
    let pos = text.indexOf(regArray[0]); // 头
    for (let i = 1; i < regArray.length; i++) {
      indexArray.push(pos);
      pos = text.indexOf(regArray[i], pos + 1);
    }
    indexArray.push(pos); // 尾

    let facesets = [];
    // 替换表情
    for (let keyword of regArray) {
      let findresult = false;
      for (let face of atiface) {
        if (face.value == keyword) {
          findresult = true;
          facesets.push(
            <img
              src={face.img}
              style={Object.assign({}, face.imgstyle, { marginLeft: 2, marginRight: 2 })}
            />
          );
        }
      }
      if (!findresult) {
        facesets.push(keyword);
      }
    }

    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i] === 0) {
        // 一开始就是表情
        contentArray.push(facesets[i]);
      } else {
        if (i === 0) {
          contentArray.push(text.substr(0, indexArray[i]));
        } else if (indexArray[i] - indexArray[i - 1] - regArray[i - 1].length > 0) {
          // 两个表情相邻，中间不加content
          contentArray.push(
            text.substr(
              indexArray[i - 1] + regArray[i - 1].length,
              indexArray[i] - indexArray[i - 1] - regArray[i - 1].length
            )
          );
        }
        contentArray.push(facesets[i]);
      }
    }

    const lastLocation = indexArray[indexArray.length - 1] + regArray[regArray.length - 1].length;
    if (text.length > lastLocation) {
      contentArray.push(text.substr(lastLocation, text.length - lastLocation));
    }
    return (
      <span>
        {contentArray.map((d, ident) => (
          <span key={`face${ident}`}>{d}</span>
        ))}
      </span>
    );
  };

  _getTargetAvator = ()=>{
      return this.state.userInfo == undefined||this.state.userInfo.img == undefined||this.state.userInfo.img == ''
        ? this.defaultAvatar
        : this.state.userInfo.img;
  }

  render() {
    return (
      <div
        style={{
          width: this.state.main.width,
          height: this.state.main.height,
          zIndex: 1000,
          position: 'fixed',
          top: this.state.main.top,
          left: this.state.main.left,
          right: this.state.main.right,
          bottom: this.state.main.bottom,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          boxShadow: '0 0 60px rgba(0,0,0,.5)',
          borderRadius: 5,
          overflow: 'hidden',
        }}
        ref={ref => (this.chatbox = ref)}
      >
        <div
          className={styles.sidebox}
          style={this.state.chatList.length <= 1 ? { display: 'none' } : { display: 'flex' }}
        >
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            hasMore={false}
            useWindow={false}
            loadMore={() => {}}
          >
            <List
              dataSource={this.state.chatList}
              renderItem={(item, index) => (
                <List.Item
                  key={item.id}
                  style={{ border: 'none', padding: 0 }}
                  onClick={() => this.selectItem(index)}
                >
                  <div className={item.chose ? styles.sideitem_active : styles.sideitem}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={item.img==""?this.defaultAvatar:item.img}
                        style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}
                      />
                      <div style={{userSelect:'none'}}>
                        <div
                          style={{
                            fontSize: 16,
                            width: 110,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {item.name}
                        </div>
                        {item.unread > 0 && (
                          <div style={{ fontSize: 10, color: '#ffffff80' }}>
                            [
                            {item.unread > 99 ? '99+' : item.unread}
                            条未读]
                          </div>
                        )}
                      </div>
                    </div>
                    <a className={styles.sideitem_closebtn} onClick={e => this.closeItem(index, e)}>
                      <Icon type="close-circle" style={{ fontSize: 16, color: '#000' }} />
                    </a>
                  </div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>

        <div className={styles.mainbox}>
          <div
            className={styles.boxtitle}
            onMouseDown={this.onMouseDown}
            onMouseMove={this.onMouseMove}
            onMouseUp={this.onMouseUp}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <img
                src={this._getTargetAvator()}
                style={{ height: 50, width: 50, borderRadius: 25 }}
              />
              <div className={styles.userinfo}>
                <span style={{ fontSize: 18 }}>
                  {this.state.userInfo == undefined ? '---' : this.state.userInfo.name}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: '#999999',
                    width: 420,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {this.state.userInfo == undefined||this.state.userInfo.sign==''
                    ? '这个人很懒，什么都没写~'
                    : this.state.userInfo.sign}
                </span>
              </div>
            </div>
            <div className={styles.setwindow}>
              <a>
                <Icon type="minus" style={{ color: '#000000' }} />
              </a>
              <a>
                <Icon type="select" style={{ color: '#000000' }} />
              </a>
              <a onClick={this.closePanel}>
                <Icon type="close" style={{ color: '#000000' }} />
              </a>
            </div>
          </div>

          <div className={styles.chatloglist} onDrop={this._dropListener}>
            <InfiniteScroll
              ref={scrollref => (this.chatLogListView = scrollref)}
              isReverse={true}
              initialLoad={false}
              pageStart={0}
              loadMore={this.loadMoreHistory}
              hasMore={this.state.chatlogLoadMoreFromServer}
              useWindow={false}
              loader={<div style={{textAlign:"center"}} key="loading0"><span style={{margin:"0 auto"}}><Spin size="small" style={{marginRight:7}}/>加载中 ...</span></div>}
            >
              <List
                dataSource={this.state.chatLog}
                locale={{ emptyText: '' }}
                renderItem={(item, index) => {
                  if (item.uid == this.state.self.id) {
                    // 判断是自己的消息
                    // 接下来判断消息类型
                    switch (item.msgtype) {
                      case 'text':
                      case 'image':
                        return (
                          <List.Item key={item.id} style={{ border: 'none', padding: 0 }}>
                            <div
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-start',
                                paddingVertical: 20,
                                margin: '6px 20px',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-end',
                                  marginRight: 10,
                                }}
                              >
                                <span>
                                  <span style={{ fontSize: 7 }}>{getFormatTime(item.time)}</span>
                                  {' '}
                                  {this.state.self.nickname}
                                </span>

                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    right: -4,
                                    marginTop: 5,
                                  }}
                                >
                                  <div className={styles.message_me}>
                                    {item.msgtype == 'text' ? (
                                      this._parseFaceMotion(item.content)
                                    ) : item.msgtype == 'image' ? (
                                      <img
                                        onClick={()=>this.setState({imgModalVisible:item.content.url})}
                                        src={item.content.url}
                                        style={
                                          item.content.width <= 200
                                            ? {
                                                width: item.content.width,
                                                height: item.content.height,
                                              }
                                            : {
                                                width: 200,
                                                height:
                                                  (item.content.height / item.content.width) * 200,
                                              }
                                        }
                                      />
                                    ) : (
                                      '未知消息类型'
                                    )}
                                  </div>
                                  <div className={`${styles.arrow} ${styles.right}`} />
                                </div>
                              </div>
                              <img
                                src={this.state.self.avator}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                              />
                            </div>
                          </List.Item>
                        );
                        break;
                      case 'audio':
                        return (
                          <List.Item key={item.id} style={{ border: 'none', padding: 0 }}>
                            <div
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-start',
                                paddingVertical: 20,
                                margin: '6px 20px',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-end',
                                  marginRight: 10,
                                }}
                              >
                                <span>
                                  <span style={{ fontSize: 7 }}>{getFormatTime(item.time)}</span>
                                  {' '}
                                  {this.state.self.nickname}
                                </span>

                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    right: -4,
                                    marginTop: 5,
                                  }}
                                >
                                  <div style={{paddingLeft:Math.round(item.content.duration/1000)*2+8}} className={this.state.audioPlaying!=undefined&&this.state.audioPlaying[index]?styles.audiomessage_me_playing:styles.audiomessage_me} onClick={()=>this.playAudio(index, item.content)}>
                                    {Math.round(item.content.duration/1000)}″
                                  </div>
                                  <div className={`${styles.arrow} ${styles.right}`} />
                                </div>
                              </div>
                              <img
                                src={this.state.self.avator}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                              />
                            </div>
                          </List.Item>
                        );
                        break;
                      case 'custom':
                        return (
                          <List.Item key={item.id} style={{ border: 'none', padding: 0 }}>
                            <div
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '6px 20px',
                              }}
                            >
                              <div
                                style={{
                                  borderRadius: 4,
                                  backgroundColor: '#00000030',
                                  padding: '2px 5px',
                                  fontSize: 10,
                                }}
                              >
                                {item.content}
                              </div>
                            </div>
                          </List.Item>
                        );
                      default:
                    }
                  } else {
                    // 逻辑类似，进行提示
                    switch (item.msgtype) {
                      case 'text':
                      case 'image':
                        return (
                          <List.Item key={item.id} style={{ border: 'none', padding: 0 }}>
                            <div
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                paddingVertical: 20,
                                margin: '6px 20px',
                              }}
                            >
                              <img
                                src={
                                  this.state.userInfo == undefined||this.state.userInfo.img == undefined||this.state.userInfo.img == ''
                                    ? this.defaultAvatar
                                    : this.state.userInfo.img
                                }
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-start',
                                  marginLeft: 10,
                                }}
                              >
                                <span>
                                  {this.state.userInfo == undefined
                                    ? '---'
                                    : this.state.userInfo.name}
                                  {' '}
                                  <span style={{ fontSize: 7 }}>{getFormatTime(item.time)}</span>
                                </span>

                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    left: -4,
                                    marginTop: 5,
                                  }}
                                >
                                  <div className={`${styles.arrow} ${styles.left}`} />
                                  <div className={styles.message}>
                                    {item.msgtype == 'text' ? (
                                      this._parseFaceMotion(item.content)
                                    ) : item.msgtype == 'image' ? (
                                      <img
                                        onClick={()=>this.setState({imgModalVisible:item.content.url})}
                                        src={item.content.url}
                                        style={
                                          item.content.width <= 200
                                            ? {
                                                width: item.content.width,
                                                height: item.content.height,
                                              }
                                            : {
                                                width: 200,
                                                height:
                                                  (item.content.height / item.content.width) * 200,
                                              }
                                        }
                                      />
                                    ) : (
                                      '未知消息类型'
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List.Item>
                        );
                        break;
                      case 'audio':
                        return (
                          <List.Item key={item.id} style={{ border: 'none', padding: 0 }}>
                            <div
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                paddingVertical: 20,
                                margin: '6px 20px',
                              }}
                            >
                              <img
                                src={
                                  this.state.userInfo == undefined||this.state.userInfo.img == undefined||this.state.userInfo.img == ''
                                    ? this.defaultAvatar
                                    : this.state.userInfo.img
                                }
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                              />
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-start',
                                  marginLeft: 10,
                                }}
                              >
                                <span>
                                  {this.state.userInfo == undefined
                                    ? '---'
                                    : this.state.userInfo.name}
                                  {' '}
                                  <span style={{ fontSize: 7 }}>{getFormatTime(item.time)}</span>
                                </span>

                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    left: -4,
                                    marginTop: 5,
                                  }}
                                >
                                  <div className={`${styles.arrow} ${styles.left}`} />
                                  <div style={{paddingRight:Math.round(item.content.duration/1000)*2+8}} className={this.state.audioPlaying!=undefined&&this.state.audioPlaying[index]?styles.audiomessage_playing:styles.audiomessage} onClick={()=>this.playAudio(index, item.content)}>
                                    {Math.round(item.content.duration/1000)}″
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List.Item>
                        );
                        break;
                      case 'custom':
                        return (
                          <List.Item key={item.id} style={{ border: 'none', padding: 0 }}>
                            <div
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '6px 20px',
                              }}
                            >
                              <div
                                style={{
                                  borderRadius: 4,
                                  backgroundColor: '#00000030',
                                  padding: '2px 5px',
                                  fontSize: 10,
                                }}
                              >
                                {item.content}
                              </div>
                            </div>
                          </List.Item>
                        );
                        break;
                      default:
                    }
                  }
                }}
              />
            </InfiniteScroll>
          </div>

          <div onDrop={this._dropListener} className={styles.inputbox}>
            <div className={styles.toolbar}>
              <div>
                <Popover
                  placement="top"
                  visible={this.state.facePopoverVisible}
                  content={
                    <div style={{ width: 220, overflow: 'auto' }}>
                      <ul
                        className={styles.face}
                        onClick={e => {
                          this.textarea.value += e.target.title;
                          this.textarea.focus();
                          this.setState({ facePopoverVisible: false });
                        }}
                      >
                        {atiface.map((v, i) => {
                          return (
                            <li key={v.value} title={v.value} style={v.style}>
                              <img title={v.value} style={v.imgstyle} src={v.img} />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  }
                  trigger="click"
                  onVisibleChange={value => this.setState({ facePopoverVisible: value })}
                >
                  <Tooltip title="表情" placement="bottom">
                    <a className={styles.baritem}>
                      <Icon type="smile-o" style={{ fontSize: 20, color: '#000000' }} />
                    </a>
                  </Tooltip>
                </Popover>
                <Tooltip title="图片" placement="bottom">
                  <a className={styles.baritem} onClick={() => this.fileView.click()}>
                    <Icon type="picture" style={{ fontSize: 20, color: '#000000' }} />
                    <input
                      type="file"
                      accept="image/*"
                      ref={file => (this.fileView = file)}
                      onChange={() => this._fileUploader(this.fileView.files[0])}
                      style={{
                        filter: 'alpha(opacity=0)',
                        opacity: 0,
                        width: 0,
                        height: 0,
                        display: 'none',
                      }}
                    />
                  </a>
                </Tooltip>
                {this.shortcutText.length > 0 && <Dropdown
                  overlay={
                    <Menu
                      onClick={({ key }) => {
                        this.textarea.value += key;
                        this.textarea.focus();
                      }}
                    >
                      {this.shortcutText.map(data=><Menu.Item key={data}><span>{data}</span></Menu.Item>)}
                    </Menu>
                  }
                  placement="topCenter"
                  trigger={['click']}
                >
                  <Tooltip title="快捷短语" placement="bottom">
                    <a className={styles.baritem}>
                      <Icon type="book" style={{ fontSize: 20, color: '#000000' }} />
                    </a>
                  </Tooltip>
                </Dropdown>}
                <Tooltip title="邀请评价" placement="bottom">
                  <a className={styles.baritem} onClick={() => this._sendCustomMsg(1)}>
                    <Icon type="heart-o" style={{ fontSize: 20, color: '#000000' }} />
                  </a>
                </Tooltip>
                {this.enableAudio && <Tooltip title="发送语音" placement="bottom">
                  <a className={styles.baritem} onClick={() => this.setState({audioRecord:true}, this._recordStart)}>
                    <Icon component={RecoderIcon} style={{ fontSize: 20, color: '#000000' }} />
                  </a>
                </Tooltip>}
                {this.enableNetCall && <Tooltip title="网络电话" placement="bottom">
                  <a className={styles.baritem} onClick={this._calling}>
                    <Icon type="phone" style={{ fontSize: 20, color: '#000000' }} />
                  </a>
                </Tooltip>}
              </div>
              <a
                style={{
                  color: '#000',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}
                onClick={() => this.setState({ chatlogDrawerVisible: true })}
              >
                <Icon
                  type="clock-circle-o"
                  style={{ fontSize: 16, color: '#000000', marginRight: 5 }}
                />
                <span>聊天记录</span>
              </a>
            </div>
            <textarea
              ref={ref => (this.textarea = ref)}
              className={styles.textinput}
              palcehold="请输入要发送的消息"
              onPaste={this._pasteListener}
              autoFocus
              onFocus={() => this._bindKeyDownLinstener()}
              onBlur={() => this._unbindKeyDownLinstener()}
            />
            <div className={styles.bottomBtn}>
              <Button
                type="primary"
                style={{ marginRight: 10 }}
                onClick={e =>
                  this.closeItem(
                    this.state.userInfo == undefined ? 0 : this.state.userInfo.index,
                    e
                  )
                }
              >
                关闭
              </Button>
              <Button.Group>
                <Button type="primary" onClick={this._sendTextMsg}>
                  发送
                </Button>
                <Dropdown
                  overlay={
                    <Menu
                      onClick={item => {
                        setSendType(item.key);
                        this.setState({ sendHotKey: item.key });
                      }}
                    >
                      <Menu.Item key="Enter">
                        {this.state.sendHotKey == 'Enter' ? (
                          <Icon type="check" style={{ color: '#66A36F' }} />
                        ) : (
                          <Icon type="check" style={{ color: '#66A36F00' }} />
                        )}
                        按Enter键发送消息
                      </Menu.Item>
                      <Menu.Item key="CtrlEnter">
                        {this.state.sendHotKey != 'Enter' ? (
                          <Icon type="check" style={{ color: '#66A36F' }} />
                        ) : (
                          <Icon type="check" style={{ color: '#66A36F00' }} />
                        )}
                        按Ctrl+Enter键发送消息
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                  placement="bottomRight"
                >
                  <Button type="primary" icon="caret-down" />
                </Dropdown>
              </Button.Group>
            </div>
          </div>
        </div>

        <Modal
          title="您确定要发送该图片吗？"
          visible={this.state.modalVisible}
          okText="发送"
          cancelText="取消"
          closable={false}
          maskClosable={false}
          onOk={() => this.setState({ modalVisible: false })}
          onCancel={() => this.setState({ modalVisible: false })}
        >
          <div
            style={{
              width: 472,
              height: 314,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {this.state.sendImg == '' ? (
              <img src={this.state.sendImg} style={{ width: 80 }} />
            ) : (
              <img src={this.state.sendImg} style={{ width: '100%' }} />
            )}
          </div>
        </Modal>
        <Modal
          title=""
          visible={this.state.audioRecord}
          maskClosable={false}
          width={200}
          onCancel={()=>this._recordStop()}
          footer={null}
          centered={true}
          destroyOnClose={true}
          bodyStyle={{borderRadius:6,padding:"20px 0 0 0",overflow:"hidden",width:200}}
        >
          <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
            <h3>请说话！</h3>
            {this.state.audioTimer > 0 ? <span style={{fontSize:80,fontWeight:200,lineHeight:'80px'}}>{this.state.audioTimer}</span> : <Icon component={RecoderIcon} style={{ fontSize: 80, color: '#000000' }} />}
            <Divider style={{marginBottom:0}}/>
            <button className={styles.speakdone} onClick={()=>this._recordStop(true)}>说完了</button>
          </div>
        </Modal>
        <Modal
          title=""
          visible={this.state.imgModalVisible!=false}
          onCancel={()=>this.setState({imgModalVisible:false})}
          footer={null}
          closable={false}
          destroyOnClose={true}
          maskClosable={true}
          centered={true}
          bodyStyle={{borderRadius:4,padding:0,overflow:"hidden"}}
          width="auto"
        >
          <img src={this.state.imgModalVisible} />
        </Modal>
        <Drawer
          title="聊天记录详情"
          placement="right"
          width={500}
          destroyOnClose
          closable
          onClose={() => this.setState({ chatlogDrawerVisible: false })}
          visible={this.state.chatlogDrawerVisible}
        >
          <p>正在建设中...可以期待下</p>
        </Drawer>
      </div>
    );
  }
}

export default Chat;
