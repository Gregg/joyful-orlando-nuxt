<script setup lang="ts">
import type { ICategory } from "~/types/category";

defineProps<{
	category?: ICategory;
}>();

defineEmits(["click"]);
</script>

<template>
	<button
		v-if="category"
		class="btn btn-secondary"
		@click="$router.push(`/category/${category.slug}`)">
		<img
			:src="category.icon"
			alt=""> {{ category.name }}
	</button>
</template>

<style scoped>

</style>
