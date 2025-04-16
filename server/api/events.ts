import type { Attachment } from "airtable";
import { base } from "../client";
import type { IEvent } from "~/types/event";

export default defineEventHandler(async (event) => {
	const events: Array<IEvent> = [];

	await base("Events").select({
		view: "Grid view",
	}).eachPage((records, processNextPage) => {
		records.forEach(function (record) {
			const image = record.get("Image") as Array<Attachment>;

			const fetchedEvent: IEvent = {
				id: record.id,
				name: record.get("Name") as string,
				date: record.get("Date") as string,
				locationId: (record.get("Location") as Array<string>)[0] as string,
				description: record.get("Description") as string,
				imageUrl: image[0].url,
				slug: record.id,
				categories: record.get("Categories") as Array<string>,
				featured: record.get("Featured") as boolean,
			};
			events.push(fetchedEvent);
		});

		processNextPage();
	});

	return [...events];
});
