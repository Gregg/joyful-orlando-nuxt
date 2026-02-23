<script setup lang="ts">
const config = useRuntimeConfig();
const GOOGLE_MAPS_API_KEY = config.public.gMapsApiKey;

const route = useRoute();
const slug = route.params.slug as string;

const { data: venue } = await useFetch(`/api/venue/${slug}`);

if (!venue.value) {
        throw createError({
                statusCode: 404,
                statusMessage: "Venue not found",
                message: "The venue you are looking for does not exist.",
        });
}

const { getEventsByLocationId } = useEvents();
const venueEvents = computed(() => venue.value ? getEventsByLocationId(venue.value.id) : []);

const mapSource = computed(() => {
        if (!venue.value) {
                return "";
        }
        return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(venue.value.name)},${encodeURIComponent(venue.value.address)}`;
});

useHead({
        title: `${venue.value?.name}`,
        meta: [
                {
                        name: "description",
                        content: `Discover upcoming conscious wellness events at ${venue.value?.name} in Orlando.`,
                },
        ],
});

useSeoMeta({
        twitterTitle: `${venue.value?.name} | Joyful Orlando`,
        description: `Discover upcoming conscious wellness events at ${venue.value?.name} in Orlando.`,
        twitterDescription: `Discover upcoming conscious wellness events at ${venue.value?.name} in Orlando.`,
        ogDescription: `Discover upcoming conscious wellness events at ${venue.value?.name} in Orlando.`,
        ogImage: venue.value?.logo || "/images/this-is-joyful-orlando.png",
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
                                                        <h1>{{ venue?.name }}</h1>
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

                <!--    Venue info section start    -->
                <section class="sec-padding">
                        <div class="container">
                                <div class="row justify-content-center mb-5">
                                        <div class="col-lg-8 text-center">
                                                <img
                                                        v-if="venue?.logo"
                                                        :src="`/images/venues/${venue.logo}`"
                                                        :alt="venue.name"
                                                        class="venue-logo mb-4">
                                                <p class="venue-address">
                                                        <i class="fa fa-map-marker" />
                                                        {{ venue?.address }}
                                                </p>
                                        </div>
                                </div>

                                <div
                                        v-if="venueEvents && venueEvents.length > 0"
                                        class="row justify-content-center mb-4">
                                        <div class="col-lg-10">
                                                <h3 class="text-center mb-4">Upcoming Events</h3>
                                        </div>
                                </div>
                                <div class="row">
                                        <EventCard
                                                v-for="event in venueEvents"
                                                :key="event.id"
                                                :event="event" />
                                </div>
                                <div
                                        v-if="!venueEvents || venueEvents.length === 0"
                                        class="row justify-content-center">
                                        <div class="col-lg-8 text-center">
                                                <p style="font-size: 18px; color: #666;">No upcoming events at this venue right now. Check back soon!</p>
                                        </div>
                                </div>
                        </div>
                </section>
                <!--    Venue info section end    -->

                <!--    Location Map Section start -->
                <section class="location-map sec-padding">
                        <div
                                class=" "
                                style="background-color: #FE7D15;">
                                <div class="container">
                                        <div class="row">
                                                <div class="col">
                                                        <div class="location-detail">
                                                                <img
                                                                        src="/images/location.webp"
                                                                        alt="">
                                                                <h6>{{ venue?.name }}</h6>
                                                                <p>{{ venue?.address }}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <iframe
                                        v-if="mapSource"
                                        height="400"
                                        class="location-map-image"
                                        style="border:0"
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        :src="mapSource" />
                        </div>
                </section>
                <!--    Location Map Section end -->
        </div>
</template>

<style scoped>
.venue-logo {
        max-width: 250px;
        max-height: 250px;
        object-fit: contain;
}

.venue-address {
        font-size: 18px;
        color: #555;
}
</style>
