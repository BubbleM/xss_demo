# xss_demo
模拟XSS攻击以及防御措施
下载后请依次执行
- npm install 
- npm start

http://localhost:3000/ 进入下面页面
1. 点击评论将文本框中的代码段提交到服务器
2. 点击获取评论 会弹出1 （由于图片的src地址为null，服务器报404故出发onerror事件 可在控制台看到404）
这是默认触发

![初始样式.png](http://upload-images.jianshu.io/upload_images/3188930-faad103c9b0e80b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

用户主动触发 可以在文本框加入代码
```html
<button type="button" onclick="攻击我!">攻击我</button>
```
用户点击按钮 会弹出攻击我
