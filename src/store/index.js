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

