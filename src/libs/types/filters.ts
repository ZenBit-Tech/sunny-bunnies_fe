type FilterItem = {
	id: string;
	name: string;
};

type Filters = {
	minPrice?: number;
	maxPrice?: number;
	[key: string]: string | number | undefined;
};

export type { FilterItem, Filters };
