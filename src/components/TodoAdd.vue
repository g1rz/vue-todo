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
                id: Math.floor(Math.random() * 300),
                text: this.inputValue,
                check: false
            };
            this.$store.dispatch('SAVE_TODO', newTask);
            this.inputValue = '';
		}
    }
}
</script>
