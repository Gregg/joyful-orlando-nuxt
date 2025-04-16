import type { ILocation } from "~/types/location";
import { base } from "~/server/client";

export default defineEventHandler(async (event) => {
	const locations: Array<ILocation> = [];

	await base("Locations").select({
		fields: ["Name", "Address"],
		view: "Grid view",
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

	return [...locations];
});
