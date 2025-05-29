import type { FieldSet, Record } from "airtable";
import type { IEvent } from "~/types/event";

export function generateEvent(record: Record<FieldSet>): IEvent {
	const defaultImageUrl = "https://res.cloudinary.com/dxyuki6gm/image/upload/t_SquareCrop/recuC9QcOp2VFyYy1.png";
	const imageArray = record.get("ImageUrl") as Array<string> | undefined;
	
	// Determine the image URL based on whether we have a valid image array
	let imageUrl = defaultImageUrl;
	if (imageArray?.length > 0) {
		const imageId = imageArray[0].split("/").pop();
		imageUrl = `https://res.cloudinary.com/dxyuki6gm/image/upload/t_SquareCrop/${imageId}`;
	}

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
