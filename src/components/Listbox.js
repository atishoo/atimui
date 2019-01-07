/**
 * @Author: Atishoo <hbuy>
 * @Date:   2018-07-19
 * @Filename: Listbox.js
 * @Last modified by:   hbuy
 * @Last modified time: 2018-12-27
 * @Copyright: Atishoo
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Badge, Dropdown, Menu, Tabs, List, Avatar, Spin, Modal } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

import styles from '../style/main.less';
import { getUserStatus, setUserStatus, getUserList, removeUser, clearUser, addUnread, updateUser } from '../util/Storage';

// const data = [
//   {
//     id: 13262828762,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: '可用信息',
//     sign:
//       '这是一个人该有的态度是一个人该有的态度是一个人该有的态度是一个人该有的态度是一个人该有的态度是一个人该有的态度是一个人该有的态度',
//     last_msg: '你好是一个人该有的态度是一个人该有的态度吗！',
//     unread: 7,
//   },
//   {
//     id: 13,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: '2345',
//     sign: '这是一个人该有是一个人该有的态度的态度',
//     last_msg: '你好吗！',
//     unread: 0,
//   },
//   {
//     id: 14,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: '让我更稳固',
//     sign: '额风格呢号呢提货人隔阂和',
//     last_msg:
//       '你是一个人该有的态度是一个人该有的态度是一个人该有的态度是一个人该有的态度是一个人该有的态度好吗！',
//     unread: 9,
//   },
//   {
//     id: 15,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: 'rethink',
//     sign: '弃我而去翁',
//     last_msg: '你好吗！',
//     unread: 9,
//   },
//   {
//     id: 16,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: '对方更好的',
//     sign: '这是一个人该有的态度',
//     last_msg: '你好吗！',
//     unread: 9,
//   },
//   {
//     id: 17,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: '那个会',
//     sign: '份高蛋白的反光板',
//     last_msg: '你好吗！',
//     unread: 9,
//   },
//   {
//     id: 18,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: '大法官好麻烦',
//     sign: '请问而退全额认购',
//     last_msg: '你好吗！',
//     unread: 9,
//   },
//   {
//     id: 19,
//     img: 'http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg',
//     name: '马上打完',
//     sign: '暗示法发顺丰的',
//     last_msg: '你好吗！',
//     unread: 9,
//   },
// ];



export default class Listbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: {
        left: 'auto',
        right: 0,
        top: 'auto',
        bottom: 0,
        x: 0, // 鼠标在msgbox的位置坐标
        y: 0,
      },
      userlist: [],
      isDragging: false,
      menuStatus: 'people',
      userStatus: 'offline',
      sign: ""
    };
  }

  componentDidMount() {
    let userlist = getUserList();
    let list = [];
    for (let uid in userlist) {
      list.push(userlist[uid]);
    }
    this.setState({
      sign: this.props.signature,
      userStatus: getUserStatus(),
      userlist: list,
      main: Object.assign({}, this.state.main, this.props.position),
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      sign: nextProps.signature,
      userStatus: getUserStatus(),
      main: Object.assign({}, this.state.main, nextProps.position),
    });
  }

  addUser = info => {
    let userlist = this.state.userlist;
    userlist.unshift(info);
    this.setState({ userlist });
  };

  undateUnread = userid => {
    const userlist = getUserList();
    let list = [];
    for (let uid in userlist) {
      list.push(userlist[uid]);
    }
    this.setState({ userlist: list });
  };

  changeStatus = (key, manual = false) => {
    this.setState({ userStatus: key });
    manual && this.props.onUserStatusListener(key);
    setUserStatus(key);
  };

  menu = (
    <Menu onClick={({ key }) => this.changeStatus(key, true)}>
      <Menu.Item key="online">
        <a rel="noopener noreferrer">
          <Badge status="success" text="在线" style={{ fontSize: 8 }} />
        </a>
      </Menu.Item>
      <Menu.Item key="busy">
        <a rel="noopener noreferrer">
          <Badge status="warning" text="忙碌" style={{ fontSize: 8 }} />
        </a>
      </Menu.Item>
      <Menu.Item key="offline">
        <a rel="noopener noreferrer">
          <Badge status="default" text="离线" style={{ fontSize: 8 }} />
        </a>
      </Menu.Item>
    </Menu>
  );

  onMouseDown = event => {
    if (!this.props.fixedMiniBox) {
      if (event.type.indexOf('mouse') >= 0) {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
      } else {
        document.addEventListener('touchmove', this.onMouseMove);
        document.addEventListener('touchend', this.onMouseUp);
      }

      event.preventDefault();
      const { x, y } = ReactDOM.findDOMNode(this.listbox).getBoundingClientRect();
      this.setState({
        main: Object.assign({}, this.state.main, { x: event.clientX - x, y: event.clientY - y }),
        isDragging: true,
      });
    }
  };

  onMouseMove = event => {
    if (!this.props.fixedMiniBox) {
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
    if (!this.props.fixedMiniBox) {
      if (event.type.indexOf('mouse') >= 0) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
      } else {
        document.removeEventListener('touchmove', this.onMouseMove);
        document.removeEventListener('touchend', this.onMouseUp);
      }
      const { x, y } = ReactDOM.findDOMNode(this.listbox).getBoundingClientRect();
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

  tabClick = item => {
    this.setState({ menuStatus: item.key });
  };

  aboutus = () => {
    Modal.info({
      title: '关于IM UI',
      content: (
        <div>
          <p>基于Ant Design的聊天UI</p>
          <p>
            版本号：1.0
            <br />
            Powered by Atishoo
          </p>
        </div>
      ),
      centered: true,
      okText: '确定',
      onOk() {},
    });
  };

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          zIndex: 999,
          width: 260,
          height: 520,
          top: this.state.main.top,
          left: this.state.main.left,
          right: this.state.main.right,
          bottom: this.state.main.bottom,
          backgroundColor: '#ffffff',
          boxShadow: '1px 1px 50px rgba(0,0,0,.3)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
        ref={ref => (this.listbox = ref)}
        onClick={e=>e.preventDefault()}
      >
        <div
          style={{
            height: 86,
            backgroundColor: '#F6F6F6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            padding: '14px 15px 0px',
            cursor: 'default',
          }}
        >
          <div
            style={!this.props.fixedMiniBox?{
              cursor: 'move',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }:{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onMouseDown={this.onMouseDown}
            onMouseMove={this.onMouseMove}
            onMouseUp={this.onMouseUp}
          >
            <div>
              <img
                src={this.props.user.avator}
                style={{ width: 32, height: 32, borderRadius: 16 }}
              />
              <span style={{ fontSize: 16, marginLeft: 10, marginRight: 10 }}>
                {this.props.user.username}
              </span>
              <Dropdown overlay={this.menu} trigger={['click']}>
                {this.state.userStatus == 'online' ? (
                  <Badge status="success" text="在线" style={{ fontSize: 8, cursor: 'pointer' }} />
                ) : this.state.userStatus == 'busy' ? (
                  <Badge status="warning" text="忙碌" style={{ fontSize: 8, cursor: 'pointer' }} />
                ) : (
                  <Badge status="default" text="离线" style={{ fontSize: 8, cursor: 'pointer' }} />
                )}
              </Dropdown>
            </div>
            <a onClick={this.props.onClose}>
              <Icon type="close" style={{ color: '#000' }} />
            </a>
          </div>

          <div className={styles.sign} >
            <input placeholder="编辑签名" value={this.state.sign} onChange={(e)=>this.setState({sign:e.target.value})} onBlur={()=>this.props.onSignChangeListener(this.state.sign)} onKeyDown={(e)=>e.keyCode==13&&e.target.blur()}/>
          </div>

        </div>
        {/**<Menu
          onClick={this.tabClick}
          selectedKeys={[this.state.menuStatus]}
          mode="horizontal"
          style={{
            backgroundColor: '#F6F6F6',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Menu.Item key="people">
            <Icon type="user" style={{ fontSize: 20 }} />
          </Menu.Item>
          <Menu.Item key="history">
            <Icon type="clock-circle-o" style={{ fontSize: 20 }} />
          </Menu.Item>
        </Menu>**/}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
          }}
        >
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            useWindow={false}
            loadMore={() => {}}
            hasMore={false}
          >
            <List
              dataSource={this.state.userlist}
              rowKey="id"
              locale={{ emptyText: '暂无联系人' }}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  className={styles.useritem}
                  onClick={() => this.props.onpenChat(item)}
                >
                  <Dropdown overlay={<Menu onClick={({key,domEvent})=>{
                      domEvent.preventDefault();
                      domEvent.stopPropagation();
                      if (key==="1") {
                        removeUser(item.id);
                      }else if (key==="0") {
                        // 标记未读
                        addUnread(1, item.id);
                        updateUser({tag_unread:1,id:item.id});
                      }else{
                        clearUser();
                      }
                      this.undateUnread(0);
                    }}>
                    <Menu.Item key="0">标记未读</Menu.Item>
                    <Menu.Item key="1">删除该聊天</Menu.Item>
                    <Menu.Item key="2">清空全部聊天</Menu.Item>
                  </Menu>} trigger={['contextMenu']}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'stretch',
                        padding: '5px 15px',
                        cursor: 'pointer',
                      }}
                    >
                      <Badge count={item.unread} style={item.tag_unread!=undefined&&item.tag_unread>0?{backgroundColor:'#27c24c'}:{}}>
                        <Avatar size="large" shape="circle" src={item.img==""?this.props.defaultAvatar:item.img} />
                      </Badge>
                      <div
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                          padding: '0 10px',
                        }}
                      >
                        <span style={{ fontSize: 14,userSelect:'none' }}>{item.name}</span>
                        <span
                          style={{
                            fontSize: 12,
                            color: '#999999',
                            width: '155px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            userSelect:'none'
                          }}
                        >
                          {item.last_msg}
                        </span>
                      </div>
                    </div>
                  </Dropdown>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
        <div
          style={{
            height: 37,
            backgroundColor: '#F6F6F6',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <a className={styles.bottomfun}>
            <Icon type="search" style={{ fontSize: 16, color: '#00000065' }} />
          </a>
          <a className={styles.bottomfun} onClick={this.aboutus}>
            <Icon type="info-circle-o" style={{ fontSize: 16, color: '#00000065' }} />
          </a>
        </div>
      </div>
    );
  }
}
