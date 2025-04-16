<script setup lang="ts">
import { events } from "~/data-temp/tempEvents";

definePageMeta({
	validate: async (route) => {
		const slug = route.params.slug as string;
		// Note: we'll need to check it differently when connecting to the backend
		return !!events.find(event => event.slug === slug);
	},
});

const route = useRoute();
const slug = route.params.slug as string;

const event = computed(() => events.find(event => event.slug === slug));
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
						<div class="left-content">
							<h5>{{ event.name }}</h5>
							<div class="event-btns-group">
								<button class="btn btn-secondary">
									<img
										src="/images/ic-self-compassion.webp"
										alt=""> Self-Compassion
								</button>
								<button class="btn btn-secondary">
									<img
										src="/images/ic-authentic-connection.webp"
										alt=""> Authentic Connection
								</button>
							</div>
							<div class="time-detail">
								<i class="fa fa-calendar" />
								<p>{{ event.date }}</p>
							</div>
							<p>{{ event.description }}</p>
							<a
								href="about.html"
								class="btn btn-dark"
								role="button">Learn More</a>
						</div>
					</div>
					<div class="col-xl-5 col-lg-5 col-md-12">
						<div class="right-content text-end order-lg-last order-first">
							<img
								src="/images/event.webp"
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
								<h6>{{ event.locationName }}</h6>
								<p>{{ event.locationAddress }}</p>
							</div>
						</div>
					</div>
				</div>
				<img
					src="/images/location-map.webp"
					class="location-map-image"
					alt="">
			</div>
		</section>
		<!--    Location Map Section end -->
	</div>
</template>

<style scoped>

</style>
