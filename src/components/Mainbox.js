/**
 * @Author: Atishoo <hbuy>
 * @Date:   2018-07-18
 * @Filename: index.js
 * 主要用于建立即时通讯的主UI
 * @Last modified by:   hbuy
 * @Last modified time: 2018-12-27
 * @Copyright: Atishoo
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tag, Badge, Dropdown, Menu } from 'antd';

import { getUserStatus, setUserStatus, getAllUnread } from '../util/Storage';

export default class Mainbox extends Component {
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
      isDragging: false,
      userStatus: 'offline',
      unreadBageCount: 0,
    };
  }

  componentDidMount() {
    this.setState({
      userStatus: getUserStatus(),
      unreadBageCount: getAllUnread(),
      main: Object.assign({}, this.state.main, this.props.position),
    });
  }

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
      const { x, y } = ReactDOM.findDOMNode(this.mainbox).getBoundingClientRect();
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
      const { x, y } = ReactDOM.findDOMNode(this.mainbox).getBoundingClientRect();
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

  undateUnread = userid => {
    this.setState({ unreadBageCount: getAllUnread() });
  };

  addUser = info => {
    // 定义本方法只是为了防止报错
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

  render() {
    return (
      <div
        ref={ref => (this.mainbox = ref)}
        style={{
          zIndex: 999,
          position: 'fixed',
          right: this.state.main.right,
          bottom: this.state.main.bottom,
          top: this.state.main.top,
          left: this.state.main.left,
          backgroundColor: '#ffffff',
          border: '1px solid #D9D9D9',
          boxShadow: '1px 1px 50px rgba(0,0,0,.3)',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            position: 'relative',
            overflow: 'auto',
            padding: '5px 10px',
            whiteSpace: 'nowrap',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}
        >
          <Badge count={this.state.unreadBageCount} dot>
            <a style={!this.props.fixedMiniBox?{ cursor: 'move' }:{}}>
              <img
                onMouseDown={this.onMouseDown}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                src={this.props.user.avator}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
            </a>
          </Badge>
          <div
            onClick={this.props.onClick}
            style={{
              fontWeight: 'bold',
              margin: '0px 10px',
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {this.props.user.username}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Dropdown overlay={this.menu} trigger={['click']} placement="topRight">
              {this.state.userStatus == 'online' ? (
                <Tag color="#52c41a">在线</Tag>
              ) : this.state.userStatus == 'busy' ? (
                <Tag color="#faad14">忙碌</Tag>
              ) : (
                <Tag color="#d9d9d9">离线</Tag>
              )}
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
