/*
TO DO this data will be fetched from backend
I use this data only for correct work of components
*/

type Category = {
	id: number;
	name: string;
	styles: Style[];
	types: CategoryType[];
};

type CategoryType = {
	id: number;
	name: string;
};

type Style = {
	id: number;
	name: string;
};
const typesAccessories: CategoryType[] = [
	{ id: 1, name: "Hats" },
	{ id: 2, name: "Belts" },
	{ id: 3, name: "Jewelry" },
	{ id: 4, name: "Watches" },
	{ id: 5, name: "Sunglasses" },
	{ id: 6, name: "Gloves" },
	{ id: 7, name: "Ties" },
	{ id: 8, name: "Brooches" },
];

const typesBags: CategoryType[] = [
	{ id: 1, name: "Handbags" },
	{ id: 2, name: "Purses" },
	{ id: 3, name: "Wallets" },
	{ id: 4, name: "Clutches" },
	{ id: 5, name: "Crossbody Bags" },
];

const typesClothing: CategoryType[] = [
	{ id: 1, name: "T-shirts" },
	{ id: 2, name: "Jeans" },
	{ id: 3, name: "Dresses" },
	{ id: 4, name: "Shirts and Blouses" },
	{ id: 5, name: "Tops" },
	{ id: 6, name: "Pants and Trousers" },
	{ id: 7, name: "Skirts" },
	{ id: 8, name: "Sweaters" },
	{ id: 9, name: "Coats" },
	{ id: 10, name: "Activewear" },
	{ id: 11, name: "Sleepwear" },
	{ id: 12, name: "Underwear" },
	{ id: 13, name: "Swimwear" },
	{ id: 14, name: "Sweatshirts" },
	{ id: 15, name: "Suits" },
	{ id: 16, name: "Maternity Wear" },
	{ id: 17, name: "Plus-size Clothing" },
	{ id: 18, name: "Ethnic Clothing" },
];

const typesShoes: CategoryType[] = [
	{ id: 1, name: "Sneakers" },
	{ id: 2, name: "Boots" },
	{ id: 3, name: "Sandals" },
	{ id: 4, name: "Heels" },
	{ id: 5, name: "Flats" },
	{ id: 6, name: "Loafers" },
	{ id: 7, name: "Moccasins" },
	{ id: 8, name: "Slippers" },
	{ id: 9, name: "Flip-flops" },
	{ id: 10, name: "High heels" },
];

const typesDesigners: CategoryType[] = [
	{ id: 1, name: "T-shirts" },
	{ id: 2, name: "Jeans" },
	{ id: 3, name: "Dresses" },
	{ id: 4, name: "Shirts and Blouses" },
	{ id: 5, name: "Tops" },
	{ id: 6, name: "Pants and Trousers" },
	{ id: 7, name: "Skirts" },
	{ id: 8, name: "Sweaters" },
	{ id: 9, name: "Coats" },
];

const stylesAccessories: Style[] = [
	{ id: 1, name: "Essentials" },
	{ id: 2, name: "Casual" },
	{ id: 3, name: "Formal" },
	{ id: 4, name: "Statement" },
	{ id: 5, name: "Vintage" },
];

const stylesBags: Style[] = [
	{ id: 1, name: "Essentials" },
	{ id: 2, name: "Casual" },
	{ id: 3, name: "Formal" },
	{ id: 4, name: "Trendy" },
	{ id: 5, name: "Vintage" },
];

const stylesClothing: Style[] = [
	{ id: 1, name: "Essentials" },
	{ id: 2, name: "Casual" },
	{ id: 3, name: "Formal" },
	{ id: 4, name: "Event Dressing" },
	{ id: 5, name: "Wedding Guest" },
	{ id: 6, name: "Streetstyle" },
];

const stylesShoes: Style[] = [
	{ id: 1, name: "Essentials" },
	{ id: 2, name: "Casual" },
	{ id: 3, name: "Formal" },
	{ id: 4, name: "Trendy" },
	{ id: 5, name: "Vintage" },
];

const stylesDesigners: Style[] = [
	{ id: 1, name: "Essentials" },
	{ id: 2, name: "Casual" },
	{ id: 3, name: "Formal" },
	{ id: 4, name: "Event Dressing" },
	{ id: 5, name: "Wedding Guest" },
	{ id: 6, name: "Streetstyle" },
];

const categories: Category[] = [
	{
		id: 1,
		name: "Accessories",
		styles: stylesAccessories,
		types: typesAccessories,
	},
	{
		id: 2,
		name: "Bags",
		styles: stylesBags,
		types: typesBags,
	},
	{
		id: 3,
		name: "Clothing",
		styles: stylesClothing,
		types: typesClothing,
	},
	{
		id: 4,
		name: "Shoes",
		styles: stylesShoes,
		types: typesShoes,
	},
	{
		id: 5,
		name: "Designers",
		styles: stylesDesigners,
		types: typesDesigners,
	},
];

export type { Category, CategoryType, Style };

export { categories };
