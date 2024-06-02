import { httpMethods } from "~/libs/constants/http-methods.ts";
import { type Product } from "~/libs/types/products.ts";

import { api } from "../services/index.ts";
import { productsApiPath } from "./constants.ts";

type GetProductsRequestQuery = {
	filter?: string;
};

export const productsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<Product[], GetProductsRequestQuery>({
			query: ({ filter }) => ({
				method: httpMethods.GET,
				params: { filter },
				url: productsApiPath.ROOT,
			}),
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
