import { base } from "~/server/client";

interface EventCounts {
        upcoming: number;
        previous: number;
}

export default defineEventHandler(async (event): Promise<EventCounts> => {
        const locationId = getRouterParam(event, "id");

        if (!locationId) {
                throw createError({
                        statusCode: 400,
                        statusMessage: "Location ID is required",
                });
        }

        try {
                const records = await base("Events")
                        .select({
                                fields: ["Date", "Location"],
                        })
                        .all();

                const now = new Date();
                let upcoming = 0;
                let previous = 0;

                records.forEach((record) => {
                        const locations = record.get("Location") as Array<string> | undefined;
                        if (!locations || !locations.includes(locationId)) return;

                        const date = record.get("Date") as string;
                        if (date && new Date(date) >= now) {
                                upcoming++;
                        } else {
                                previous++;
                        }
                });

                return { upcoming, previous };
        } catch (error) {
                console.error("Error fetching venue event counts:", error);
                return { upcoming: 0, previous: 0 };
        }
});
