<template>
    <div id="atEatting">
        <h3>They are at Eatting</h3>
        <hr>
        <div class="row" v-for="hamster in atEatting">
            <h4><img v-bind:style="hamster.color" src="http://emojipedia-us.s3.amazonaws.com/cache/66/e7/66e7b51de219fa96b2907dddf91c81eb.png">{{ hamster.name }}</h4>
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

    .row h4 img {
        width: 27px;
        vertical-align: bottom;
        margin-right: 5px;
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