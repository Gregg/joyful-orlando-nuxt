<script setup lang="ts">
import { dateFormat } from "~/utils/dateFormat";

const config = useRuntimeConfig();
const GOOGLE_MAPS_API_KEY = config.public.gMapsApiKey;

const route = useRoute();
const slug = route.params.slug as string;

const { data: event } = await useFetch(`/api/event/${slug}`);

const { getLocationById } = useLocations();
const location = computed(() => event.value ? getLocationById(event.value.locationId) : null);

const { getCategoryById } = useCategories();
const categories = computed(() => event.value ? event.value.categories.map(categoryId => getCategoryById(categoryId)) : null);

const mapSource = computed(() => {
	if (!location.value) {
		return "";
	}
	return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}
    &q=${encodeURIComponent(location.value.name)},${encodeURIComponent(location.value.address)}`;
});

const formattedDescription = computed(() => {
	const raw = event.value?.description || "";

	// Strip all HTML tags
	const cleanText = raw.replace(/<\/?[^>]+(>|$)/g, "");

	// Split into paragraph chunks using 2+ newlines
	const paragraphs = cleanText
		.split(/\n{2,}/)
		.map((paragraph) => {
			// Within each paragraph, replace single newlines with <br />
			const withLineBreaks = paragraph.trim().replace(/\n/g, "<br />");
			return `<p>${withLineBreaks}</p>`;
		});

	return paragraphs.join("");
});

useSchemaOrg([
	defineEvent({
		name: event.value?.name,
		description: event.value?.description,
		image: event.value?.imageUrl,
		startDate: event.value?.date,
		eventStatus: "EventScheduled",
	}),
]);

useHead({
	title: `${event.value?.name} | Event Details`,
	meta: [
		{
			name: "description",
			content: event.value?.description,
		},
	],
});

useSeoMeta({
	ogImage: event.value?.imageUrl,
	twitterTitle: `Joyful Orlando | ${event.value?.name}`,
	twitterDescription: event.value?.description,
	twitterImage: event.value?.imageUrl,
});
</script>

<template>
	<div>
		<!--    Hero section start    -->
		<section
			class="innpage-hero-section"
			style="background-color: #FF839F;">
			<img
				src="/images/cloudwhite.webp"
				class="hero-left-shape"
				alt="">
			<div class="container">
				<div class="row align-items-center gx-0 mt-40">
					<div class="col-xl-12">
						<div class="hero-content text-center">
							<h1>Event Details</h1>
						</div>
						<img
							src="/images/white-star.webp"
							class="hero-star-shape"
							alt="">
					</div>
				</div>
			</div>
			<img
				src="/images/colorscloud.webp"
				class="hero-right-shape"
				alt="">
		</section>
		<!--    Hero section end    -->

		<!--    Event detail section start    -->
		<section class="sec-padding">
			<div class="container">
				<div class="row align-items-center gx-0 consent-detail">
					<div class="col-xl-7 col-lg-7 col-md-12 order-lg-first order-last">
						<div
							v-if="event"
							class="left-content">
							<h5>
								{{ event.name }}
							</h5>
							<div
								v-if="categories"
								class="event-btns-group">
								<CategoryButton
									v-for="category in categories"
									:key="category?.id"
									:category="category" />
							</div>
							<div class="time-detail">
								<i class="fa fa-calendar" />
								<p>
									{{ dateFormat(event.date) }}
								</p>
							</div>
							<div
								v-html="formattedDescription" />
							<a
								:href="event.url"
								class="btn btn-dark"
								role="button"
								rel="noopener noreferrer"
								target="_blank">Learn More</a>
						</div>
					</div>
					<div class="col-xl-5 col-lg-5 col-md-12">
						<div class="right-content text-end order-lg-last order-first">
							<img
								:src="event?.imageUrl"
								class="img-fluid"
								alt="">
							<img
								src="/images/event-cloud.webp"
								class="cloud-shap"
								alt="">
							<img
								src="/images/yellow-star.svg"
								class="yellow-shap"
								alt="">
							<img
								src="/images/white-star.webp"
								class="white-shap"
								alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--    Event detail section end    -->

		<!--    Location Map Section start -->
		<section class="location-map sec-padding">
			<div
				class=" "
				style="background-color: #FE7D15;">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="location-detail">
								<img
									src="/images/location.webp"
									alt="">
								<h6>{{ location?.name }}</h6>
								<p>{{ location?.address }}</p>
							</div>
						</div>
					</div>
				</div>
				<iframe
					v-if="mapSource"
					height="400"
					class="location-map-image"
					style="border:0"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					:src="mapSource" />
			</div>
		</section>
		<!--    Location Map Section end -->
	</div>
</template>

<style scoped>

</style>
