import React, { useEffect } from "react";

import { Box } from "@mui/material";
import { t } from "i18next";

import { CustomError, CustomPagination, Loader } from "~/components/index.ts";
import { ProductCard } from "~/components/product-card/index.tsx";
import { pagination } from "~/libs/constants/pagination.ts";
import { usePagination } from "~/libs/hooks/index.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";
import { useGetWishlistQuery } from "~/redux/wishlist/wishlist-api.ts";
import { setWishlist } from "~/redux/wishlist/wishlist-slice.ts";

import { StyledProductsContainer } from "./styles.ts";

const productLength = 0;

const ProfileWishlist: React.FC = () => {
	const dispatch = useAppDispatch();
	const wishlist = useAppSelector(
		(state: RootState) => state.wishlist.products,
	);

	const { handlePageChange, page, setPage, totalPages, updateTotalPages } =
		usePagination();

	const { data, error, isLoading, refetch } = useGetWishlistQuery({
		limit: pagination.WISH_LIST_LIMIT,
		page,
	});

	useEffect(() => {
		if (data) {
			dispatch(setWishlist({ products: data.products }));
			updateTotalPages(data.totalPages);
		}
	}, [data, dispatch, updateTotalPages]);

	useEffect(() => {
		if (wishlist.length === productLength && page > pagination.ONE_PAGE) {
			setPage(page - pagination.DEFAULT_PAGE);
		}
		refetch();
	}, [wishlist, refetch, page, setPage]);

	return (
		<Box sx={{ padding: "52px", width: "80%" }}>
			{isLoading ? (
				<Loader />
			) : error ? (
				<CustomError errorMessage={t("Profile.errorLoadingWishlist")} />
			) : (
				<>
					<StyledProductsContainer>
						{wishlist.map((product, index) => (
							<ProductCard item={product} key={index} />
						))}
					</StyledProductsContainer>
					<CustomPagination
						count={totalPages}
						onChange={handlePageChange}
						page={page}
					/>
				</>
			)}
		</Box>
	);
};

export { ProfileWishlist };
