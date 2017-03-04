<template>
    <div id="atSleeping">
        <div class="summary">
            <h3>They are at Sleeping</h3>
        </div>
        <hr>
        <div class="row" v-for="hamster in atSleeping">
            <h4><img v-bind:style="hamster.color" src="http://emojipedia-us.s3.amazonaws.com/cache/66/e7/66e7b51de219fa96b2907dddf91c81eb.png">{{ hamster.name }}</h4>
            <button @click="wakeUp(hamster)">wake up</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    
    export default {
        methods: {
            wakeUp(hamster) {
                this.$emit('goEat', hamster);
            }
        },
        computed: {
            ...mapGetters({
                atSleeping: 'atSleeping'
            })
            
            // atSleeping() {
            //     return this.$store.getters.atSleeping;
            // }
        }
    }
</script>

<style scoped>
    #atSleeping {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
        text-align: left;
    }

    button {
        background-color: #ee9090;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: #bf4747;
    }

    .summary {
        text-align: center;
    }

    .row h4 {
        display: inline-block;
        width: 69%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
    }
    
    .row h4 img {
        width: 27px;
        vertical-align: bottom;
        margin-right: 5px;
    }

    .row span {
        width: 30%;
        color: red;
        cursor: pointer;
    }

    .row span:hover {
        color: darkred;
    }

    .date {
        display: inline-block;
        width: 38%;
        text-align: right;
        box-sizing: border-box;
    }
</style>