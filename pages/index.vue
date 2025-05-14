<script setup lang="ts">
const { featuredCategories } = useCategories();
const { featuredEvents } = useEvents();

useSeoMeta({
	description: "Joyful Orlando is on a mission to spotlight conscious & wellness events that help you slow down, show up, and feel actually good (not just “pretend good” for Instagram).",
	ogDescription: "Joyful Orlando is on a mission to spotlight conscious & wellness events that help you slow down, show up, and feel actually good (not just “pretend good” for Instagram).",
	twitterTitle: "Joyful Orlando | Home",
	twitterDescription: "Joyful Orlando is on a mission to spotlight conscious & wellness events that help you slow down, show up, and feel actually good (not just “pretend good” for Instagram).",
	ogImage: "/images/this-is-joyful-orlando.png",
});
</script>

<template>
	<div>
		<!--    Hero section start    -->
		<section
			class="hero-section"
			style="background-color: #9F64FC;">
			<img
				src="/images/hero-shape.webp"
				class="hero-sec-shape"
				alt="">
			<div class="container">
				<div class="row align-items-center gx-0 mt-40">
					<div class="col-xl-6 col-lg-7 col-md-6 col-sm-12 order-lg-first order-last">
						<div class="hero-content">
							<h1>Ready to improve your well-being and find your people in Orlando?</h1>
							<p>Joyful Orlando spotlights conscious and wellness events that help you slow down, show up fully, and nourish your well-being — not just for Instagram, but for real life.</p>
							<a
								href="#signupform"
								class="btn btn-light"
								data-test="join-now-button">Join Now</a>
						</div>
					</div>
					<div class="col-xl-6 col-lg-5 col-md-6 order-lg-last order-first">
						<div class="hero-thumb">
							<iframe
								src="https://player.cloudinary.com/embed/?cloud_name=dxyuki6gm&public_id=Joyful_Orlando_Homepage_Intro_Video_zr1vn2&profile=cld-default"
								class="hero-img img-fluid"
								width="360"
								height="640"
								style="aspect-ratio: 360 / 640;"
								allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
								allowfullscreen
								frameborder="0" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--    Hero section end    -->

		<!--    Event list section start    -->
		<section class="sec-padding">
			<div class="container">
				<div class="sec-heading sec-head-has-shape sec-head-center">
					<div class="row justify-content-center">
						<div class="col-xl-6 position-relative">
							<h2>What kind of Joyful Orlando are you looking for?</h2>
							<div class="shead-shape">
								<img
									src="/images/yellow-star.svg"
									alt="">
								<img
									src="/images/purple-star.svg"
									alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-12">
						<div class="event-btns-group">
							<CategoryButton
								v-for="category in featuredCategories"
								:key="category.id"
								:category="category" />
						</div>
					</div>
				</div>
				<div class="row">
					<EventCard
						v-for="event in featuredEvents"
						:key="event.id"
						:event="event" />

					<div class="col-12 text-center">
						<NuxtLink
							to="/events"
							class="btn btn-dark">View More Events</NuxtLink>
					</div>
				</div>
			</div>
		</section>
	<!--    Event list section end    -->
	</div>
</template>

<style scoped>

</style>
