type Category = {
	brands: Brand[];
	id: number;
	materials: Material[];
	name: string;
	styles: Style[];
	types: Type[];
};

type Type = {
	id: number;
	name: string;
};

type Style = {
	id: number;
	name: string;
};

type Brand = {
	id: number;
	name: string;
};

type Material = {
	id: number;
	name: string;
};

export type { Brand, Category, Material, Style, Type };
