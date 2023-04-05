<template>
    <form class="todo-add" @submit.prevent="onSubmit">
        <input type="text" class="todo-add__input" v-model="inputValue">
        <button class="todo-add__btn">Добавить</button>
    </form>
</template>

<script>
export default {
    name: 'TodoAdd',
    data() {
        return {
            inputValue: ''
        }
    },
    methods: {
        onSubmit: function() {
			console.log('add task', this.inputValue);
            const newTask = {
                text: this.inputValue,
                check: false
            };
            this.$store.dispatch('ACTION_ADD_TODO', newTask);
            this.inputValue = '';
		}
    }
}
</script>
