import { httpMethods } from "~/libs/constants/http-methods.ts";
import { Product } from "~/libs/types/products.ts";

import { api } from "../services.ts";
import { wistlistApiPath } from "./constants.ts";

export const wishlistApi = api.injectEndpoints({
	endpoints: (build) => ({
		addProduct: build.mutation<boolean, { productId: string }>({
			query: ({ productId }) => ({
				body: { productId },
				method: httpMethods.PATCH,
				url: `${wistlistApiPath.ADD}`,
			}),
		}),
		getEntireWishlist: build.query<Product[], void>({
			query: () => ({
				method: httpMethods.GET,
				url: `${wistlistApiPath.ENTIRE_WISHLIST}`,
			}),
		}),
		getWishlist: build.query<
			{ products: Product[]; totalCount: number; totalPages: number },
			{ limit: number; page: number }
		>({
			query: ({ limit, page }) => ({
				method: httpMethods.GET,
				params: { limit, page },
				url: `${wistlistApiPath.WISHLIST}`,
			}),
		}),
	}),
});

export const {
	useAddProductMutation,
	useGetEntireWishlistQuery,
	useGetWishlistQuery,
} = wishlistApi;
