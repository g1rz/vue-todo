<template>
	<ul class="todo-list">
		<li class="todo-list__item" v-for="(todo) in todos" :key="todo.id">
			<label class="check">
				<input class="check__input" type="checkbox" v-model="todo.check" v-on:change="changeTodo(todo.id)">
				<span class="check__label">{{ todo.text }}</span>
			</label>
		</li>
	</ul>

</template>

<script>
export default {
	name: 'TodoList',
	props: [
		'todos'
	],
	methods: {
		changeTodo: function(id) {
			console.log('changeTodo', id);
			this.$store.dispatch('ACTION_UPDATE_TODO', id);
		}
	}
}
</script>

