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

		// Clear existing events array
		const newEvents: Array<IEvent> = [];

		// Process each record and check for duplicates
		records.forEach((record) => {
			const newEvent = generateEvent(record);
			
			// Check if an event with the same name and locationId already exists
			const isDuplicate = newEvents.some(existingEvent => 
				existingEvent.name === newEvent.name && 
				existingEvent.locationId === newEvent.locationId
			);

			// Only add if it's not a duplicate
			if (!isDuplicate) {
				newEvents.push(newEvent);
			}
		});

		// Replace the events array with the new filtered events
		events.length = 0;
		events.push(...newEvents);

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
