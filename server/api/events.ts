import { base } from "../client";
import type { IEvent } from "~/types/event";
import { generateEvent } from "~/server/generateEvent";

const events: Array<IEvent> = [];

async function fetchEvents() {
	try {
		// Fetch all records at once from the "Upcoming Events" view
		const records = await base("Events")
			.select({
				view: "Upcoming Events",
				// Specify we want all records (Airtable's max is 100 per request but .all() handles this for us)
				pageSize: 100
			})
			.all();

		// Clear existing events and add all new ones
		events.length = 0;
		records.forEach((record) => {
			events.push(generateEvent(record));
		});

		return events;
	} catch (error) {
		console.error('Error fetching events:', error);
		throw error;
	}
}

export default defineEventHandler(async (event) => {
	if (events.length === 0) {
		await fetchEvents();
	}

	return [...events];
});
