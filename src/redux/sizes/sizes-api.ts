import { httpMethods } from "~/libs/constants/http-methods.ts";
import { Size } from "~/libs/types/categories.ts";

import { api } from "../services.ts";
import { sizesApiPath } from "./constants.ts";
import { sizeCategoryConverter } from "./size-category-converter.ts";

type UseFetchSizesReturnType = {
	isLoading: boolean;
	sizes: Size[] | undefined;
};

const sizesApi = api.injectEndpoints({
	endpoints: (build) => ({
		getSizes: build.query<Size[], string | undefined>({
			query: (category) => ({
				method: httpMethods.GET,
				url: category
					? `${sizesApiPath.SIZES}/${sizeCategoryConverter(category)}`
					: sizesApiPath.SIZES,
			}),
		}),
	}),
});

const { useGetSizesQuery } = sizesApi;

const useFetchSizes = (category?: string): UseFetchSizesReturnType => {
	const { data, isLoading } = useGetSizesQuery(category, {
		skip: !category,
	});

	return { isLoading, sizes: data };
};

export { sizesApi, useFetchSizes };
