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
                <section class="innpage-hero-section" style="background-color: #9F64FC;">
                        <img src="/images/cloudwhite.webp" class="hero-left-shape" alt="">
                        <div class="container">
                                <div class="row align-items-center gx-0 mt-40">
                                        <div class="col-xl-12">
                                                <div class="hero-content text-center">
                                                        <h1>Winter Solstice Sunrise Experience</h1>
                                                </div>
                                                <img src="/images/white-star.webp" class="hero-star-shape" alt="">
                                        </div>
                                </div>
                        </div>
                        <img src="/images/colorscloud.webp" class="hero-right-shape" alt="">
                </section>
                <!--    Hero section end    -->

                <section class="sec-padding">
                        <div class="container">
                                <div class="row justify-content-center mb-4">
                                        <div class="col-lg-10">
                                                <div class="d-flex flex-column flex-md-row align-items-center gap-4">
                                                        <div class="flex-grow-1 order-2 order-md-1">
                                                                <p style="font-size: 18px; line-height: 1.8; margin: 0;">
                                                                        On <strong>December 21 at 6:30am</strong>, we invite you
                                                                        to welcome the winter solstice with a sunrise experience
                                                                        designed to energize your body and soften your spirit.
                                                                        Together with <strong><a href="http://pla.yoga/"
                                                                                        target="_blank">Alex of
                                                                                        PLA.Yoga</a></strong> and
                                                                        <strong>Kenissa Cox of Ambient Productions</strong>,
                                                                        we're transforming the <strong>CityArts
                                                                                Courtyard</strong> into an immersive open-air
                                                                        sanctuary for movement, music, and connection.
                                                                </p>
                                                        </div>
                                                        <div class="flex-shrink-0 order-1 order-md-2">
                                                                <img src="/images/solstice-1.jpeg"
                                                                        alt="Winter Solstice Sunrise Experience"
                                                                        class="solstice-img">
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="row justify-content-center mb-5">
                                        <div class="col-lg-10">
                                                <div class="d-flex flex-column flex-md-row align-items-center gap-4">
                                                        <div class="flex-shrink-0">
                                                                <img src="/images/solstice-2.jpeg"
                                                                        alt="Yoga and Dance at Sunrise" class="solstice-img">
                                                        </div>
                                                        <div class="flex-grow-1">
                                                                <p
                                                                        style="font-size: 18px; line-height: 1.8; margin: 0 0 1rem 0;">
                                                                        We'll begin with a grounded yoga flow that melts into an
                                                                        ecstatic dance journey, all guided through
                                                                        <strong>wireless headphones</strong> so every breath,
                                                                        beat, and moment feels intimately your own. As the sun
                                                                        rises over downtown, guests can enjoy <strong>CityArts
                                                                                Café's signature coffee blend</strong>, served
                                                                        complimentary throughout the morning to keep you warm
                                                                        and connected.
                                                                </p>
                                                                <p style="font-size: 18px; line-height: 1.8; margin: 0;">
                                                                        This is more than a class, it's a communal ritual to
                                                                        mark the shift in season, honor the light returning, and
                                                                        gather with people who want to start winter with
                                                                        intention, joy, and presence.
                                                                </p>
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
.solstice-img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 20px;
}

@media (max-width: 767px) {
        .solstice-img {
                margin: 0 auto;
        }
}
</style>
