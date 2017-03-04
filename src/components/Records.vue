<template>
	<div id="recordList">
		<h3>A Day's Record</h3>
		<hr>
		<div class="row" v-for="item in list">
			<h4>{{ item.time }}</h4>
			<h4>{{ item.hamsterName }}</h4>
			<h4>{{ item.matter }}</h4>
			<div id="delete-btn" @click="deleteItem(item)">X</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['list'],
		methods: {
			deleteItem(item) {
				this.$emit('deleteItem', item);
			}
		}
	}
	
</script>

<style>
	#recordList {
		box-shadow: 1px 1px 2px 1px #ccc;
		margin: 20px;
		padding: 20px;
		display: inline-block;
		width: 400px;
		vertical-align: top;
	}
	
	.row h4 {
		margin: 0 0 10px 0;
		text-align: left;
		width: 29%;
		display: inline-block;
	}

	#delete-btn {
		display: inline-block;
		width: 30px;
		background-color: #ffbd00;
   		border: solid 1px #825a00;
   		box-shadow: 1px 1px 2px 1px #ccc;
	}

	#delete-btn:hover {
		background-color: #a97d00;
	}

</style>