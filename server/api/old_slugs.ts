import { base } from "../client";

const slugs: Array<string> = [];

async function fetchEvents() {
	await base("Events").select({
		view: "Past Events",
	}).eachPage((records, processNextPage) => {
		records.forEach(function (record) {
			slugs.push(record.get("Slug") as string);
		});

		processNextPage();
	});
}

export default defineEventHandler(async (event) => {
	if (slugs.length === 0) {
		await fetchEvents();
	}

	return [...slugs];
});
