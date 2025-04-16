export function useLocations() {
	const { data: locations } = useFetch("/api/locations");

	function getLocationById(id: string) {
		return locations.value?.find(location => location.id === id);
	}

	return { locations, getLocationById };
}
