<template>
    <form class="todo-add">
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
    // props: [
    //     'inputValue'
    // ]
}
</script>
