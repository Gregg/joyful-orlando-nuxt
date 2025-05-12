<script setup lang="ts">
useHead({
	title: "Submit Event",
	meta: [
		{
			name: "description",
			content: "Submit your event to Joyful Orlando. Share your event with the community.",
		},
	],
	script: [
		{
			src: "https://server.fillout.com/embed/v1/",
			async: true,
		},
	],
});

useSeoMeta({
	twitterTitle: `Joyful Orlando | Submit Events`,
	description: "Submit your event to Joyful Orlando. Share your event with the community.",
	twitterDescription: "Submit your event to Joyful Orlando. Share your event with the community.",
	ogDescription: "Submit your event to Joyful Orlando. Share your event with the community.",
	ogImage: "/images/this-is-joyful-orlando.png",
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
				<div
					style="width:100%;height:500px;"
					data-fillout-id="xtxLLQc1iSus"
					data-fillout-embed-type="standard"
					data-fillout-inherit-parameters
					data-fillout-dynamic-resize />
			</div>
		</section>
	</div>
</template>

<style scoped>

</style>
