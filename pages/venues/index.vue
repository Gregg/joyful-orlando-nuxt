<script setup lang="ts">
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
                        <VenueList />
                </section>
        </div>
</template>

<style scoped>
</style>
