<script setup lang="ts">
const { locations } = useLocations();

const listedVenues = computed(() => {
        if (!locations.value) return [];
        return locations.value
                .filter(v => v.venueListOrder)
                .sort((a, b) => (a.venueListOrder || 0) - (b.venueListOrder || 0));
});

useHead({
        title: "Conscious Venues",
        meta: [
                {
                        name: "description",
                        content: "Discover our favorite conscious venues around Orlando that host weekly wellness events.",
                },
        ],
});

useSeoMeta({
        twitterTitle: "Conscious Venues | Joyful Orlando",
        description: "Discover our favorite conscious venues around Orlando that host weekly wellness events.",
        twitterDescription: "Discover our favorite conscious venues around Orlando that host weekly wellness events.",
        ogDescription: "Discover our favorite conscious venues around Orlando that host weekly wellness events.",
        ogImage: "/images/this-is-joyful-orlando.png",
});
</script>

<template>
        <div>
                <!--    Hero section start    -->
                <section
                        class="innpage-hero-section"
                        style="background-color: #01A652;">
                        <img
                                src="/images/cloudwhite.webp"
                                class="hero-left-shape"
                                alt="">
                        <div class="container">
                                <div class="row align-items-center gx-0 mt-40">
                                        <div class="col-xl-12">
                                                <div class="hero-content text-center">
                                                        <h1>Conscious Venues</h1>
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
                                <div class="row justify-content-center mb-5">
                                        <div class="col-lg-10 text-center">
                                                <p style="font-size: 18px; line-height: 1.8;">
                                                        Looking for more events? Below are a list of our favorite conscious venues around Orlando that have lots of weekly events.
                                                </p>
                                        </div>
                                </div>

                                <div
                                        v-for="venue in listedVenues"
                                        :key="venue.id"
                                        class="row justify-content-center mb-4">
                                        <div class="col-lg-8">
                                                <div class="venue-list-item">
                                                        <NuxtLink :to="`/venues/${venue.slug}`" class="venue-logo-wrapper">
                                                                <img
                                                                        v-if="venue.logo"
                                                                        :src="`/images/venues/${venue.logo}`"
                                                                        :alt="venue.name"
                                                                        class="venue-logo">
                                                        </NuxtLink>
                                                        <div class="venue-details">
                                                                <h3>
                                                                        <NuxtLink :to="`/venues/${venue.slug}`" class="venue-name-link">
                                                                                {{ venue.name }}
                                                                        </NuxtLink>
                                                                </h3>
                                                                <p class="venue-address">
                                                                        <i class="fa fa-map-marker" />
                                                                        {{ venue.address }}
                                                                </p>
                                                                <a
                                                                        v-if="venue.url"
                                                                        :href="venue.url"
                                                                        class="btn venue-btn"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer">Visit Website</a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        </div>
</template>

<style scoped>
.venue-list-item {
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 24px 0;
        border-bottom: 1px solid #eee;
}

.venue-logo-wrapper {
        width: 300px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
}

.venue-logo {
        max-width: 100%;
        max-height: 200px;
        object-fit: contain;
}

.venue-details {
        text-align: left;
}

.venue-btn {
        background-color: #01A652;
        border-color: #01A652;
        color: #fff;
}

.venue-btn:hover {
        background-color: #018a45;
        border-color: #018a45;
        color: #fff;
}

.venue-name-link {
        color: #222;
        text-decoration: none;
}

.venue-name-link:hover {
        color: #01A652;
}

.venue-address {
        font-size: 18px;
        color: #555;
        margin-bottom: 12px;
}

@media (max-width: 576px) {
        .venue-list-item {
                flex-direction: column;
                text-align: center;
        }

        .venue-details {
                text-align: center;
        }
}
</style>
