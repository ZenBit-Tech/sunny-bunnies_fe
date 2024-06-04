import { httpMethods } from "~/libs/constants/http-methods.ts";
import { type Product } from "~/libs/types/products.ts";

import { api } from "../services.ts";
import { productsApiPath } from "./constants.ts";

type GetProductsRequestQuery = {
	category?: string;
};

export const productsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<Product[], GetProductsRequestQuery>({
			query: (filters) => ({
				method: httpMethods.GET,
				params: { ...filters },
				url: productsApiPath.ROOT,
			}),
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
