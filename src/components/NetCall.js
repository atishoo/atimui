/**
 * @Author: Atishoo <hbuy>
 * @Date:   2019-01-04
 * @Filename: NetCall.js
 * @Last modified by:   hbuy
 * @Last modified time: 2019-01-04
 * @Copyright: Atishoo
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import styles from '../style/netcall.less';

const divid = 'atinetcallbox';
let NetCallRef;

class NetCall extends Component {
  defaultAvatar="";
  hangup = undefined; // 挂断
  answer = undefined; // 接听

  state = {
    main: {
      height: 'auto',
      width: 300,
      left: 'auto',
      right: 0,
      top: 'auto',
      bottom: 0,
      x: 0, // 鼠标在msgbox的位置坐标
      y: 0,
    },
    isDragging: false,
    userinfo : undefined,
    status: 0, // 0表示正在呼叫1表示等待接听2表示通话中,
    hint:'', // 提示文字
  }

  componentDidMount() {
    this.setState({
      main: Object.assign({}, this.state.main, {
        left: document.body.offsetWidth / 2 - 300,
        right: 'auto',
        top: document.body.offsetHeight / 2 - 260,
        bottom: 'auto',
      })
    });
  }

  onMouseDown = event => {
    if (event.type.indexOf('mouse') >= 0) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    } else {
      document.addEventListener('touchmove', this.onMouseMove);
      document.addEventListener('touchend', this.onMouseUp);
    }

    event.preventDefault();
    const { x, y } = ReactDOM.findDOMNode(this.netcallbox).getBoundingClientRect();
    this.setState({
      main: Object.assign({}, this.state.main, { x: event.clientX - x, y: event.clientY - y }),
      isDragging: true,
    });
  };

  onMouseMove = event => {
    this.state.isDragging &&
      this.setState({
        main: Object.assign({}, this.state.main, {
          left: event.clientX - this.state.main.x,
          right: 'auto',
          top: event.clientY - this.state.main.y,
          bottom: 'auto',
        }),
      });
  };

  onMouseUp = event => {
    if (event.type.indexOf('mouse') >= 0) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    } else {
      document.removeEventListener('touchmove', this.onMouseMove);
      document.removeEventListener('touchend', this.onMouseUp);
    }
    const { x, y } = ReactDOM.findDOMNode(this.netcallbox).getBoundingClientRect();
    this.setState({
      main: Object.assign({}, this.state.main, {
        left: x,
        right: 'auto',
        top: y,
        bottom: 'auto',
      }),
      isDragging: false,
    });
  };

  openCall = (userinfo, status) => {
    this.setState({userinfo: userinfo, status: status});
  }

  static open = (userinfo, status) => {
    // let div = document.getElementById(divid);
    // if (div == null) {
    //   div = document.createElement('div');
    //   div.id = divid;
    //   document.body.appendChild(div);
    //   NetCallRef = ReactDOM.render(<NetCall />, div);
    //   NetCallRef.openCall(userinfo, status);
    // } else {
    //   NetCallRef.openCall(userinfo, status);
    // }
    //
    // return NetCallRef;

    let div = document.getElementById(divid);
    if (div == null) {
      div = document.createElement('div');
      div.id = divid;
      document.body.appendChild(div);

      NetCallRef = ReactDOM.render(<NetCall />, div);
      NetCallRef.openCall(userinfo, status);
    } else {
      NetCallRef.openCall(userinfo, status);
    }

    return NetCallRef;
  };

  close = () => {
    const div = document.getElementById(divid);
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult) {
      document.body.removeChild(div);
    }
  }

  hanguped = () => {
    // 电话被挂断
    this.setState({
      hint: "通话已被对方挂断"
    }, ()=>setTimeout(this.close, 1500));
  }

  acceptCall = () => {
    this.setState({status:2});
  }

  _hangupCall = ()=>{
    this.close();
    this.hangup != undefined && this.hangup();
  }

  _accept = ()=>{
    this.setState({status:2}, ()=>{
      this.answer != undefined && this.answer();
    });
  }

  render() {
    return (
      <div
        style={{
          width: this.state.main.width,
          height: this.state.main.height,
          zIndex: 1001,
          position: 'fixed',
          top: this.state.main.top,
          left: this.state.main.left,
          right: this.state.main.right,
          bottom: this.state.main.bottom,
          boxShadow: '0 0 60px rgba(0,0,0,.5)',
          borderRadius: 5,
          overflow: 'hidden',
          cursor: 'move'
        }}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        ref={ref => (this.netcallbox = ref)}
        className={styles.container}
       >
        <div style={{background:`#00000060 url(${this.state.userinfo==undefined?this.defaultAvatar:this.state.userinfo.img}) no-repeat top`}} className={styles.callbg} />
        <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",paddingTop:80,paddingBottom:50,position:"relative",background:"#00000030"}}>
          <img src={this.state.userinfo==undefined?this.defaultAvatar:this.state.userinfo.img} width="70" height="70" style={{borderRadius:8,borderWidth:0}} />
          <h3 style={{marginTop:10,marginBottom:5,fontSize:25,color:"#fff"}}>{this.state.userinfo == undefined ? '---' : this.state.userinfo.name}</h3>
          <span>{this.state.hint != '' ? this.state.hint : (this.state.status === 0 ? '正在等待对方接受' : (this.state.status === 1 ? '邀请你语音通话' : '正在通话'))}</span>
          {this.state.status !== 2 && <div className={styles.callloading}>
            <span></span>
            <span></span>
            <span></span>
          </div>}
          {this.state.status === 1 && <div className={styles.callreceive}>
            <Button onClick={this._hangupCall} type="primary" shape="circle" size="large" icon="phone" style={{backgroundColor:"#ff0000",transform:'rotate(-135deg)',fontSize:25,marginTop:100,width:50,height:50}} />
            <Button onClick={this._accept} type="primary" shape="circle" size="large" icon="phone" style={{backgroundColor:"#00BA2A",borderColor:"#00BA2A",transform:'rotate(90deg)',fontSize:25,marginTop:100,width:50,height:50}} />
          </div>}
          {this.state.status !== 1 && <Button onClick={this._hangupCall} type="primary" shape="circle" size="large" icon="phone" style={{backgroundColor:"#ff0000",transform:'rotate(-135deg)',fontSize:25,marginTop:100,width:50,height:50}} />}
        </div>
      </div>
    );
  }
}

export default NetCall;
