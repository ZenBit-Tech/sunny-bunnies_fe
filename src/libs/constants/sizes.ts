/* eslint-disable perfectionist/sort-objects */
const clothesSizes = [
	{
		FR: "28",
		UK: "2",
		US: "0",
		KR: "4XS",
		IT: "32",
		International: "4XS",
		"0-5": "00000",
	},
	{
		FR: "30",
		UK: "3",
		US: "0",
		KR: "3XS",
		IT: "34",
		International: "3XS",
		"0-5": "0000",
	},
	{
		FR: "32",
		UK: "4",
		US: "1",
		KR: "XXS",
		IT: "36",
		International: "XXS",
		"0-5": "000",
	},
	{
		FR: "34",
		UK: "6",
		US: "2",
		KR: "XS",
		IT: "38",
		International: "XS",
		"0-5": "00",
	},
	{
		FR: "36",
		UK: "8",
		US: "4",
		KR: "S",
		IT: "40",
		International: "S",
		"0-5": "0",
	},
	{
		FR: "38",
		UK: "10",
		US: "6",
		KR: "M",
		IT: "42",
		International: "M",
		"0-5": "1",
	},
	{
		FR: "40",
		UK: "12",
		US: "8",
		KR: "L",
		IT: "44",
		International: "L",
		"0-5": "2",
	},
	{
		FR: "42",
		UK: "14",
		US: "10",
		KR: "XL",
		IT: "46",
		International: "XL",
		"0-5": "3",
	},
	{
		FR: "44",
		UK: "16",
		US: "12",
		KR: "XXL",
		IT: "48",
		International: "XXL",
		"0-5": "4",
	},
	{
		FR: "46",
		UK: "18",
		US: "14",
		KR: "XXXL",
		IT: "50",
		International: "XXXL",
		"0-5": "5",
	},
];

const shoeSizes = [
	{ EU: "34", UK: "1", US: "3", KR: "200", IT: "33" },
	{ EU: "34.5", UK: "1.5", US: "3.5", KR: "205", IT: "33.5" },
	{ EU: "35", UK: "2", US: "4", KR: "210", IT: "34" },
	{ EU: "35.5", UK: "2.5", US: "4.5", KR: "215", IT: "" },
	{ EU: "36.5", UK: "3", US: "5", KR: "220", IT: "35" },
	{ EU: "37", UK: "3.5", US: "5.5", KR: "225", IT: "35.5" },
	{ EU: "37.5", UK: "4", US: "6", KR: "230", IT: "36" },
	{ EU: "38", UK: "4.5", US: "6.5", KR: "235", IT: "36.5" },
	{ EU: "38.5", UK: "5", US: "7", KR: "240", IT: "37" },
	{ EU: "39", UK: "5.5", US: "7.5", KR: "245", IT: "37.5" },
	{ EU: "39.5", UK: "6", US: "8", KR: "250", IT: "38" },
	{ EU: "40", UK: "6.5", US: "8.5", KR: "255", IT: "38.5" },
	{ EU: "40.5", UK: "7", US: "9", KR: "260", IT: "39" },
	{ EU: "41", UK: "7.5", US: "9.5", KR: "265", IT: "39.5" },
	{ EU: "41.5", UK: "8", US: "10", KR: "270", IT: "40" },
	{ EU: "42", UK: "8.5", US: "10.5", KR: "275", IT: "40.5" },
	{ EU: "42.5", UK: "9", US: "11", KR: "280", IT: "41" },
	{ EU: "43", UK: "9.5", US: "11.5", KR: "285", IT: "41.5" },
];

const trouserSizes = [
	{ International: "XS", "UK-US": "28", IT: "44", KR: "XS", FR: "36" },
	{ International: "S", "UK-US": "30", IT: "46", KR: "S", FR: "38" },
	{ International: "M", "UK-US": "32", IT: "48", KR: "M", FR: "40" },
	{ International: "L", "UK-US": "34", IT: "50", KR: "L", FR: "42" },
	{ International: "XL", "UK-US": "36", IT: "52", KR: "XL", FR: "44" },
	{ International: "XXL", "UK-US": "38", IT: "54", KR: "XXL", FR: "46" },
	{ International: "XXXL", "UK-US": "40", IT: "56", KR: "XXXL", FR: "48" },
];

export { clothesSizes, shoeSizes, trouserSizes };