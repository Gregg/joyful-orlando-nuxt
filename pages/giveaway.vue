<script setup lang="ts">
const { getCurrentGiveaway } = useGiveaway();
onMounted(() => {
	const script = document.createElement("script");
	script.src = "https://sweepwidget.com/w/j/w_init.js";
	script.async = true;
	document.body.appendChild(script);
});

useHead({
	title: "14 Days of Giveaways to Celebrate Joyful Orlando",
	meta: [
		{
			name: "description",
			content: "Celebrate the launch of Joyful Orlando with 14 days of joyful giveaways! From June 1–14, enter daily to win prizes curated for your inner wellness nerd and outer sparkle enthusiast.",
		},
	],
});

useSeoMeta({
	twitterTitle: "14 Days of Giveaways to Celebrate Joyful Orlando | Joyful Orlando",
	description: "Celebrate the launch of Joyful Orlando with 14 days of joyful giveaways! From June 1–14, enter daily to win prizes curated for your inner wellness nerd and outer sparkle enthusiast.",
	twitterDescription: "Celebrate the launch of Joyful Orlando with 14 days of joyful giveaways! From June 1–14, enter daily to win prizes curated for your inner wellness nerd and outer sparkle enthusiast.",
	ogDescription: "Celebrate the launch of Joyful Orlando with 14 days of joyful giveaways! From June 1–14, enter daily to win prizes curated for your inner wellness nerd and outer sparkle enthusiast.",
	ogImage: "/images/this-is-joyful-orlando.png",
});
</script>

<template>
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
							<h1>14 Days of Giveaways to Spark Joy</h1>
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
		<!-- Hero section ends -->

		<!--    Giveaway section start    -->
		<section>
			<div
				:id="getCurrentGiveaway.giveawayId"
				class="sw_container" />
		</section>
		<GiveawayTester />
	</div>
</template>

<style scoped>

</style>
