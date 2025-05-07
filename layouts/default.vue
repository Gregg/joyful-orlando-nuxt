<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const { searchQuery } = useEvents();
const navBarShown = ref(false);

const isLargeScreen = useMediaQuery("(min-width: 992px)", { ssrWidth: 360 });

const isInEventsPage = computed(() => {
	return route.path === "/events";
});

const searchInputHandler = () => {
	if (searchQuery.value && !isInEventsPage.value) {
		router.push("/events");
	}
};

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{ rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
		{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		{ rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
		{ rel: "shortcut icon", href: "/favicon.ico" },
	],
});
</script>

<template>
	<div>
		<!--    Header section start    -->
		<header>
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<NuxtLink
						class="navbar-brand"
						to="/">
						<span class="logo-icon"><img
							src="/images/joyful-orlando-icon.webp"
							alt=""></span>
						<span class="logo-text d-none d-lg-block">Joyful Orlando</span>
					</NuxtLink>
					<!-- Search Icon beside Toggler on Mobile -->
					<!-- <div class="mobile-search d-lg-none ms-auto">
     <div class="search-container">
      <i class="fas fa-search search-icon"></i>
      <input type="text" class="search-input" placeholder="Search...">
     </div>
    </div> -->
					<!-- Navbar Toggler -->
					<div
						id=""
						class=" ">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item d-lg-none">
								<NuxtLink
									class="nav-link"
									to="/events">Browse Events</NuxtLink>
							</li>
						</ul>
					</div>
					<button
						class="navbar-toggler"
						type="button"
						@click="navBarShown = !navBarShown">
						<span class="navbar-toggler-icon" />
					</button>

					<div
						id="navbarNav"
						class="collapse navbar-collapse"
						:class="{ show: isLargeScreen || navBarShown }">
						<ul class="navbar-nav ms-auto">
							<!-- Search Inside Navbar for Larger Screens -->
							<li class="nav-item d-none d-lg-flex">
								<div class="search-container">
									<i class="far fa-search search-icon" />
									<input
										v-model="searchQuery"
										type="text"
										class="navbar-search-input"
										placeholder="Search..."
										@input="searchInputHandler">
								</div>
							</li>
							<li class="nav-item d-none d-lg-flex">
								<NuxtLink
									class="nav-link"
									to="/events">Browse Events</NuxtLink>
							</li>
							<li class="nav-item">
								<NuxtLink
									class="nav-link"
									to="/submit">Submit Event</NuxtLink>
							</li>
						</ul>
						<!-- Sign Up Button -->
						<a
							href="#signupform"
							role="button"
							class="btn btn-dark">Sign Up</a>
					</div>
				</div>
			</nav>
		</header>
		<!--    Header section end    -->
		<slot />
		<!--    News letter section start -->
		<FloDeskSignUp />
		<!--    News letter section end -->

		<!--   Footer section start   -->
		<footer>
			<div
				class="footer-sec"
				style="background-color: #222222;">
				<div class="container">
					<div class="row foot-contact-detail">
						<div class="col-xl-3 col-lg-4 col-md-8">
							<div class="about-content">
								<div class="company-logo">
									<img
										src="/images/footer-logo.webp"
										alt="">
								</div>
								<p>Joyful Orlando curates the best conscious and wellness events in the city, helping you build meaningful connections, boost your well-being, and find your community.</p>
								<!-- <div class="social-media">
									<h6>Follow us</h6>
									<ul class="list-inline">
										<li><a href="#"><i class="fab fa-facebook-f" /></a></li>
										<li><a href="#"><i class="fab fa-twitter" /></a></li>
										<li><a href="#"><i class="fab fa-pinterest" /></a></li>
										<li><a href="https://www.instagram.com/orlandoisjoyful"><i class="fab fa-instagram" /></a></li>
										<li><a href="#"><i class="fab fa-linkedin" /></a></li>
									</ul>
								</div> -->
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4">
							<div class="oue-links">
								<h6>Our Link</h6>
								<ul class="list-inline">
									<li><NuxtLink to="/">- Home</NuxtLink></li>
									<li><NuxtLink to="/about">- About Us</NuxtLink></li>
									<li><NuxtLink to="/events">- Browse Events</NuxtLink></li>
									<li><NuxtLink to="/submit">- Submit Event</NuxtLink></li>
								</ul>
							</div>
						</div>
						<div class="col-xl-7 col-lg-5 col-md-12">
							<div class="row">
								<div class="col-xl-5 col-lg-12 col-md-5">
									<div class="contact-info">
										<h6>Contact Info</h6>
										<div class="contact-detail">
											<p>Orlando, Florida</p>
											<span>Email:</span><br>
											<p>ishaan [at] joyfulorlando [dot] com</p>
											<span>Website:</span><br>
											<a href="https://www.joyfulorlando.com" target="_blank">www.joyfulorlando.com</a>
										</div>
									</div>
								</div>
								<div class="col-xl-7 col-lg-12 col-md-7">
									<div class="instagram-detail">
										<h6>Follow Us on Instagram</h6>
										<p>Stay updated with our latest events and community moments.</p>
										<a
											href="https://www.instagram.com/orlandoisjoyful"
											role="button"
											target="_blank">@OrlandoIsJoyful</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="copy-right-content">
								<p>Copyright 2025 Joyful Orlando</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!--   Footer section end   -->
	</div>
</template>

<style scoped>
.collapse:not(.show) {
	height: 0;
	opacity: 0;
	display: block;
	overflow: hidden;
	transition: opacity 0s 0.4s ease, height 0.35s ease;
}

.collapse.show {
	opacity: 1;
	height: 100px;
	transition: opacity 0s 0s ease, height 0.35s ease;
}
</style>
