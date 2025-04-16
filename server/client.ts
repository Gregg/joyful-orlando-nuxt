import Airtable from "airtable";

Airtable.configure({
	endpointUrl: process.env.AIRTABLE_ENDPOINT_URL ?? "https://api.airtable.com",
	apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE ?? "");

export { base };
