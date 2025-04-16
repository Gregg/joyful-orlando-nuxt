import type { ICategory } from "~/types/category";
import { base } from "~/server/client";

export default defineEventHandler(async (event) => {
	const categories: Array<ICategory> = [];

	await base("Categories").select({
		fields: ["Name", "Slug", "Color", "Icon", "Featured"],
		view: "Grid view",
	}).eachPage((records, processNextPage) => {
		records.forEach(function (record) {
			categories.push({
				id: record.id,
				name: record.get("Name") as string,
				slug: record.get("Slug") as string,
				icon: record.get("Icon") as string,
				color: record.get("Color") as string,
				featured: record.get("Featured") as boolean,
			});
		});

		processNextPage();
	});

	return [...categories];
});
