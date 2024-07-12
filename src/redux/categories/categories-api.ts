import { httpMethods } from "~/libs/constants/http-methods.ts";
import { Category } from "~/libs/types/categories.ts";

import { api } from "../services.ts";
import { categoriesApiPath } from "./constants.ts";

export const categoriesApi = api.injectEndpoints({
	endpoints: (build) => ({
		getCategories: build.query<Category[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: categoriesApiPath.CATEGORIES,
			}),
		}),
	}),
});

export const { useGetCategoriesQuery } = categoriesApi;
