const sortOrder = ["XS", "S", "M", "L", "XL"];

function sortSizesByAscOrder<T extends number | string>(items: T[]): T[] {
	return items.slice().sort((a, b) => {
		return sortOrder.indexOf(a.toString()) - sortOrder.indexOf(b.toString());
	});
}

export { sortSizesByAscOrder };
