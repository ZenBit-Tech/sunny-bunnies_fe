import { useEffect } from "react";

import { Product } from "~/libs/types/products.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { useGetEntireWishlistQuery } from "~/redux/wishlist/wishlist-api.ts";
import { setFullWishlist } from "~/redux/wishlist/wishlist-slice.ts";

type UseWishlistReturn = {
	isWishlistError: boolean;
	isWishlistLoading: boolean;
	wishlistProducts: Product[];
};

export const useWishlist = (): UseWishlistReturn => {
	const dispatch = useAppDispatch();
	const { data, isError, isLoading } = useGetEntireWishlistQuery();
	const fullWishlist = useAppSelector((state) => state.wishlist.fullWishlist);

	useEffect(() => {
		if (!isLoading && !isError && data) {
			dispatch(setFullWishlist(data));
		}
	}, [data, isError, isLoading, dispatch]);

	return {
		isWishlistError: isError,
		isWishlistLoading: isLoading,
		wishlistProducts: fullWishlist,
	};
};
