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
		<section class="hero-section py-5" style="background-color: #9F64FC;">
			<img
				src="/images/hero-shape.webp"
				class="hero-sec-shape"
				alt="Joy Logo" /> 
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<!-- Text content - 8/12 on xl (2/3), full width on small screens -->
					<div class="col-xl-8 col-lg-7 col-md-12 text-center text-lg-start mb-4 mb-lg-0 order-2 order-lg-1">
						<div class="hero-content">
							<h1 class="text-white fw-bold mb-3">Ready to improve your well-being and find your people in Orlando?</h1>
							<p class="text-light mb-4">Joyful Orlando spotlights conscious and wellness events that help you slow down, show up fully, and nourish your well-being — not just for Instagram, but for real life.</p>
							<a href="#signupform" class="btn btn-light" data-test="join-now-button">Join Now</a>
						</div>
					</div>

					<!-- Video iframe - 4/12 on xl (1/3), centered on small screens -->
					<div class="col-xl-4 col-lg-5 col-md-8 col-sm-10 mx-auto order-1 order-lg-2">
						<div class="hero-thumb text-center">
							<iframe
								src="https://player.cloudinary.com/embed/?cloud_name=dxyuki6gm&public_id=Joyful_Orlando_Homepage_Intro_Video_zr1vn2&profile=cld-default&autoplay=true&loop=true&muted=true"
								class="hero-img img-fluid"
								width="360"
								height="640"
								style="aspect-ratio: 360 / 640;"
								allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
								allowfullscreen
								frameborder="0">
							</iframe>
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
