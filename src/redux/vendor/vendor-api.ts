import { httpMethods } from "~/libs/constants/http-methods.ts";
import { ProductRequestDto, Products } from "~/libs/types/products.ts";

import { api } from "../services.ts";
import { vendorApiPath } from "./constants.ts";

export const vendorApi = api.injectEndpoints({
	endpoints: (build) => ({
		getVendorProductsByOptions: build.query<Products, ProductRequestDto>({
			query: ({
				activityStatuses,
				filter,
				limit,
				order,
				page,
				searchQuery,
			}) => {
				return {
					method: httpMethods.GET,
					params: {
						activityStatuses,
						filter,
						limit,
						order,
						page,
						searchQuery: searchQuery || "",
					},
					url: vendorApiPath.GET_PRODUCTS_BY_OPTIONS,
				};
			},
		}),
	}),
});

export const { useGetVendorProductsByOptionsQuery } = vendorApi;
