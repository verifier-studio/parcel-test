> 首先，忘记parcel吧

### 安装、开发、打包
```
npm install
npm run start
npm run build
```

---

### 使用（src中为示例代码）

- html代码复用
```
<include src="src/layout/header.html"></include>
```

- less、ts直接引入
```
<link rel="stylesheet" href="./static/css/index.less">
<script type="module" src="./static/js/index.ts"></script>
```

- jquery、vue导入(优雅地)
```
import Vue from "vue"
import $ from "jquery"
```

- axios、ajax使用
```
参考src/static/js/index.js
```

- 配置代理
```
修改.proxyrc文件中的接口地址
.env.development、.env.production两个文件对应开发和生产的环境变量，
其中BASE_URL是接口的代理地址
```

- px转vw
```
根据设计稿尺寸修改.postcssrc文件中的viewportWidth
```

---
that's all. 除此之外，你是免费的。