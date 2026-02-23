<script setup lang="ts">
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
                <header class="transfer-header">
                        <div class="container">
                                <div class="text-center py-3">
                                        <NuxtLink to="/">
                                                <span class="logo-icon"><img src="/images/joyful-orlando-icon.webp" alt="Joyful Orlando"></span>
                                                <span class="logo-text" style="font-family: 'More Sugar'; font-weight: 400;">Joyful Orlando</span>
                                        </NuxtLink>
                                </div>
                        </div>
                </header>

                <slot />

                <footer>
                        <div class="footer-sec" style="background-color: #222222;">
                                <div class="container">
                                        <div class="row foot-contact-detail">
                                                <div class="col-xl-3 col-lg-4 col-md-8">
                                                        <div class="about-content">
                                                                <div class="company-logo">
                                                                        <img src="/images/footer-logo.webp" alt="">
                                                                </div>
                                                                <p>Joyful Orlando curates the best conscious and wellness events in the city, helping you build meaningful
                                                                        connections, boost your well-being, and find your community.</p>
                                                        </div>
                                                </div>
                                                <div class="col-xl-2 col-lg-3 col-md-4">
                                                        <div class="oue-links">
                                                                <h6>Our Links</h6>
                                                                <ul>
                                                                        <li>
                                                                                <NuxtLink to="/">Home</NuxtLink>
                                                                        </li>
                                                                        <li>
                                                                                <NuxtLink to="/about">About Us</NuxtLink>
                                                                        </li>
                                                                        <li>
                                                                                <NuxtLink to="/events">Browse Events</NuxtLink>
                                                                        </li>
                                                                        <li>
                                                                                <NuxtLink to="/submit">Submit Event</NuxtLink>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-5 col-md-12">
                                                        <div class="row">
                                                                <div class="col-xl-5 col-lg-12 col-md-5">
                                                                        <div class="contact-info">
                                                                                <h6>Contact Info</h6>
                                                                                <div class="contact-detail">
                                                                                        <p>1001 North Orange Avenue<br>Orlando, FL, 32801</p>
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
                                                                                <a href="https://www.instagram.com/orlandoisjoyful" role="button" target="_blank">@OrlandoIsJoyful</a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="row">
                                                <div class="col">
                                                        <div class="copy-right-content">
                                                                <p>Joyful Orlando is joyfully supported by <a href="https://www.globalpeace360.org/">Global Peace 360°</a>
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </footer>
        </div>
</template>

<style scoped>
.transfer-header {
        background-color: #fff;
        border-bottom: 1px solid #eee;
}

.transfer-header a {
        text-decoration: none;
        color: #222;
        display: inline-flex;
        align-items: center;
        gap: 8px;
}

.transfer-header .logo-icon img {
        height: 60px;
}

.transfer-header .logo-text {
        font-size: 28px;
}
</style>
