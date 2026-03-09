<script setup lang="ts">
import { dateFormat } from "~/utils/dateFormat";

const { getEventBySlug } = useEvents();
const { getCategoryById } = useCategories();

const eventSlugs = [
        "81057-latihan-qigong-dance-night",
        "00923-cuddles-connection",
        "12649-temple-night-wmonique-darling-peter-petersen",
];

const featuredEvents = computed(() => {
        return eventSlugs
                .map(slug => getEventBySlug(slug))
                .filter(Boolean);
});

function getCategories(event: any) {
        return event.categories.map((id: string) => getCategoryById(id)).filter(Boolean);
}

useHead({
        title: "A Weekend of Connection & Conscious Exploration | Joyful Orlando",
        meta: [
                {
                        name: "description",
                        content: "Join world-renowned facilitators Monique Darling and Peter Petersen for three powerful experiences designed to awaken presence, deepen connection, and celebrate the aliveness of being human together.",
                },
        ],
});

useSeoMeta({
        ogTitle: "A Weekend of Connection & Conscious Exploration | Joyful Orlando",
        ogDescription: "Join world-renowned facilitators Monique Darling and Peter Petersen for three powerful experiences designed to awaken presence, deepen connection, and celebrate the aliveness of being human together.",
        twitterTitle: "A Weekend of Connection & Conscious Exploration | Joyful Orlando",
        twitterDescription: "Join world-renowned facilitators Monique Darling and Peter Petersen for three powerful experiences designed to awaken presence, deepen connection, and celebrate the aliveness of being human together.",
        ogImage: "/images/this-is-joyful-orlando.png",
});
</script>

<template>
        <div>
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
                                                        <h1>A Weekend of Connection & Conscious Exploration</h1>
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

                <section class="sec-padding">
                        <div class="container">
                                <div class="row justify-content-center">
                                        <div class="col-xl-8 text-center">
                                                <p class="landing-description">
                                                        Join world-renowned facilitators <strong>Monique Darling</strong> and <strong>Peter Petersen</strong> for three powerful experiences designed to awaken presence, deepen connection, and celebrate the aliveness of being human together.
                                                </p>
                                        </div>
                                </div>

                                <div class="row mt-5">
                                        <div
                                                v-for="event in featuredEvents"
                                                :key="event?.id"
                                                class="col-xl-4 col-lg-6 col-md-12 event-card-outer">
                                                <a
                                                        :href="event!.url"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        role="button">
                                                        <div class="event-card">
                                                                <div class="event-thumb-img">
                                                                        <img
                                                                                :src="event!.imageUrl"
                                                                                class="img-fluid"
                                                                                :alt="event!.name">
                                                                </div>
                                                                <div class="event-list-content">
                                                                        <h5>{{ event!.name }}</h5>
                                                                        <p>{{ dateFormat(event!.date) }}</p>
                                                                        <div
                                                                                v-for="category in getCategories(event!)"
                                                                                :key="category?.id"
                                                                                class="event-list-icon">
                                                                                <img
                                                                                        :src="`/images/icons/${category?.icon}`"
                                                                                        alt=""> {{ category?.name }}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </a>
                                        </div>
                                </div>
                        </div>
                </section>

                <FloDeskSignUp />
        </div>
</template>

<style scoped>
.landing-description {
        font-size: 20px;
        line-height: 1.8;
        color: #444;
}
</style>
