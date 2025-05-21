import { base } from "../../client";
import { generateEvent } from "~/server/generateEvent";

async function fetchEvent(slug: string) {
	return await base("Events").select({
		maxRecords: 1,
		filterByFormula: `{Slug} = '${slug}'`,
	}).firstPage();
}

export default defineEventHandler(async (event) => {
	const slug = getRouterParam(event, "slug");

	if (!slug) {
		throw createError({
			statusCode: 400,
			statusMessage: "Slug is required",
		});
	}

	const records = await fetchEvent(slug);
	if (records.length === 0) {
		throw createError({
			statusCode: 404,
			statusMessage: "Event not found",
		});
	}

	return generateEvent(records[0]);
});
