import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
	todos: [
		{
			id: 1,
			text: 'test1',
			check: false,
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
	GET_TODOS: state => {
		return state.todos;
	},
	GET_TODO: (state, id) => {
		let item = state.todos.filter(item => item.id === id);
		return item[0];
	}
  },
  mutations: {
	SET_TODO: (state, payload) => {
		state.todos = payload
	},
	ADD_TODO: (state, payload) => {
		let id = state.todos[state.todos.length - 1].id + 1;
		payload.id = id;
		state.todos.push(payload)
	},
	UPDATE_TODO: (state, payload) => {
		
		state.todos = state.todos.map(item => {
			if (item.id === payload) {
				item.check = !item.check;
			}
			return item;
		})
		console.log(state.todos);
	}
  },
  actions: {
	ACTION_ADD_TODO: (context, payload) => {
		context.commit('ADD_TODO', payload);
	},
	ACTION_UPDATE_TODO: (context, payload) => {
		context.commit('UPDATE_TODO', payload);
	}
  },
});