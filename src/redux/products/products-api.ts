import { httpMethods } from "~/libs/constants/http-methods.ts";
import { type Product } from "~/libs/types/products.ts";

import { api } from "../services.ts";
import {
	productsApiPath,
	productsLoadLimit,
	productsLoadOffset,
} from "./constants.ts";

type GetProductsRequestQuery = {
	brand?: string;
	category?: string;
	color?: string;
	dateRange?: number;
	gender?: string;
	limit?: number;
	material?: string;
	maxPrice?: number;
	minPrice?: number;
	offset?: number;
	size?: string;
	style?: string;
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
		getProductsByName: builder.query<Product[], { name: string }>({
			forceRefetch({ currentArg, previousArg }) {
				return currentArg?.name !== previousArg?.name;
			},
			query: ({ name }) => ({
				method: httpMethods.GET,
				params: { name },
				url: productsApiPath.ROOT,
			}),
		}),
	}),
});

export const { useGetProductsByNameQuery, useGetProductsQuery } = productsApi;
