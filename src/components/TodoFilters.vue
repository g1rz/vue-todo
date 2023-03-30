<template>
    <ul class="todo-filter">
        <li class="todo-filter__item" v-for="(filter) in filters" :key="filter.id">
            <label class="check">
				<input class="check__input" type="radio" name="filter" v-model="filter.check">
				<span class="check__label">{{ filter.text }}</span>
			</label>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TodoFilters',
    props: [
		'filters'
	]
}
</script>