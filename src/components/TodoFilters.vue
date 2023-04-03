<template>
    <ul class="todo-filter">
        <li class="todo-filter__item" v-for="(filter) in filters" :key="filter.id">
            <label class="check">
				<input class="check__input" v-bind:value="filter.id" type="radio" v-model="filterActive">
				<span class="check__label check__label--no-through">{{ filter.text }}</span>
			</label>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TodoFilters',
    data() {
        return {
            filterActive: 1,
        }
    } ,
    props: [
		'filters'
	],
    mounted() {
        
    }
}
</script>