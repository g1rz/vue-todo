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
			todos: [],
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
		
	},
	mounted() {
		this.todos = this.$store.getters.TODOS;
		console.log(this.$store);
	},
}
</script>
