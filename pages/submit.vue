<script setup lang="ts">
useHead({
	title: "Submit Event",
	meta: [
		{
			name: "description",
			content: "Submit your event to Joyful Orlando. Share your event with the community.",
		},
	],
});

useSeoMeta({
	twitterTitle: `Joyful Orlando | Submit Events`,
	twitterDescription: "Submit your event to Joyful Orlando. Share your event with the community.",
});
</script>

<template>
	<div>
		<!--    Hero section start    -->
		<section
			class="innpage-hero-section"
			style="background-color: #FE7D15;">
			<img
				src="/images/cloudwhite.webp"
				class="hero-left-shape"
				alt="">
			<div class="container">
				<div class="row align-items-center gx-0 mt-40">
					<div class="col-xl-12">
						<div class="hero-content text-center">
							<h1>Submit Event</h1>
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

		<section class="sec-padding">
			<div class="container">
				<iframe
					class="airtable-embed"
					src="https://airtable.com/embed/appLiRwcX9kvByYtR/pagwYD39iSGl4Kp4g/form"
					width="100%"
					height="900"
					style="background: transparent; border: 1px solid #ccc;" />
			</div>
		</section>
	</div>
</template>

<style scoped>

</style>
