export function useCategories() {
	const { data: categories } = useFetch("/api/categories");

	function getCategoryById(id: string) {
		return categories.value?.find(category => category.id === id);
	}

	const featuredCategories = computed(() => {
		return categories.value?.filter(category => category.featured === true);
	});

	return { categories, getCategoryById, featuredCategories };
}
