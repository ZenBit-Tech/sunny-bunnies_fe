import { httpMethods } from "~/libs/constants/http-methods.ts";
import { ProductRequestDto, Products } from "~/libs/types/products.ts";
import { User, UsersRequestDto, UsersResponseDto } from "~/libs/types/user.ts";

import { api } from "../services.ts";
import { adminApiPath } from "./constants.ts";

export const adminApi = api.injectEndpoints({
	endpoints: (build) => ({
		deleteUser: build.mutation<void, string>({
			query: (id) => ({
				method: httpMethods.DELETE,
				url: `${adminApiPath.DELETE_USER}/${id}`,
			}),
		}),
		getProductsByOptions: build.query<Products, ProductRequestDto>({
			query: ({ activityStatuses, limit, order, page, searchQuery }) => {
				return {
					method: httpMethods.GET,
					params: {
						activityStatuses,
						limit,
						order,
						page,
						searchQuery: searchQuery || "",
					},
					url: adminApiPath.GET_PRODUCTS_BY_OPTIONS,
				};
			},
		}),
		getUserById: build.query<User, string | undefined>({
			query: (id: string) => ({
				method: httpMethods.GET,
				url: `${adminApiPath.GET_USER}/${id}`,
			}),
		}),
		getUsersByOptions: build.query<UsersResponseDto, UsersRequestDto>({
			query: ({ limit, order, page, role, searchQuery, sortField }) => ({
				method: httpMethods.GET,
				params: {
					limit,
					order,
					page,
					role,
					searchQuery: searchQuery || "",
					sortField,
				},
				url: adminApiPath.GET_BY_OPTIONS,
			}),
		}),
		updateUserStatus: build.mutation<void, { id: string; status: string }>({
			query: ({ id, status }) => ({
				body: { status },
				method: httpMethods.PATCH,
				url: `${adminApiPath.UPDATE_USER_STATUS}/${id}`,
			}),
		}),
	}),
});

export const {
	useDeleteUserMutation,
	useGetProductsByOptionsQuery,
	useGetUserByIdQuery,
	useGetUsersByOptionsQuery,
	useUpdateUserStatusMutation,
} = adminApi;
