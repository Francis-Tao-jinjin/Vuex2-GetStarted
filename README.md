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
组件结构：
```html
<App>
	<NewFriend>
	<AppEatting>
	<AppSleeping>
	<AppRecords>
```
大概流程：NewFriend 组建创建新‘仓鼠’，仓鼠被创建的时候有 id、名字、在做什么、头像颜色。其中 id 顺序递增，初始状态是在睡觉觉‘sleeping’，头像颜色随机。
之后在睡觉的仓鼠可以‘wake up’，就是去吃东西。在吃东西的仓鼠可以‘to sleep’，就是吃饱了去睡觉。任何仓鼠的行为的变化都会被 AppRecords 组建显示出来，其中记录可以删除。

<h3><a href="https://github.com/TaoJinjin-Thomas/Vuex2-GetStarted/tree/b1-store-and-state">1.state 和 getters</a></h3>








[img1]: ./img/components.png
