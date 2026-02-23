export function useLocations() {
        const { data: locations } = useFetch("/api/locations");

        function getLocationById(id: string) {
                return locations.value?.find(location => location.id === id);
        }

        function getLocationBySlug(slug: string) {
                return locations.value?.find(location => location.slug === slug);
        }

        return { locations, getLocationById, getLocationBySlug };
}
