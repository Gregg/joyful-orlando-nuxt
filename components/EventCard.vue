<script setup lang="ts">
import type { IEvent } from "~/types/event";
import { dateFormat } from "~/utils/dateFormat";

const { event } = defineProps<{
	event: IEvent;
}>();

const { getCategoryById } = useCategories();
const categories = computed(() => event ? event.categories.map(categoryId => getCategoryById(categoryId)) : null);
</script>

<template>
	<div class="col-xl-4 col-lg-6 col-md-12 event-card-outer">
		<NuxtLink
			:to="`/event/${event.slug}`"
			role="button">
			<div
				class="event-card">
				<div class="event-thumb-img">
					<img
						:src="event.imageUrl"
						class="img-fluid"
						alt="">
				</div>
				<div class="event-list-content">
					<h5>{{ event.name }}</h5>
					<p>{{ dateFormat(event.date) }}</p>
					<div
						v-for="category in categories"
						:key="category?.id"
						class="event-list-icon">
						<img
							:src="`/images/icons/${category?.icon}`"
							alt=""> {{ category?.name }}
					</div>
				</div>
			</div>
		</NuxtLink>
	</div>
</template>

<style scoped>
.category-tag {
	opacity: 0.9;
	background-color: #F5F5F5;
	border-radius: 70px;
	padding: 5px 15px;
}

.category-tag-content {
	height: 28px;
	border-color: #F5F5F5;
	color: #222222;
	font-weight: 600;
	font-size: 15px;
	display: inline-flex;
	align-items: center;
	gap: 10px;
	text-transform: inherit;
	margin-top: 14px;
}

.category-tag-content img {
	width: 15px;
	height: 15px;
}
</style>
