# Vuex-GetStarted 上手，理清概念

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Vuex 的安装，使用 state
为什么要使用 Vuex？

因为 Vue 本身就是一个非常轻量级的框架，初衷只是数据绑定，这个其实只是非常基本的功能。但是对于大型软件开发的开发，仅有数据绑定远远不足，组建之间的数据传递非常频繁，Vue 的父组建和子组建之间通过 prop 和事件的通信可以解决一部分这样的问题，但对于更复杂的系统，就会感到捉襟见肘。而 Vuex 就是为了解决这个问题。

说的再简单点，就是在 Vue 中，想要轻松的实现多实力共享一个状态， vuex 是省时省力的方法。

这是程序目前的效果
![img1][img1]
组建结构：
<App>
	<NewFriend>
	<AppEatting>
	<AppSleeping>
	<AppRecords>













[img1]: ./img/components.png
[img2]: ./img/components.png
[img3]: ./img/components.png