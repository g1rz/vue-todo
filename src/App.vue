<template>
	<div id="app" class="wrapper">
		<div class="todo">
			<TodoAdd/>
			<TodoFilters v-bind:filters="filters"/>
			<TodoList v-bind:todos="todos"/>
		</div>		
	</div>
</template>

<script>
import './App.scss';
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/TodoList.vue';
import TodoFilters from './components/TodoFilters.vue';

export default {
	name: 'App',
	components: {
		TodoList,
		TodoAdd,
		TodoFilters
	}, 
	data() {
		return {
			inputValue: '',
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
			],
			filters: [
				{
					id: 1,
					text: 'Все',
					check: true,

				}, {
					id: 2,
					text: 'В процессе',
					check: false,
				}, {
					id: 3,
					text: 'Завершенные',
					check: false,
				}
			],
			task: '',
			isComplited: false,
			isLoaded: false
		}
	},
	methods: {
		addTask: function() {
			console.log('add task');
		}
	},
	mounted: function() {
		// console.log('test');
		// this.isLoaded = true;
		// fetch('https://jsonplaceholder.typicode.com/todos/')
		//   .then(response => response.json())
		//   .then(json => this.todos = json)
	}
}
</script>
