import { base } from "../client";
import type { IEvent } from "~/types/event";
import { generateEvent } from "~/server/generateEvent";

const events: Array<IEvent> = [];

async function fetchEvents() {
	await base("Events").select({
		view: "Upcoming Events",
	}).eachPage((records, processNextPage) => {
		records.forEach(function (record) {
			events.push(generateEvent(record));
		});

		processNextPage();
	});
}

export default defineEventHandler(async (event) => {
	if (events.length === 0) {
		await fetchEvents();
	}

	return [...events];
});
