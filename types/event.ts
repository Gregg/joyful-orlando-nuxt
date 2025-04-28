export interface IEvent {
	id: string;
	name: string;
	date: string;
	imageUrl: string;
	slug: string;
	description: string;
	locationId: string;
	categories: Array<string>;
	featured: boolean;
	url: string;
}
