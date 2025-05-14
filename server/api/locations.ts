import type { ILocation } from "~/types/location";
import { base } from "~/server/client";

const locations: Array<ILocation> = [];

async function fetchLocations() {
	await base("Locations").select({
		fields: ["Name", "Address"],
	}).eachPage((records, processNextPage) => {
		records.forEach(function (record) {
			locations.push({
				id: record.id,
				name: record.get("Name") as string,
				address: record.get("Address") as string,
			});
		});

		processNextPage();
	});
}
export default defineEventHandler(async (event) => {
	if (locations.length === 0) {
		await fetchLocations();
	}

	return [...locations];
});
