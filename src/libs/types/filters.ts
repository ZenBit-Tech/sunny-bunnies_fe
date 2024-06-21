type FilterItem = {
	id: string;
	name: string;
};

type Filters = {
	[key: string]: number | string | undefined;
	maxPrice?: number;
	minPrice?: number;
};

export type { FilterItem, Filters };
