import type { FieldSet, Record } from "airtable";
import type { IEvent } from "~/types/event";

export function generateEvent(record: Record<FieldSet>): IEvent {
	const imageArray = record.get("ImageUrl") as Array<string>;
	const standardImageUrl = imageArray[0] ? imageArray[0] : "";
	const imageId = standardImageUrl.split("/").pop();
	const imageUrl = `https://res.cloudinary.com/dxyuki6gm/image/upload/t_SquareCrop/${imageId}`;

	return {
		id: record.id,
		name: record.get("Name") as string,
		date: record.get("Date") as string,
		locationId: (record.get("Location") as Array<string>)[0] as string,
		description: record.get("Description") as string,
		imageUrl,
		slug: record.get("Slug") as string,
		categories: record.get("Categories") as Array<string>,
		featured: record.get("Featured") as boolean,
		url: record.get("URL") as string,
	};
}
