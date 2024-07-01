import { productSizesSortOrder } from "~/libs/constants/index.ts";

function sortSizesByAscOrder<T extends number | string>(items: T[]): T[] {
	return items.slice().sort((a, b) => {
		return (
			productSizesSortOrder.indexOf(a.toString()) -
			productSizesSortOrder.indexOf(b.toString())
		);
	});
}

export { sortSizesByAscOrder };
