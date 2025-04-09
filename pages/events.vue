<script setup lang="ts">
const events = [
	{
		id: "0",
		name: "New Moon Community Event and Drum Circle",
		date: "February 2, 4 PM",
		imageUrl: "/images/event-1.webp",
	},
	{
		id: "1",
		name: "Cuddles & Consent: Platonic Touch in a Facilitated Cuddle Space",
		date: "February 23, 6:30 PM",
		imageUrl: "/images/event-2.webp",
	},
	{
		id: "2",
		name: "Akashic Horizons: Group Meditation Experience",
		date: "February 12, 1 PM",
		imageUrl: "/images/event-3.webp",
	},
];
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
							<h1>Browse Events</h1>
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

		<!--    Event list section start    -->
		<section class="sec-padding">
			<div class="container">
				<div class="row search-area">
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 align-content-center">
						<div class="filtter-dropdown position-relative">
							<div class="dropdown">
								<img
									src="/images/filter-icon.webp"
									alt="">
								<button
									id="dropdownMenuButton1"
									class="btn btn-secondary dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Filter By Category
								</button>
								<ul
									class="dropdown-menu"
									aria-labelledby="dropdownMenuButton1">
									<li>
										<a
											class="dropdown-item"
											href="#">Action</a>
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#">Another action</a>
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#">Something else here</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-0 col-sm-12 order-md-last  text-center">
						<div class="search-area-shape">
							<img
								src="/images/hexagon-vector.webp"
								alt="">
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 order-lg-last align-content-center">
						<div class="search-content">
							<img
								src="/images/search-normal.webp"
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
					<EventCard
						v-for="event in events"
						:key="event.id"
						:event="event" />

					<div class="col-12 text-center">
						<a
							href="categoryevent.html"
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
