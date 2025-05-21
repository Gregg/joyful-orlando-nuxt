<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
	error: Object as () => NuxtError,
});
</script>

<template>
	<NuxtLayout name="default">
		<div>
			<!--    Hero section start    -->
			<section
				class="innpage-hero-section"
				style="background-color: #62CBFB;">
				<img
					src="/images/cloudwhite.webp"
					class="hero-left-shape"
					alt="">
				<div class="container">
					<div class="row align-items-center gx-0 mt-40">
						<div class="col-xl-12">
							<div class="hero-content text-center">
								<h1>Oops...</h1>
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

			<section
				class="sec-padding position-relative"
				style="background-image: url(/images/missionbg.webp);">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
							<div
								class="mission-left"
								style="display: flex; justify-content: center; align-items: center; height: 100%;">
								<img
									src="/images/aboutus-freehugs.webp"
									alt="Free Hugs"
									class="img-fluid">
							</div>
						</div>
						<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 align-content-center">
							<div class="mission-content-right ">
								<div class="title-content">
									<h2>Something went wrong.</h2>
								</div>
								<p>
									Our mission is to spotlight Orlando’s vibrant conscious and wellness community — from breathwork and meditation to dance, sound healing, and authentic connection. We believe these spaces help people slow down, tune in, and cultivate a more meaningful, joyful life. <br><br>
									We’re not just curating events; we’re building a movement toward a more connected, compassionate Orlando. By bringing people together in spaces of healing and presence, we hope to ripple well-being through neighborhoods, relationships, and the city as a whole.
								</p>
								<NuxtLink
									to="/"
									style="font-size: larger;">Go back home</NuxtLink>
							</div>
						</div>
					</div>
				</div>
				<div class="right-vector">
					<img
						src="/images/right-vector.webp"
						alt="">
				</div>
			</section>
		</div>
	</NuxtLayout>
</template>

<style scoped>

</style>
