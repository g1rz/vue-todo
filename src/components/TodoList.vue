<template>
	<ul class="todo-list">
		<li class="todo-list__item" v-for="(todo) in todos" :key="todo.id">
			<label class="check">
				<input class="check__input" type="checkbox" v-model="todo.check">
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
	]
}
</script>

