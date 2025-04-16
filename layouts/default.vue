<script setup lang="ts">
const navBarShown = ref(false);
</script>

<template>
	<div>
		<!--    Header section start    -->
		<header>
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<a
						class="navbar-brand"
						href="#">
						<span class="logo-icon"><img
							src="/images/joyful-orlando-icon.webp"
							alt=""></span>
						<span class="logo-text d-none d-lg-block">Joyful Orlando</span>
					</a>
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
								<a
									class="nav-link"
									href="#">Browse Events</a>
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
						:class="{ show: navBarShown }">
						<ul class="navbar-nav ms-auto">
							<!-- Search Inside Navbar for Larger Screens -->
							<li class="nav-item d-none d-lg-flex">
								<div class="search-container">
									<i class="far fa-search search-icon" />
									<input
										type="text"
										class="search-input"
										placeholder="Search...">
								</div>
							</li>
							<li class="nav-item d-none d-lg-flex">
								<a
									class="nav-link"
									href="#">Browse Events</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="#">Submit Event</a>
							</li>
						</ul>
						<!-- Sign Up Button -->
						<a
							id=""
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
		<section
			id="signupform"
			class="sec-padding news-letter">
			<div class="container">
				<div class="sec-heading sec-head-has-shape sec-head-center">
					<div class="row">
						<div class="col-xl-12">
							<div class="news-star">
								<img
									src="/images/newsstar.png"
									alt="">
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-xl-8">
							<h2>Get access to curated events delivered to your mailbox twice a month</h2>
							<p>Joyful Orlando is on a mission to spotlight conscious & wellness events that help you slow down, show up, and feel actually good (not just “pretend good” for Instagram). Joyful Orlando is on a mission to spotlight conscious & </p>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-12 ">
							<form
								action=""
								class="form-input">
								<div class="input-box">
									<img
										src="/images/profile.webp"
										alt="">
									<input
										id=""
										class="form-control"
										type="text"
										name=""
										placeholder="First name">
								</div>
								<div class="input-box">
									<img
										src="/images/sms.webp"
										alt="">
									<input
										id=""
										class="form-control"
										type="text"
										name=""
										placeholder="Email">
								</div>
								<a
									href="#"
									class="btn btn-dark"
									type="button">Join Now</a>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="newsbg-image">
				<img
					src="/images/news-background.png"
					alt="">
			</div>
		</section>
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
								<p>Waters divided said aims kind seicond winged form it tree after female the deep at itself creepeth land bring place day sea dont caus may thing open who their midst to seas</p>
								<div class="social-media">
									<h6>Follow us</h6>
									<ul class="list-inline">
										<li><a href="#"><i class="fab fa-facebook-f" /></a></li>
										<li><a href="#"><i class="fab fa-twitter" /></a></li>
										<li><a href="#"><i class="fab fa-pinterest" /></a></li>
										<li><a href="#"><i class="fab fa-instagram" /></a></li>
										<li><a href="#"><i class="fab fa-linkedin" /></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-4">
							<div class="oue-links">
								<h6>Our Link</h6>
								<ul class="list-inline">
									<li><a href="#">- Home</a></li>
									<li><a href="#">- About Us</a></li>
									<li><a href="#">- Browse Events</a></li>
									<li><a href="#">- Submit Event</a></li>
								</ul>
							</div>
						</div>
						<div class="col-xl-7 col-lg-5 col-md-12">
							<div class="row">
								<div class="col-xl-5 col-lg-12 col-md-5">
									<div class="contact-info">
										<h6>Contact Info</h6>
										<div class="contact-detail">
											<p>House no 35, Palmall street,London, England</p>
											<span>Email:</span><br>
											<a href="#">info@basictheme.com</a><br><br>
											<span>Support:</span><br>
											<a href="#">+1 325 562 3265</a><br><br>
											<span>Website:</span><br>
											<a href="#">www.abcinco.com</a>
										</div>
									</div>
								</div>
								<div class="col-xl-7 col-lg-12 col-md-7">
									<div class="instagram-detail">
										<h6>Follow Us on Instagram</h6>
										<p>Stay updated with our latest events and community moments.</p>
										<a
											href="about.html"
											role="button"
											target="_blank">@orlandoisjoyful</a>
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
	overflow: hidden;
	transition: opacity 0s 0.4s ease, height 0.35s ease;
}

.collapse.show {
	opacity: 1;
	height: 100px;
	transition: opacity 0s 0s ease, height 0.35s ease;
}
</style>
