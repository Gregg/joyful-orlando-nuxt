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
                                                <img src="/images/solstice-1.jpeg" alt="Winter Solstice Sunrise Experience" class="solstice-img-right">
                                                <p style="font-size: 18px; line-height: 1.8;">
                                                        On <strong>December 21 at 6:30am</strong>, we invite you to welcome the winter solstice with a sunrise experience designed to energize your body and soften your spirit. Together with <strong><a href="http://pla.yoga/" target="_blank" rel="noopener noreferrer">Alex of PLA.Yoga</a></strong> and <strong>Kenissa Cox of Ambient Productions</strong>, we're transforming the <strong>CityArts Courtyard</strong> into an immersive open-air sanctuary for movement, music, and connection.
                                                </p>
                                                <div style="clear: both;"></div>
                                        </div>
                                </div>
                                <div class="row justify-content-center mb-5">
                                        <div class="col-lg-10">
                                                <img src="/images/solstice-2.jpeg" alt="Yoga and Dance at Sunrise" class="solstice-img-left">
                                                <p style="font-size: 18px; line-height: 1.8;">
                                                        We'll begin with a grounded yoga flow that melts into an ecstatic dance journey, all guided through <strong>wireless headphones</strong> so every breath, beat, and moment feels intimately your own. As the sun rises over downtown, guests can enjoy <strong>CityArts Café's signature coffee blend</strong>, served complimentary throughout the morning to keep you warm and connected.
                                                </p>
                                                <p style="font-size: 18px; line-height: 1.8;">
                                                        This is more than a class, it's a communal ritual to mark the shift in season, honor the light returning, and gather with people who want to start winter with intention, joy, and presence.
                                                </p>
                                                <div style="clear: both;"></div>
                                        </div>
                                </div>
                                <iframe data-checkout="sunrise-dance-and-yoga"></iframe>
                        </div>
                </section>
        </div>
</template>

<style scoped>
.solstice-img-right {
        float: right;
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 20px;
        margin-left: 20px;
        margin-bottom: 10px;
}

.solstice-img-left {
        float: left;
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
}

@media (max-width: 576px) {
        .solstice-img-right,
        .solstice-img-left {
                float: none;
                display: block;
                margin: 0 auto 20px auto;
        }
}
</style>
