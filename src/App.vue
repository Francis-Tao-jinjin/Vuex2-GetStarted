<template>
  <div id="app">
    <new-friend @newHamster="newHamster"></new-friend>
    <app-eatting @goSleep="goSleep"></app-eatting>
    <app-sleeping @goEat="goEat"></app-sleeping>
    <app-records @deleteItem="deleteItem"></app-records>
  </div>
</template>

<script>
  import newFriend from './components/newFriend.vue';
  import Eat from './components/Eat.vue';
  import Sleep from './components/Sleep.vue';
  import Records from './components/Records.vue';
  import color from './util/color.js';

export default {
    methods: {
      getTime() {
        var time = new Date();
        return ( '['+ time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() +']' );
      },
      deleteItem(item) {
        var index = this.$store.state.recordList.indexOf(item);
        this.$store.state.recordList.splice(index, 1);
      },
      goSleep(hamster) {
        hamster.rightnow = 'Sleeping';
        this.$store.state.recordList.unshift({time: this.getTime(), hamsterName: hamster.name, matter: 'Sleeping'});
      },
      goEat(hamster) {
        hamster.rightnow = 'Eatting';
        this.$store.state.recordList.unshift({time: this.getTime(), hamsterName: hamster.name, matter: 'Eatting'});
      },
      newHamster(hamster) {
        hamster.id = this.$store.state.hamsters.length + 1;
        //console.log(color.getRandomColor());
        hamster.color.background = color.getRandomColor();
        this.$store.state.hamsters.push(hamster);
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
