import type { IEvent } from "~/types/event";

export function useCategories() {
	const { data: categories } = useFetch("/api/categories");

	function getCategoryById(id: string) {
		return categories.value?.find(category => category.id === id);
	}

	function getCategoryBySlug(slug: string) {
		return categories.value?.find(category => category.slug === slug);
	}

	const featuredCategories = computed(() => {
		return categories.value?.filter(category => category.featured === true);
	});

	const getColor = (event: IEvent) => {
		const category = getCategoryById(event.categories[0]);
		if (category) {
			return category.color;
		}
	};

	const sortedCategories = computed(() => {
		return categories.value?.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	});

	return { categories, sortedCategories, getCategoryById, getCategoryBySlug, getColor, featuredCategories };
}
