import { describe, test, expect } from "vitest";
import { dateFormat } from "../utils/dateFormat";

describe("dateFormat", () => {
	test("prints correct date format", () => {
		const formattedDate = dateFormat("2023-02-23T18:30:00Z");
		const expectedDate = "February 23, 2023 at 1:30 PM";
		expect(formattedDate).toBe(expectedDate);
	});

	test("prints time in orlando timezone", () => {
		const formattedDate = dateFormat("2025-04-16T15:00:00Z");
		const expectedDate = "April 16, 2025 at 11:00 AM";
		expect(formattedDate).toBe(expectedDate);
	});
});
