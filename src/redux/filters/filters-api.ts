import { httpMethods } from "~/libs/constants/index.ts";

import { api } from "../services.ts";
import { filtersApiPath } from "./constants.ts";

export const filtersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getFilters: builder.query({
			query: () => ({
				method: httpMethods.GET,
				url: filtersApiPath.ROOT,
			}),
		}),
	}),
});

export const { useGetFiltersQuery } = filtersApi;
