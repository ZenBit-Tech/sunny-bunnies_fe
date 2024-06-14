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
};

export const productsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getProductById: builder.query<Product, string | undefined>({
			query: (id) => ({
				method: httpMethods.GET,
				url: productsApiPath.ROOT + `/${id}`,
			}),
		}),
		getProducts: builder.query<Product[], GetProductsRequestQuery>({
			forceRefetch({ currentArg, previousArg }) {
				return (
					currentArg?.category !== previousArg?.category ||
					currentArg?.limit !== previousArg?.limit ||
					currentArg?.offset !== previousArg?.offset ||
					currentArg?.dateRange !== previousArg?.dateRange
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

export const { useGetProductByIdQuery, useGetProductsQuery } = productsApi;
