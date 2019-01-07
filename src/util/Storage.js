/**
 * @Author: Atishoo <Atishoo>
 * @Date:   2018-10-08
 * @Filename: Storage.js
 * @Last modified by:   Atishoo
 * @Last modified time: 2019-01-07
 * @Copyright: Atishoo
 */


const data = {
  chatlog: {},
  history: {},
  sendHotKey: 'Enter',
  panelStatus: false,
  userStatus: 'offline',
  unread: 0,
};

const key = 'imchat';

/**
 * 按照未读消息进行排序
 */
function unread_sort(userlist) {
  let list = [];
  for (let uid in userlist) {
    list.push(userlist[uid]);
  }
  for (let i = 0; i < list.length-1; i++) {
    for (let j = 0; j < list.length-i-1; j++) {
      if (list[j].unread == undefined || list[j].unread < list[j+1].unread) {
        [ list[j+1], list[j] ] = [ list[j], list[j+1] ]
      }
    }
  }

  let newuserlist = {};
  for (var i = 0; i < list.length; i++) {
    newuserlist["atim_"+list[i].id] = list[i]
  }
  return newuserlist;
}

function setItem(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getChatData() {
  let chatdata = {};
  if (localStorage.getItem(key) == null) {
    setItem(key, data);
    chatdata = JSON.stringify(data);
  } else {
    chatdata = localStorage.getItem(key);
  }
  return JSON.parse(chatdata);
}

/**
 * 用户信息要有以下几点
 {
   id: 18,
   img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
   name: 'aaa',
   sign: '这是一个人该有的态度',
   last_msg: '你好吗！',
   unread: 9,
   tag_unread: 1 // 标记未读
 }
 */

function getUser(id) {
  const chatdata = getChatData();
  return chatdata.history["atim_"+id];
}

function getUserList() {
  const chatdata = getChatData();

  chatdata.history = unread_sort(chatdata.history);
  setItem(key, chatdata);

  return chatdata.history;
}

function addUser(info) {
  let chatdata = getChatData();
  let tmp = [];
  if (chatdata.history["atim_"+info.id] == undefined) {
    tmp["atim_"+info.id] = info;
  }else{
    tmp["atim_"+info.id] = {...chatdata.history["atim_"+info.id],...info};
  }
  chatdata.history = Object.assign({}, chatdata.history, tmp);

  setItem(key, chatdata);
}

function addUsers(users, override = false) {
  let chatdata = getChatData();
  let tmp = [];
  for (let user of users) {
    if (user.id == undefined) {
      continue;
    }else{
      if (override) {
        if (chatdata.history["atim_"+user.id] != undefined && chatdata.history["atim_"+user.id].last_msg != undefined && chatdata.history["atim_"+user.id].last_msg == '加载中...') {
          tmp["atim_"+user.id] = {...chatdata.history["atim_"+user.id],last_msg:"暂无消息",...user};
        }else{
          tmp["atim_"+user.id] = {last_msg:"暂无消息",...chatdata.history["atim_"+user.id],...user};
        }
      }else{
        if (chatdata.history["atim_"+user.id] == undefined) {
          tmp["atim_"+user.id] = {sign:"这个家伙很懒，什么都没有写",last_msg:"暂无消息",unread:0,...user};
        }else{
          tmp["atim_"+user.id] = {...user,...chatdata.history["atim_"+user.id]};
        }
      }
    }
  }
  chatdata.history = Object.assign({}, chatdata.history, tmp);

  setItem(key, chatdata);
}

function updateUser(info) {
  let chatdata = getChatData();
  const user = chatdata.history["atim_"+info.id];

  if (user != undefined) {
    chatdata.history["atim_"+info.id] = { ...user, ...info };
  }

  setItem(key, chatdata);
}

function removeUser(id) {
  let chatdata = getChatData();

  delete chatdata.history["atim_"+id];
  setItem(key, chatdata);
}

function clearUser() {
  let chatdata = getChatData();

  chatdata.history = {};
  setItem(key, chatdata);
}

// 聊天记录
function getChatLog(id) {
  const chatdata = getChatData();
  return chatdata.chatlog[id] == undefined ? [] : chatdata.chatlog[id];
}

function addChatLog(msg, to) {
  let chatdata = getChatData();

  let logs;
  let tmp = [];
  if (to === false) {
    // 不是自己的消息
    logs = chatdata.chatlog[msg.uid];
    tmp[msg.uid] = [];
  } else {
    // 是自己的消息
    logs = chatdata.chatlog[to];
    tmp[to] = [];
  }

  if (logs == undefined) {
    // 从来没有消息记录
    for (let key in tmp) {
      tmp[key].push(msg);
    }
    chatdata.chatlog = Object.assign({}, chatdata.chatlog, tmp);
  } else {
    // 直接将消息放入消息列表
    logs.push(msg);
    if (to === false) {
      // 不是自己的消息
      chatdata.chatlog[msg.uid] = logs;
    } else {
      // 是自己的消息
      chatdata.chatlog[to] = logs;
    }
  }

  setItem(key, chatdata);
}

function addBatchChatLogHistory(uid, data) {
  let chatdata = getChatData();
  let logs = chatdata.chatlog[uid];
  if (logs != undefined && logs.length > 0) {
    chatdata.chatlog[uid] = data.concat(logs);
  }else{
    chatdata.chatlog[uid] = data;
  }
  setItem(key, chatdata);
}

// 加已读未读数据角标
function addUnread(count, userid) {
  let chatdata = getChatData();
  const userinfo = chatdata.history["atim_"+userid];

  console.log("开始add unread");
  if (userinfo == undefined) {
    return true;
  } else {
    chatdata.unread += parseInt(count);
    console.log(userinfo, "开始add", parseInt(userinfo.unread), parseInt(count));
    if (isNaN(parseInt(userinfo.unread)) === false) {
      chatdata.history["atim_"+userid].unread = parseInt(userinfo.unread) + parseInt(count);
    }else{
      chatdata.history["atim_"+userid].unread = 0 + parseInt(count);
    }
    // chatdata.history["atim_"+userid].unread = parseInt(userinfo.unread) + parseInt(count);
    chatdata.history["atim_"+userid].tag_unread != undefined && delete chatdata.history["atim_"+userid].tag_unread;
    console.log("完成add unread",chatdata.history["atim_"+userid]);

    setItem(key, chatdata);
    return true;
  }
}

function clearUserUnread(userid) {
  let chatdata = getChatData();
  const userinfo = chatdata.history["atim_"+userid];
  if (userinfo == undefined) {
    return true;
  } else {
    chatdata.unread -= chatdata.history["atim_"+userid].unread;
    chatdata.history["atim_"+userid].tag_unread != undefined && delete chatdata.history["atim_"+userid].tag_unread;
    chatdata.history["atim_"+userid].unread = 0;

    setItem(key, chatdata);
    return true;
  }
}

function setSendType(type) {
  let chatdata = getChatData();
  chatdata.sendHotKey = type;
  setItem(key, chatdata);
}

function getSendType() {
  const chatdata = getChatData();
  return chatdata.sendHotKey;
}

function setPanelStatus(type) {
  let chatdata = getChatData();
  chatdata.panelStatus = type;
  setItem(key, chatdata);
}

function getPanelStatus() {
  const chatdata = getChatData();
  return chatdata.panelStatus;
}

function setUserStatus(status) {
  let chatdata = getChatData();
  chatdata.userStatus = status;
  chatdata = setItem(key, chatdata);
}

function getUserStatus() {
  const chatdata = getChatData();
  return chatdata.userStatus;
}

function getAllUnread() {
  const chatdata = getChatData();
  return chatdata.unread;
}

export {
  getUser,
  updateUser,
  getUserList,
  addUser,
  addUsers,
  removeUser,
  clearUser,
  getChatLog,
  addChatLog,
  addBatchChatLogHistory,
  addUnread,
  clearUserUnread,
  setSendType,
  getSendType,
  setPanelStatus,
  getPanelStatus,
  setUserStatus,
  getUserStatus,
  getAllUnread,
};
