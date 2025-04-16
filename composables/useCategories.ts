export function useCategories() {
	const { data: categories } = useFetch("/api/categories");

	function getCategoryById(id: string) {
		return categories.value?.find(category => category.id === id);
	}

	return { categories, getCategoryById };
}
