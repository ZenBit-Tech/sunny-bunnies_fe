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
	limit?: number;
	offset?: number;
};

export const productsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query<Product[], GetProductsRequestQuery>({
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
			merge: (currentCache, newItems) => {
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
