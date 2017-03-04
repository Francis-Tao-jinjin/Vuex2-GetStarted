<template>
  <div id="app">
    <new-friend @newHamster="newHamster"></new-friend>
    <app-eatting @goSleep="goSleep" :atEatting="atEatting"></app-eatting>
    <app-sleeping @goEat="goEat" :atSleeping="atSleeping"></app-sleeping>
    <app-records @deleteItem="deleteItem" :list="recordList"></app-records>
  </div>
</template>

<script>
  import newFriend from './components/newFriend.vue';
  import Eat from './components/Eat.vue';
  import Sleep from './components/Sleep.vue';
  import Records from './components/Records.vue';

export default {
    data() {
        return {
          recordList: [],
          hamsters: [
              {id: 1, name: 'Lovegood', rightnow: 'Sleeping'},
              {id: 2, name: 'Vita', rightnow: 'Sleeping'},
              {id: 3, name: 'Thomas', rightnow: 'Sleeping'},
              {id: 4, name: 'Simons', rightnow: 'Sleeping'}
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
    },
    methods: {
      getTime() {
        var time = new Date();
        return ( '['+ time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() +']' );
      },
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
        this.hamsters.push(hamster);
      }
    },
    components: {
      newFriend: newFriend,
      appEatting: Eat,
      appSleeping: Sleep,
      appRecords: Records
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
