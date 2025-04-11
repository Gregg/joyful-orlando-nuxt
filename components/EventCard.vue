<script setup lang="ts">
import type { IEvent } from "~/types/event";

defineProps<{
	event: IEvent;
}>();
</script>

<template>
	<div class="col-xl-4 col-lg-6 col-md-12 event-card-outer">
		<NuxtLink
			:to="`/event/${event.slug}`"
			role="button">
			<div class="event-card">
				<div class="event-thumb-img">
					<img
						:src="event.imageUrl"
						class="img-fluid"
						alt="">
				</div>
				<div class="event-list-content">
					<h5>{{ event.name }}</h5>
					<p>{{ event.date }}</p>
				</div>
			</div>
		</NuxtLink>
	</div>
</template>

<style scoped>

</style>
