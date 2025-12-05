<script setup lang="ts">
useHead({
        title: "Winter Solstice Sunrise Experience",
        meta: [
                {
                        name: "description",
                        content: "Welcome the winter solstice with a sunrise experience designed to energize your body and soften your spirit at CityArts Courtyard.",
                },
        ],
        script: [
                {
                        src: "https://events.humanitix.com/scripts/widgets/inline.js",
                        type: "module",
                },
        ],
});

useSeoMeta({
        twitterTitle: `Winter Solstice Sunrise Experience | Joyful Orlando`,
        description: "Welcome the winter solstice with a sunrise experience designed to energize your body and soften your spirit at CityArts Courtyard.",
        twitterDescription: "Welcome the winter solstice with a sunrise experience designed to energize your body and soften your spirit at CityArts Courtyard.",
        ogDescription: "Welcome the winter solstice with a sunrise experience designed to energize your body and soften your spirit at CityArts Courtyard.",
        ogImage: "/images/this-is-joyful-orlando.png",
});
</script>

<template>
        <div>
                <!--    Hero section start    -->
                <section
                        class="innpage-hero-section"
                        style="background-color: #9F64FC;">
                        <img
                                src="/images/cloudwhite.webp"
                                class="hero-left-shape"
                                alt="">
                        <div class="container">
                                <div class="row align-items-center gx-0 mt-40">
                                        <div class="col-xl-12">
                                                <div class="hero-content text-center">
                                                        <h1>Winter Solstice Sunrise Experience</h1>
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
                                        <div class="col-lg-10">
                                                <div class="d-flex flex-column flex-md-row align-items-start align-items-md-start gap-4">
                                                        <div class="flex-grow-1">
                                                                <p style="font-size: 18px; line-height: 1.8;">
                                                                        On December 21 at 6:30am, we invite you to welcome the winter solstice with a sunrise experience designed to energize your body and soften your spirit. Together with Alex of PLA.Yoga and Kenissa Cox of Ambient Productions, we're transforming the CityArts Courtyard into an immersive open-air sanctuary for movement, music, and connection.
                                                                </p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                                <a href="http://fusionfest.org" target="_blank" rel="noopener noreferrer">
                                                                        <img src="/images/fusionfest.png" alt="Winter Solstice" style="max-width: 400px; height: auto;">
                                                                </a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <iframe data-checkout="sunrise-dance-and-yoga"></iframe>
                        </div>
                </section>
        </div>
</template>

<style scoped>

</style>
