import { useCallback, useState } from "react";

import { type Product } from "~/libs/types/products.ts";
import {
	productsLoadLimit,
	productsLoadOffset,
} from "~/redux/products/constants.ts";
import { useGetProductsQuery } from "~/redux/products/products-api.ts";

const allCategories = "All";

type UseProductFiltersResult = {
	additionalFilters: Record<string, number | undefined>;
	data: Product[] | undefined;
	filterCategory: string | undefined;
	handleChooseCategory: (category: string) => void;
	handleFilterChange: (newFilters: Record<string, number | undefined>) => void;
	handleLoadMore: () => void;
	hasMore: boolean;
	isError: boolean;
	isFetching: boolean;
	isLoading: boolean;
	offset: number;
	hasAdditionalFilters: boolean;
};

const useProductFilters = (): UseProductFiltersResult => {
	const [filterCategory, setFilterCategory] = useState<string | undefined>(
		undefined,
	);
	const [additionalFilters, setAdditionalFilters] = useState<
		Record<string, number | undefined>
	>({});
	const [offset, setOffset] = useState(productsLoadOffset);

	const { data, isError, isFetching, isLoading } = useGetProductsQuery({
		category: filterCategory,
		limit: productsLoadLimit,
		offset,
		...additionalFilters,
	});

	const handleChooseCategory = useCallback((category: string) => {
		setFilterCategory(category === allCategories ? undefined : category);
		setOffset(productsLoadOffset);
		setAdditionalFilters({});
	}, []);

	const handleFilterChange = useCallback(
		(newFilters: Record<string, number | undefined>) => {
			setOffset(productsLoadOffset);
			setAdditionalFilters(newFilters);
		},
		[],
	);

	const handleLoadMore = useCallback(() => {
		if (!isFetching) {
			setOffset((prevOffset) => prevOffset + productsLoadLimit);
		}
	}, [isFetching]);

	const hasMore = !isLoading && data?.length === productsLoadLimit;

	const hasAdditionalFilters = Object.keys(additionalFilters).some(
		(key) => additionalFilters[key] !== undefined,
	);

	return {
		hasAdditionalFilters,
		additionalFilters,
		data,
		filterCategory,
		handleChooseCategory,
		handleFilterChange,
		handleLoadMore,
		hasMore,
		isError,
		isFetching,
		isLoading,
		offset,
	};
};

export { useProductFilters };
