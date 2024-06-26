import { httpMethods } from "~/libs/constants/http-methods.ts";
import { User } from "~/libs/types/user.ts";

import { api } from "../services.ts";
import { adminApiPath } from "./constants.ts";

export const adminApi = api.injectEndpoints({
	endpoints: (build) => ({
		getUsersByOptions: build.query<
			User[],
			{
				order: "ASC" | "DESC";
				role: string;
				searchQuery: string;
				sortField: string;
			}
		>({
			query: ({ order, role, searchQuery, sortField }) => ({
				method: httpMethods.GET,
				url: `${
					adminApiPath.GET_BY_OPTIONS
				}?order=${order}&sortField=${sortField}&role=${role}&searchQuery=${encodeURIComponent(
					searchQuery || "",
				)}`,
			}),
		}),
	}),
});

export const { useGetUsersByOptionsQuery } = adminApi;
