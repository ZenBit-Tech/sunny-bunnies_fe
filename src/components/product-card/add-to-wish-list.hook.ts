import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
	NotificationMessage,
	notification,
} from "~/libs/notification/index.ts";
import { Product } from "~/libs/types/products.ts";
import { useAddProductMutation } from "~/redux/wishlist/wishlist-api.ts";
import { addProductToWishlist } from "~/redux/wishlist/wishlist-slice.ts";

type UseAddToWishlistReturnType = {
	handleAddToWishlist: (item: Product) => Promise<void>;
};

const useAddToWishlist = (): UseAddToWishlistReturnType => {
	const [addProduct] = useAddProductMutation();
	const dispatch = useDispatch();

	const handleAddToWishlist = useCallback(
		async (item: Product) => {
			try {
				await addProduct({ productId: item.id }).unwrap();
				dispatch(addProductToWishlist(item));
				notification.success(NotificationMessage.WISH_LIST_UPDATED);
			} catch (error) {
				notification.error(NotificationMessage.WIST_LIST_UPDATE_ERROR);
			}
		},
		[addProduct, dispatch],
	);

	return { handleAddToWishlist };
};

export { useAddToWishlist };
