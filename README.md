# screen scale
screen-scale 是一款针对大屏面板适配的一款插件，只需设置宽高分辨率，整个大屏页面便会根据浏览器窗口自动1:1等比例缩放
![](https://github.com/bdawn/screen-scale-demo/blob/master/demo.gif)
## 导入包
```shell
npm i screen-scale
```

## vue使用方式
```js

import screenScale from 'screen-scale'

const app = createApp(App)

app.use(screenScale, {
	width: 3840,
	height: 1080,
})

```
