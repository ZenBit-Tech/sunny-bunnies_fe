import { httpMethods } from "~/libs/constants/http-methods.ts";
import { Color } from "~/libs/types/categories.ts";

import { api } from "../services.ts";
import { colorsApiPath } from "./constants.ts";

export const colorsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getColors: build.query<Color[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: colorsApiPath.COLORS,
			}),
		}),
	}),
});

export const { useGetColorsQuery } = colorsApi;
