import type { ILocation } from "~/types/location";
import { base } from "~/server/client";

const locations: Array<ILocation> = [];

function generateSlug(name: string): string {
        return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function getLocations(): Promise<Array<ILocation>> {
        if (locations.length > 0) {
                return [...locations];
        }

        try {
                const records = await base("Locations").select({
                        fields: ["Name", "Address", "Logo"],
                }).all();

                const newLocations: Array<ILocation> = [];

                records.forEach(function (record) {
                        const name = record.get("Name") as string | undefined;
                        if (!name) return;

                        let logo: string | undefined;
                        try {
                                const logoRaw = record.get("Logo");
                                if (typeof logoRaw === "string" && logoRaw) {
                                        logo = logoRaw;
                                } else if (Array.isArray(logoRaw) && logoRaw.length > 0) {
                                        logo = typeof logoRaw[0] === "string" ? logoRaw[0] : logoRaw[0]?.url;
                                }
                        } catch {
                                logo = undefined;
                        }

                        newLocations.push({
                                id: record.id,
                                name,
                                address: (record.get("Address") as string) || "",
                                slug: generateSlug(name),
                                logo,
                        });
                });

                locations.length = 0;
                locations.push(...newLocations);
        } catch (error) {
                console.error("Error fetching locations:", error);
                throw error;
        }

        return [...locations];
}
