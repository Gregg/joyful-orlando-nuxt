<script setup lang="ts">
const { locations } = useLocations();

const listedVenues = computed(() => {
        if (!locations.value) return [];
        return locations.value
                .filter(v => v.venueListOrder)
                .sort((a, b) => (a.venueListOrder || 0) - (b.venueListOrder || 0));
});

const { data: allEventCounts } = await useFetch("/api/venue-event-counts", {
        default: () => ({}),
});

function getUpcomingCount(venueId: string): number {
        return allEventCounts.value?.[venueId]?.upcoming || 0;
}
</script>

<template>
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
                                        <a :href="venue.url || `/venues/${venue.slug}`" :target="venue.url ? '_blank' : undefined" :rel="venue.url ? 'noopener' : undefined" class="venue-logo-wrapper">
                                                <img
                                                        v-if="venue.logo"
                                                        :src="`/images/venues/${venue.logo}`"
                                                        :alt="venue.name"
                                                        class="venue-logo">
                                        </a>
                                        <div class="venue-details">
                                                <h3>
                                                        <a :href="venue.url || `/venues/${venue.slug}`" :target="venue.url ? '_blank' : undefined" :rel="venue.url ? 'noopener' : undefined" class="venue-name-link">
                                                                {{ venue.name }}
                                                        </a>
                                                </h3>
                                                <p class="venue-address">
                                                        <i class="fa fa-map-marker" />
                                                        {{ venue.address }}
                                                </p>
                                                <p v-if="getUpcomingCount(venue.id) > 0" class="venue-upcoming-link">
                                                        <NuxtLink :to="`/venues/${venue.slug}`">
                                                                {{ getUpcomingCount(venue.id) }} Upcoming Event{{ getUpcomingCount(venue.id) === 1 ? '' : 's' }} on Joyful Orlando
                                                        </NuxtLink>
                                                </p>
                                                <a
                                                        v-if="venue.url"
                                                        :href="venue.url"
                                                        class="btn venue-btn"
                                                        target="_blank"
                                                        rel="noopener">Visit Website</a>
                                        </div>
                                </div>
                        </div>
                </div>
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
        margin-bottom: 4px;
}

.venue-upcoming-link {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 12px;
}

.venue-upcoming-link a {
        color: #01A652;
        text-decoration: none;
}

.venue-upcoming-link a:hover {
        text-decoration: underline;
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
