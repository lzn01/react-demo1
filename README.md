## 1 起步

```
安装 yarn global add create-react-app
创建 create-react-app react-demo-1
```

- React元素

  createElement的返回值element可以代表一个div

  但element并不是真正的div（DOM）对象

  所以我们一般称element为虚拟DOM对象

- () => React元素

  返回element的函数，也可以代表一个div

  这个函数可以多次执行，每次得到最新的虚拟div

  React会对比两个虚拟div，找出不同，局部更新视图

  找不同的算法叫做`DOM Diff`算法

## 2 使用JSX

- 方法一：CDN

  引入`balel.min.js`

  把`<script>`改成`<script type="text/babel">`

  不支持src

- 方法二：使用create-react-app

  全局安装

  ```
  yarn global add create-react-app
  ```

  初始化目录

  ```
  create-react-app react-demo-1
  ```

  进入目录

  ```
  cd react-demo-1
  ```

  开始开发

  ```
  yarn start
  ```

## 3 使用JSX的注意事项

- 注意`className`

- 插入变量 标签里所有的JS代码都要用{}包起来

- 习惯return后面加()

  

## 小结

- 引入React& ReactDOM

  - CDN方式：react.js、react-dom.js、babel.js

  - 直接引用：import React from 'react'

- React.createElement

  - 创建虚拟DOM对象
  - 函数的作用：多次创建虚拟DOM对象
  - DOM Diff

- JSX

  - 将XML转译为React.createElement
  - 使用{}插入JS代码
  - Create-react-app默认将JS当做JSX处理
  - 条件判断 循环要用原生JS实现
