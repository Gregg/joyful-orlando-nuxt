export function dateFormat(dateIso: string): string {
	const date = new Date(dateIso);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
		timeZone: "America/New_York",
	};
	return new Intl.DateTimeFormat("en-US", options).format(date);
}
