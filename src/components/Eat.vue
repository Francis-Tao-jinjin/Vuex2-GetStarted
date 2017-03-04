<template>
    <div id="atEatting">
        <h3>They are at Eatting</h3>
        <hr>
        <div class="row" v-for="hamster in atEatting">
            <h4>{{ hamster.name }}</h4>
            <button @click="finishedEat(hamster)">to Sleep</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['atEatting'],
        methods: {
            finishedEat(hamster) {
                this.$emit('goSleep', hamster);
                // user.registered = true;
            }
        }
    }
</script>

<style scoped>
    #atEatting {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }

    button {
        background-color: #86bcff;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: #246eca;
    }
</style>