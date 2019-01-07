## 简介
本组件依赖于react和antd，经过封装可以通过简单的参数传递来使用**融云**和**网易云信**两类库，如需要其他第三方即时通许服务，请自行研究源码进行逻辑修改

## Get Start

1.  第一步: 安装
`npm install atimui --save-dev`
2.  第二步： 在代码中引入该组件
```javascript
import ATIMUI from 'atimui';
```
3.  第三步：在render方法中进行渲染
```javascript
<ATIMUI
	user={{id:用户id,avator:用户头像,appkey:即时通讯appkey,imtoken:即时通讯IM token,nickname:用户名}}
	im="yunxin"
	/>
```

## props
### im [enum]  第三方即时通讯服务提供商
rongyun、 yunxin 、other

### defaultAvatar [String]  默认头像

### position [Object] 初始化
```json
{
	left:"0px",
	top:"auto",
	right:"10px",
	bottom:"30px"
}
```

### qiniu [Object] 七牛云存储配置信息
```json
{
	bucket:"空间名",
	access_key:"access_key",
	secret_key:"secret_key",
	url:"外链url"
}
```

### user [Object] 登录的用户基本信息

### signature [String] 用户的签名信息

### enableAudio [Bool] 是否允许发送音频消息
true: 允许
false: 不允许

### enableNetCall [Bool] 是否允许网络音频通话
true: 允许
false: 不允许

### fixedChatBox [Bool] 是否固定聊天窗口,不允许拖动
true: 允许
false: 不允许

### fixedMiniBox [Bool] 是否固定会话面板,不允许拖动
true: 允许
false: 不允许

### autoReplyRule [Array] 自动回复关键词规则
每个单元内为三个元素的数组, 0下标表示关键词,1下标表示是否完全匹配,2下标为自动回复的内容
例如:
`[['hello',1,'你好啊~'],['你好啊',1,'hello~']]`

### shortcutText [Array]  快捷短语
`[string,string,string]`

### onUserStatusListener [Function] 用户切换状态/即时通讯服务状态回调监听
该方法会在用户更改服务状态,和即时通讯服务状态异常时自动执行

### handleUserProfile [Function] 用户信息处理方法
该方法用于获取用户的资料信息

| 参数  | 说明  |
| :------------ | :------------ |
|  id |  单用户id |


### handleSessionList [Function]  用于首次登陆处理用户的历史会话资料拉取
传递的参数为批量用户id,批量获取用户资料

| 参数  | 说明  |
| :------------ | :------------ |
|  ids |  逗号分隔开的用户id |

### onSignChangeListener [Function]  用户的签名修改监听
| 参数  | 说明  |
| :------------ | :------------ |
|  text |  新的改变的签名 |

### onReceiveMessageListener [Function] 接收到的消息监听回调
### onSendTextMsgListener  发送消息的回调监听
### onChatBoxShow  聊天窗口显示回调
### onChatBoxHide  聊天窗口隐藏回调



如果有问题或者新的建议，欢迎反馈至issue
