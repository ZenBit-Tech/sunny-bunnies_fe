import { httpMethods } from "~/libs/constants/http-methods.ts";
import { type Product, Products } from "~/libs/types/products.ts";

import { api } from "../services.ts";
import {
	productsApiPath,
	productsLoadLimit,
	productsLoadOffset,
} from "./constants.ts";

type GetProductsRequestQuery = {
	activityStatuses?: string[];
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
	order?: string;
	page?: number;
	searchQuery?: string;
	size?: string;
	style?: string;
};

export const productsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getProductById: builder.query<Product, string | undefined>({
			query: (id) => ({
				method: httpMethods.GET,
				url: productsApiPath.ROOT + `/${id}`,
			}),
		}),
		getProducts: builder.query<Products, GetProductsRequestQuery>({
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

				return {
					...currentCache,
					products: [...currentCache.products, ...newItems.products],
					totalCount: newItems.totalCount,
					totalPages: newItems.totalPages,
				};
			},
			query: (filters = {}) => {
				const defaultFilters = {
					limit: productsLoadLimit,
					offset: productsLoadOffset,
				};
				const finalFilters = { ...defaultFilters, ...filters };

				const queryParams = new URLSearchParams();
				Object.keys(finalFilters).forEach((key) => {
					const value = finalFilters[key as keyof GetProductsRequestQuery];
					if (Array.isArray(value)) {
						value.forEach((item) => queryParams.append(key, item));
					} else if (value !== undefined) {
						queryParams.append(key, value.toString());
					}
				});

				return {
					method: httpMethods.GET,
					url: `${productsApiPath.ROOT}?${queryParams.toString()}`,
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
		}),
		getProductsByName: builder.query<Products, { name: string }>({
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

export const {
	useGetProductByIdQuery,
	useGetProductsByNameQuery,
	useGetProductsQuery,
} = productsApi;
