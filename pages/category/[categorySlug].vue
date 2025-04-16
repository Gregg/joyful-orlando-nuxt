<script setup lang="ts">
const { getEventsByCategoryId } = useEvents();
const { getCategoryBySlug } = useCategories();

const route = useRoute();

const category = computed(() => {
	const categorySlug = route.params.categorySlug as string;
	return getCategoryBySlug(categorySlug);
});

const events = computed(() => {
	const categoryId = category.value?.id;
	if (!categoryId) {
		return [];
	}
	return getEventsByCategoryId(categoryId);
});
</script>

<template>
	<div>
		<!--    Hero section start    -->
		<section
			class="innpage-hero-section"
			style="background-color: #F0B801;">
			<img
				src="/images/cloudwhite.webp"
				class="hero-left-shape"
				alt="">
			<div class="container">
				<div class="row align-items-center gx-0 mt-40">
					<div class="col-xl-12">
						<div class="hero-content text-center">
							<h1>{{ category?.name }} Events</h1>
						</div>
						<img
							src="/images/white-star.webp"
							class="hero-star-shape"
							alt="">
					</div>
				</div>
			</div>
			<img
				src="/images/category-vector.webp"
				class="category-right-shape"
				alt="">
		</section>
		<!--    Hero section end    -->

		<!--    Event list section start    -->
		<section class="sec-padding">
			<div class="container">
				<div class="row search-area">
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 align-content-center">
						<div class="search-area-btn">
							<button
								class="btn btn-outline-secondary"
								type="button">
								View All  Events
							</button>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-0 col-sm-12 order-md-last  text-center">
						<div class="search-area-shape">
							<img
								src="/images/star-vector.webp"
								alt="">
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 order-lg-last align-content-center">
						<div class="search-content">
							<img
								src="/images/search-normal-green.webp"
								alt="">
							<input
								id=""
								class="search-input"
								type="search"
								name=""
								placeholder="Search by Title">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<div class="event-detail">
							<p>Typically immersive experiences where participants relax while being enveloped in soothing sounds from instruments like singing bowls, gongs, and chimes. These sessions are designed to promote deep relaxation, reduce stress, and support meditation through vibrational healing.</p>
						</div>
					</div>
				</div>
				<div class="row">
					<EventCard
						v-for="event in events"
						:key="event.id"
						:event="event" />

					<div class="col-12 text-center">
						<a
							href="#"
							class="btn btn-dark">Load More</a>
					</div>
				</div>
			</div>
		</section>
		<!--    Event list section end    -->
	</div>
</template>

<style scoped>

</style>
