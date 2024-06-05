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
	endpoints: (build) => ({
		getProducts: build.query<Product[], GetProductsRequestQuery>({
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
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
