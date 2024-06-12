import { httpMethods } from "~/libs/constants/http-methods.ts";
import { type Product } from "~/libs/types/products.ts";

import { api } from "../services.ts";
import {
	productsApiPath,
	productsLoadLimit,
	productsLoadOffset,
} from "./constants.ts";

type GetProductsRequestQuery = {
	category?: string;
	dateRange?: number;
	limit?: number;
	offset?: number;
	name?: string;
	gender?: string;
	minPrice?: number;
	maxPrice?: number;
	size?: string;
	color?: string;
	style?: string;
	brand?: string;
	material?: string;
};

export const productsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query<Product[], GetProductsRequestQuery>({
			forceRefetch({ currentArg, previousArg }) {
				return (
					currentArg?.category !== previousArg?.category ||
					currentArg?.limit !== previousArg?.limit ||
					currentArg?.offset !== previousArg?.offset ||
					currentArg?.dateRange !== previousArg?.dateRange ||
					currentArg?.name !== previousArg?.name ||
					currentArg?.gender !== previousArg?.gender ||
					currentArg?.minPrice !== previousArg?.minPrice ||
					currentArg?.maxPrice !== previousArg?.maxPrice ||
					currentArg?.size !== previousArg?.size ||
					currentArg?.color !== previousArg?.color ||
					currentArg?.style !== previousArg?.style ||
					currentArg?.brand !== previousArg?.brand ||
					currentArg?.material !== previousArg?.material
				);
			},
			merge: (currentCache, newItems, { arg }) => {
				if (arg.category || arg.offset === productsLoadOffset) {
					return newItems;
				}

				return [...currentCache, ...newItems];
			},
			query: (filters = {}) => {
				const defaultFilters = {
					limit: productsLoadLimit,
					offset: productsLoadOffset,
				};
				const finalFilters = { ...defaultFilters, ...filters };

				return {
					method: httpMethods.GET,
					params: finalFilters,
					url: productsApiPath.ROOT,
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
