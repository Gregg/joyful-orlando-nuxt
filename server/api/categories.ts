import type { ICategory } from "~/types/category";
import { base } from "~/server/client";

const categories: Array<ICategory> = [];

async function fetchCategories() {
	await base("Categories").select({
		fields: ["Name", "Slug", "Color", "Icon", "Featured", "Description"],
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
				description: record.get("Description") as string,
			});
		});

		processNextPage();
	});
}

export default defineEventHandler(async (event) => {
	if (categories.length === 0) {
		await fetchCategories();
	}

	return [...categories];
});
