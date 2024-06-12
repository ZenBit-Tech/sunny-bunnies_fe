import { httpMethods } from "~/libs/constants";
import { api } from "../services";
import { filtersApiPath } from "./constants";

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
