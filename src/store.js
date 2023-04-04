import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
	todos: [
		{
			id: 1,
			text: 'test1',
			check: true,
		}, {
			id: 2,
			text: 'test2',
			check: false,
		}, {
			id: 3,
			text: 'test3',
			check: false,
		}, {
			id: 4,
			text: 'test4',
			check: false,
		}
	]
  },
  getters: {
	TODOS: state => {
		return state.todos;
	}
  },
  mutations: {
	SET_TODO: (state, payload) => {
		state.todos = payload
	},
	ADD_TODO: (state, payload) => {
		state.todos.push(payload)
	}
  },
  actions: {
	SAVE_TODO: (context, payload) => {
		console.log(payload);
		// context.commit('ADD_TODO', payload);
	}
  },
});