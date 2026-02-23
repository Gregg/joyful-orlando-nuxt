import { base } from "~/server/client";

export default defineEventHandler(async () => {
        try {
                const records = await base("Events")
                        .select({
                                fields: ["Date", "Location"],
                        })
                        .all();

                const now = new Date();
                const counts: Record<string, { upcoming: number; previous: number }> = {};

                records.forEach((record) => {
                        const locations = record.get("Location") as Array<string> | undefined;
                        if (!locations) return;

                        const date = record.get("Date") as string;
                        const isUpcoming = date && new Date(date) >= now;

                        locations.forEach((locationId) => {
                                if (!counts[locationId]) {
                                        counts[locationId] = { upcoming: 0, previous: 0 };
                                }
                                if (isUpcoming) {
                                        counts[locationId].upcoming++;
                                } else {
                                        counts[locationId].previous++;
                                }
                        });
                });

                return counts;
        } catch (error) {
                console.error("Error fetching all venue event counts:", error);
                return {};
        }
});
