/**
 * @Author: Atishoo <Atishoo>
 * @Date:   2018-12-24
 * @Filename: RongCloud.js
 * @Last modified by:   Atishoo
 * @Last modified time: 2019-01-07
 * @Copyright: Atishoo
 */


import * as RongIMLib from '../vendor/rongcloud/RongIMLib-2.3.2.min'; // 引入融云sdk

export default class RongCloud {
  instance = undefined;

  debug = false;

  onReceived = obj => {};
  onStatusChange = obj => {};
  onSessionList = obj => {};

  constructor(conf) {
    window.RongIMLib = RongIMLib;
    this.debug = conf.debug;
    this.onReceived = conf.onReceived;
    this.onStatusChange = conf.onStatusChange;
    this.onSessionList = conf.onSessionList;
  }

  init = (appKey, token, enableNetCall) => {
    const RongIMLib = window.RongIMLib;
    const { RongIMClient } = RongIMLib;

    RongIMClient.init(appKey);

    this.debug && console.log('atishoo获取实例');
    this.instance = RongIMClient.getInstance();
    this.debug && console.log('RongInstance', this.instance);

    this.debug && console.log('atishoo设置链接状态监听');
    RongIMClient.setConnectionStatusListener({
      onChanged: status => {
        console.info(status);
        switch (status) {
          case RongIMLib.ConnectionStatus.CONNECTED:
            console.info('链接成功');
            this.onStatusChange('online');
            break;
          case RongIMLib.ConnectionStatus.CONNECTING:
            console.log('正在链接');
            this.onStatusChange('offline');
            break;
          case RongIMLib.ConnectionStatus.DISCONNECTED:
            console.log('断开连接');
            this.onStatusChange('offline');
            break;
          case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
            console.log('其他设备登录');
            // this.onStatusChange('online');
            break;
          case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
            console.log('域名不正确');
            this.onStatusChange('offline');
            break;
          case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
            console.log('网络不可用');
            this.onStatusChange('offline');
            break;
        }
      },
    });

    this.debug && console.log('atishoo设置消息接受处理回调事件');
    RongIMClient.setOnReceiveMessageListener({
      // 接收到的消息
      onReceived: message => {
        // 判断消息类型
        // showTips("新消息，类型为：" + message.messageType);
        // showResult("新消息",message,start);
        console.log(message, "rong收到的消息");

        switch (message.messageType) {
          case RongIMLib.RongIMClient.MessageType.TextMessage:
            /*
  		        	显示消息方法：
  		        	消息里是 原生emoji
  		        	RongIMLib.RongIMEmoji.emojiToHTML(message.content.content);
  		            */
            this.onReceived(message);
            break;
          case RongIMLib.RongIMClient.MessageType.VoiceMessage:
            // 对声音进行预加载
            // message.content.content 格式为 AMR 格式的 base64 码
            break;
          case RongIMLib.RongIMClient.MessageType.ImageMessage:
            // message.content.content => 图片缩略图 base64。
            // message.content.imageUri => 原图 URL。
            this.onReceived(message);
            break;
          case RongIMLib.RongIMClient.MessageType.DiscussionNotificationMessage:
            // message.content.extension => 讨论组中的人员。
            break;
          case RongIMLib.RongIMClient.MessageType.LocationMessage:
            // message.content.latiude => 纬度。
            // message.content.longitude => 经度。
            // message.content.content => 位置图片 base64。
            break;
          case RongIMLib.RongIMClient.MessageType.RichContentMessage:
            // message.content.content => 文本消息内容。
            // message.content.imageUri => 图片 base64。
            // message.content.url => 原图 URL。
            break;
          case RongIMLib.RongIMClient.MessageType.InformationNotificationMessage:
            // do something...
            break;
          case RongIMLib.RongIMClient.MessageType.ContactNotificationMessage:
            // do something...
            break;
          case RongIMLib.RongIMClient.MessageType.ProfileNotificationMessage:
            // do something...
            break;
          case RongIMLib.RongIMClient.MessageType.CommandNotificationMessage:
            // do something...
            break;
          case RongIMLib.RongIMClient.MessageType.CommandMessage:
            // do something...
            break;
          case RongIMLib.RongIMClient.MessageType.UnknownMessage:
            this.onReceived(message);
            break;
          default:
          // do something...
        }
      },
    });

    this.debug && console.log('atishoo开始链接');
    // 开始链接
    RongIMClient.connect(
      token,
      {
        onSuccess: userId => {
          console.log('链接成功，用户id：', userId);
          // 初始化会话列表
          RongIMClient.getInstance().getConversationList({
            onSuccess: list => {
              // list => 会话列表集合。
              let userlist = [];
              for (let user of list) {
                userlist.push(user.targetId);
              }

              this.onSessionList(userlist);
            },
            onError: error => {
              console.log("会话列表error", error);
            }
          },null);
          // showInfo("链接成功，用户id：" + userId);
          // sendMessage();
          // getConversationList();

          // const msg = new RongIMLib.TextMessage({ content: "这是测试消息12345678" });
          // console.log(this.instance,"3456789");
          // this.instance.sendMessage(window.RongIMLib.ConversationType.PRIVATE, 30, msg, {
          //   onSuccess: message => {
          //     //message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
          //     console.log('Send successfully', message);
          //   },
          //   onError: (errorCode, message) => {
          //     var info = '';
          //     switch (errorCode) {
          //       case RongIMLib.ErrorCode.TIMEOUT:
          //         info = '超时';
          //         break;
          //       case RongIMLib.ErrorCode.UNKNOWN_ERROR:
          //         info = '未知错误';
          //         break;
          //       case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
          //         info = '在黑名单中，无法向对方发送消息';
          //         break;
          //       case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
          //         info = '不在讨论组中';
          //         break;
          //       case RongIMLib.ErrorCode.NOT_IN_GROUP:
          //         info = '不在群组中';
          //         break;
          //       case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
          //         info = '不在聊天室中';
          //         break;
          //       default:
          //         info = x;
          //         break;
          //     }
          //     console.log('发送失败:' + info);
          //   },
          // });
        },
        onTokenIncorrect: () => {
          // showInfo('token无效');
        },
        onError: errorCode => {
          let info = '';
          switch (errorCode) {
            case RongIMLib.ErrorCode.TIMEOUT:
              info = '超时';
              break;
            case RongIMLib.ErrorCode.UNKNOWN_ERROR:
              info = '未知错误';
              break;
            case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
              info = '不可接受的协议版本';
              break;
            case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
              info = 'appkey不正确';
              break;
            case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
              info = '服务器不可用';
              break;
          }
          console.log(info);
        },
      }
    );

    this.debug && console.log('atishoo链接完成');
  };

  sendText = (text, targetId, callback = () => {}) => {
    // console.log(typeof targetId.toString());
    // console.log(this.instance,"34564gdsdg");
    const msg = new window.RongIMLib.TextMessage({ content: text });
    this.instance.sendMessage(window.RongIMLib.ConversationType.PRIVATE, targetId.toString(), msg, {
      onSuccess: message => {
        // message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
        console.log('Send successfully', message);
      },
      onError: (errorCode, message) => {
        let info = null;
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
            info = '在黑名单中，无法向对方发送消息';
            break;
          case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
            info = '不在讨论组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_GROUP:
            info = '不在群组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
            info = '不在聊天室中';
            break;
          default:
            // info = '异常错误！';
            break;
        }
        console.log('发送失败:', info);
        callback(info, message);
      },
    });
  };

  sendImage = (data, targetId, callback = () => {}) => {
    const msg = new window.RongIMLib.ImageMessage({ content: data.base64, imageUri: data.url });
    this.instance.sendMessage(window.RongIMLib.ConversationType.PRIVATE, targetId.toString(), msg, {
      onSuccess: message => {
        // message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
        console.log('Send successfully');
      },
      onError: (errorCode, message) => {
        let info = null;
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
            info = '在黑名单中，无法向对方发送消息';
            break;
          case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
            info = '不在讨论组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_GROUP:
            info = '不在群组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
            info = '不在聊天室中';
            break;
          default:
            // info = '异常错误！';
            break;
        }
        console.log('发送失败:', info);
        callback(info, message);
      },
    });
  };

  sendAudio = (data, targetId, callback = () => {}) => {
    const msg = new window.RongIMLib.ImageMessage({ content: data.base64, imageUri: data.url });
    this.instance.sendMessage(window.RongIMLib.ConversationType.PRIVATE, targetId.toString(), msg, {
      onSuccess: message => {
        // message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
        console.log('Send successfully');
      },
      onError: (errorCode, message) => {
        let info = null;
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
            info = '在黑名单中，无法向对方发送消息';
            break;
          case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
            info = '不在讨论组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_GROUP:
            info = '不在群组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
            info = '不在聊天室中';
            break;
          default:
            // info = '异常错误！';
            break;
        }
        console.log('发送失败:', info);
        callback(info, message);
      },
    });
  };

  // data={type:1,data:""}
  // 1表示评价消息
  sendCustom = (data, targetId, callback = () => {}) => {
    // 注册自定义消息
    const messageName = 'CustomMessage'; // 消息名称。
    const objectName = 's:custom'; // 消息内置名称，请按照此格式命名。
    const mesasgeTag = new RongIMLib.MessageTag(false, false); // 消息是否保存是否计数，true true 保存且计数，false false 不保存不计数。
    const prototypes = ['type', 'data']; // 消息类中的属性名。
    window.RongIMLib.RongIMClient.registerMessageType(
      messageName,
      objectName,
      mesasgeTag,
      prototypes
    );
    // console.log(typeof targetId.toString());
    // console.log(this.instance,"34564gdsdg");
    const msg = new window.RongIMLib.RongIMClient.RegisterMessage.CustomMessage(data);
    this.instance.sendMessage(window.RongIMLib.ConversationType.PRIVATE, targetId.toString(), msg, {
      onSuccess: message => {
        // message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
        console.log('Send successfully', message);
      },
      onError: (errorCode, message) => {
        let info = null;
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
            info = '在黑名单中，无法向对方发送消息';
            break;
          case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
            info = '不在讨论组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_GROUP:
            info = '不在群组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
            info = '不在聊天室中';
            break;
          default:
            // info = { errorCode, message };
            break;
        }
        console.log('发送失败:', info);
        callback(info, message);
      },
    });
  };

  loadHistoryMessage = (targetId, callback, timestrap=null, count=20) => {
    //conversationType 单聊,其他会话选择相应的消息类型即可。
    // targetId 想获取自己和谁的历史消息，targetId 赋值为对方的 Id。
    // timestrap 默认传 null，若从头开始获取历史消息，请赋值为 0 ,timestrap = 0;
    // count 每次获取的历史消息条数，范围 0-20 条，可以多次获取。
    RongIMLib.RongIMClient.getInstance().getHistoryMessages(window.RongIMLib.ConversationType.PRIVATE, targetId.toString(), timestrap, count, {
      onSuccess: (list, hasMsg) => {
        // list => Message 数组。
        // hasMsg => 是否还有历史消息可以获取。
        let data = {data:[],hasMore:hasMsg,target:targetId};

        for (var i = 0; i < list.length; i++) {
          switch (list[i].messageType) {
            case 'TextMessage': // 处理文本消息
              data.data.push({
                id:list[i].messageUId,
                content:list[i].content.content,
                msgtype:'text',
                time:list[i].sentTime,
                uid:list[i].senderUserId,
                touid:list[i].targetId,
              })
              break;
            case 'ImageMessage': // 处理图片消息
              data.data.push({
                id:list[i].messageUId,
                content:{ url: list[i].content.imageUri, width: 400, height: 400 },
                msgtype:'image',
                time:list[i].sentTime,
                uid:list[i].senderUserId,
                touid:list[i].targetId,
              })
              break;
            default: // 在面板提示收到了位置消息类型的消息
          }
        }
        callback(data);

      },
      onError: (error) => {
        console.log("GetHistoryMessages,errorcode:" + error);
      }
    });
  }

  clearUnreadCount = (targetId)=>{
    this.instance.clearUnreadCount(RongIMLib.ConversationType.PRIVATE,targetId,{
        onSuccess:function(){
            // 清除未读消息成功。
            console.log("清除已读成功");
        },
        onError:function(error){
            // error => 清除未读消息数错误码。
        }
    });
  }

  logout = () => {
    // this.instance.disconnect();
    // delete this.instance;
  };

  reconnect = () => {
    const { RongIMClient } = window.RongIMLib;
    RongIMClient.reconnect(
      {
        onSuccess: userId => {
          console.log(`Reconnect successfully.${userId}`);
          this.onStatusChange('online');
        },
        onTokenIncorrect: () => {
          console.log('token无效');
          this.onStatusChange('offline');
        },
        onError: errorCode => {
          console.log(errorcode);
          this.onStatusChange('offline');
        },
      },
      { auto: true }
    );
  };

  // 音视频方法
  callup = ()=>{}
  acceptcall = ()=>{}
  hangup = ()=>{}
}
