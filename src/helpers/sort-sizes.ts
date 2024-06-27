const sortOrder = [
	"3.0",
	"3.5",
	"4.0",
	"4.5",
	"5.0",
	"5.5",
	"6.0",
	"6.5",
	"7.0",
	"7.5",
	"8.0",
	"8.5",
	"9.0",
	"9.5",
	"10.0",
	"10.5",
	"11.0",
	"11.5",
	"4XS",
	"3XS",
	"XXS",
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL",
	"XXXL",
];

function sortByAscOrder<T extends number | string>(items: T[]): T[] {
	return items.slice().sort((a, b) => {
		return sortOrder.indexOf(a.toString()) - sortOrder.indexOf(b.toString());
	});
}

export { sortByAscOrder };
