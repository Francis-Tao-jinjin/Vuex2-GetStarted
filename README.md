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
```js
components: {
  newFriend: newFriend,
  appEatting: Eat,
  appSleeping: Sleep,
  appRecords: Records
}
```
大概流程：NewFriend 组建创建新‘仓鼠’，仓鼠被创建的时候有 id、名字、在做什么、头像颜色。其中 id 顺序递增，初始状态是在睡觉觉‘sleeping’，头像颜色随机。
之后在睡觉的仓鼠可以‘wake up’，就是去吃东西。在吃东西的仓鼠可以‘to sleep’，就是吃饱了去睡觉。任何仓鼠的行为的变化都会被 AppRecords 组建显示出来，其中记录可以删除。

所以当前 App 是程序的状态的管理者。下面是 App 中的状态（需要被子组建享用的数据）：
```html
<div id="app">
	<new-friend @newHamster="newHamster"></new-friend>
	<app-eatting @goSleep="goSleep" :atEatting="atEatting"></app-eatting>
	<app-sleeping @goEat="goEat" :atSleeping="atSleeping"></app-sleeping>
	<app-records @deleteItem="deleteItem" :list="recordList"></app-records>
</div>
```

```js
data() {
    return {
      recordList: [],
      hamsters: [
          {id: 1, name: 'Lovegood', rightnow: 'Sleeping' , color: { background: '#9831be'}},
          {id: 2, name: 'Vita', rightnow: 'Sleeping' , color:{ background: '#44931d'}},
          {id: 3, name: 'Thomas', rightnow: 'Sleeping' , color:{ background: '#825a00'}},
          {id: 4, name: 'Simons', rightnow: 'Sleeping' , color:{ background: '#246eca'}}
      ]
    }
},
computed: {
    atSleeping() {
      return this.hamsters.filter((hamster) => {
        return hamster.rightnow === 'Sleeping';
      });
    },
    atEatting() {
      return this.hamsters.filter((hamster) => {
        return hamster.rightnow === 'Eatting';
      });
    }
}

```
而改变这些状态所涉及的方法为：
```js
deleteItem(item) {
  var index = this.recordList.indexOf(item);
  this.recordList.splice(index, 1);
},
goSleep(hamster) {
  hamster.rightnow = 'Sleeping';
  this.recordList.unshift({time: this.getTime(), hamsterName: hamster.name, matter: 'Sleeping'});
},
goEat(hamster) {
  hamster.rightnow = 'Eatting';
  this.recordList.unshift({time: this.getTime(), hamsterName: hamster.name, matter: 'Eatting'});
},
newHamster(hamster) {
  hamster.id = this.hamsters.length + 1;
  //console.log(color.getRandomColor());
  hamster.color.background = color.getRandomColor();
  this.hamsters.push(hamster);
}
```

现在就开始使用 Vuex 将状态托管给 Vuex：
```shell
npm install vuex
```
安装完成后：
```bash
cd src
mkdir store
touch ./store/index.js
```
之后在 ./store/index.js 写入:
```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

});

export default store;
```
并在 mian.js 中注册它
```js
import Vue from 'vue';
import App from './App.vue';

import store from './store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
```
这样，在全部组件中都可以通过 `this.$store` 来访问store中的内容。
现在，将 App 中状态的部分迁移到 store 中，其中 data 对应 state。
```js
const store = new Vuex.Store({
  state: {
    recordList: [],
    hamsters: [
      {id: 1, name: 'Lovegood', rightnow: 'Sleeping' , color: { background: '#9831be'}},
      {id: 2, name: 'Vita', rightnow: 'Sleeping' , color:{ background: '#44931d'}},
      {id: 3, name: 'Thomas', rightnow: 'Sleeping' , color:{ background: '#825a00'}},
      {id: 4, name: 'Simons', rightnow: 'Sleeping' , color:{ background: '#246eca'}}
    ]
  }
});
```
接下来就是将所有使用这些数据的地方都添加上`this.$store.state` ( $store.state in html)这个前缀。需要注意的是，由于在 Records.vue 中已经可以直接访问到 recordList 了，所以不需要再用 props 的方法获取数据：
```html
<div class="row" v-for="item in $store.state.recordList">
  <h4>{{ item.time }}</h4>
  <h4>{{ item.hamsterName }}</h4>
  <h4>{{ item.matter }}</h4>
  <div id="delete-btn" @click="deleteItem(item)">X</div>
</div>
```
```js
computed: {
  atSleeping() {
    return this.$store.state.hamsters.filter((hamster) => {
      return hamster.rightnow === 'Sleeping';
    });
  },
  atEatting() {
    return this.$store.state.hamsters.filter((hamster) => {
      return hamster.rightnow === 'Eatting';
    });
  }
}
```
**替换要仔细**
接下来看看 atSleeping 和 atEatting，这两个函数返回列表数据给子模块，但是现在子模块可以直接访问到原数据了，而且如果这个数据有多个模块都要使用的话，在每个模块都写个 computed 计算太麻烦了，所以可以想办法将它也放到 store 里面，而且是一个类似 computed 的东西,这个就是 getters。
```js
getters: {
  atSleeping(state) {
    return state.hamsters.filter((hamster) => {
      return hamster.rightnow === 'Sleeping';
    });
  },
  atEatting(state) {
    return state.hamsters.filter((hamster) => {
      return hamster.rightnow === 'Eatting';
    });
  }
}
```
需要注意的是里面的函数都多了一个参数 state，这个是必要的，因为函数内通过 state 访问上面定义的状态。
此时 App.vue 中已经没有 data 和 computed 这两个属性了，子组件也不要通过 props 获取 atSleeping 和 atEatting 的数据了，而是在自己的组件内获取：
```html
<!-- App.vue -->
<div id="app">
  <new-friend @newHamster="newHamster"></new-friend>
  <app-eatting @goSleep="goSleep"></app-eatting>
  <app-sleeping @goEat="goEat"></app-sleeping>
  <app-records @deleteItem="deleteItem"></app-records>
</div>
```
```js
// ./components/sleep.js
computed: {
  atSleeping() {
    return this.$store.getters.atSleeping;
  }
}

// ./components/eat.js
computed: {
  atEatting() {
    return this.$store.getters.atEatting;
  }
}
```
不过这时候再看一下这个 computed，其实还是有点多此一举的感觉，因为 this.$store.getters.xxx 本身就是所要的数据了，这里却要再多包裹一次。
这里可以用 es6 的展开运算符 ‘...’ 简化代码，但是需要先安装一个插件："babel-preset-stage-2"，因为默认的支持 es6 的程度不够高，安装完后，在根目录下创建文件：
```shell
touch .babelrc
```
在文件中写入：
```json
{
  "presets": [
    ["stage-2"]
  ]
}
```
如果本来已经有内容了，则将  ‘["stage-2"]’ 追加到后面就好了。
然后原来的 computed 可以改成：
```js
import {mapGetters} from 'vuex'; // 记得 import
export default {
    computed: {
        // 字符串 'atEatting' 为 getters 里对应方法的方法名
        ...mapGetters({
            atEatting: 'atEatting'
        })
    },
    methods: {
        finishedEat(hamster) {
            this.$emit('goSleep', hamster);
        }
    }
}
```
到目前为止，已经完成了 state 和 getters，store 现在如下：
```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [],
    hamsters: [
      {id: 1, name: 'Lovegood', rightnow: 'Sleeping' , color: { background: '#9831be'}},
      {id: 2, name: 'Vita', rightnow: 'Sleeping' , color:{ background: '#44931d'}},
      {id: 3, name: 'Thomas', rightnow: 'Sleeping' , color:{ background: '#825a00'}},
      {id: 4, name: 'Simons', rightnow: 'Sleeping' , color:{ background: '#246eca'}}
    ]
  },
  getters: {
    atSleeping(state) {
      return state.hamsters.filter((hamster) => {
        return hamster.rightnow === 'Sleeping';
      });
    },
    atEatting(state) {
      return state.hamsters.filter((hamster) => {
        return hamster.rightnow === 'Eatting';
      });
    }
  }
});

export default store;
```

[img1]: ./img/components.png
