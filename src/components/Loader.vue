<template>
    <ul class="todo-list">
        <li class="todo-list__item" v-for="(todo, index ) in todos" :key="index">
        {{ todo.title }}
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
