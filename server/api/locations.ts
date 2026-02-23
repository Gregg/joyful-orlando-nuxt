import { getLocations } from "~/server/utils/locationStore";

export default defineEventHandler(async () => {
        return await getLocations();
});
