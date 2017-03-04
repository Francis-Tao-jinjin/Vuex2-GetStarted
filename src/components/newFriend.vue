<template>
	<div id="newFriend">
		<label for="newHamster">仓鼠名</label>
		<input id="newHamster" type="text" v-model="hamster.name">
		<button @click="addHamster">添加新🐹</button>
	</div>	
</template>

<script>
	export default {
		name: 'newFriend',
		data() {
			return {
				hamster : {	id: null, name: '', rightnow: 'Eatting', color:{ background: ''}}
			}
		},
		methods: {
			addHamster() {
				this.$emit('newHamster', this.hamster);
				this.hamster = {	id: null, name: '', rightnow: 'Eatting', color:{ background: ''}};
			}
		}
	}
</script>

<style>
	#newHamster{
		font-size: 1em;
	}
	button {
        background-color: #fff1ca;
        border: none;
        box-shadow: 1px 1px 1px #888888;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }
    button:hover {
        background-color: #ffe397;
    }
</style>


