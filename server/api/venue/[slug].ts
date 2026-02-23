import { getLocations } from "~/server/utils/locationStore";

export default defineEventHandler(async (event) => {
        const locations = await getLocations();
        const slug = getRouterParam(event, "slug");
        const venue = locations.find(l => l.slug === slug);

        if (!venue) {
                throw createError({
                        statusCode: 404,
                        statusMessage: "Venue not found",
                });
        }

        return venue;
});
