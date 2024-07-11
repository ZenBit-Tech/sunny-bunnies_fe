import React, { useCallback, useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { t } from "i18next";

import { CustomError, CustomPagination, Loader } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { pagination } from "~/libs/constants/pagination.ts";
import { usePagination } from "~/libs/hooks/index.ts";
import {
	useDeleteProductMutation,
	useGetProductsByOptionsQuery,
} from "~/redux/admin/admin-api.ts";
import theme from "~/theme.ts";

import { useIsRouteActive } from "../../hooks/use-is-route-active.ts";
import { ProductsTable } from "../products-table/index.tsx";
import {
	BoldDivider,
	StyledContainer,
	StyledSortButton,
	StyledWrapperContainer,
	StyledWrapperHeader,
} from "../styles.ts";
import {
	StyledHeaderTypography,
	StyledLink,
	StyledPaper,
	StyledSearchBox,
} from "./styles.ts";

const initialPage = 1;
const productsPerPage = 5;

const ProductManagement: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [serverError, setServerError] = useState("");
	const [order, setOrder] = useState<"ASC" | "DESC">("DESC");
	const { handlePageChange, limit, page, totalPages, updateTotalPages } =
		usePagination(initialPage, productsPerPage);

	const isRequestsPage = useIsRouteActive(
		AppRoute.MANAGEMENT_PRODUCTS_REQUESTS,
	);

	const { data, isError, isLoading, refetch } = useGetProductsByOptionsQuery({
		activityStatuses: isRequestsPage ? ["inactive"] : ["active", "rejected"],
		limit,
		order,
		page,
		searchQuery,
	});

	const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

	const {
		products: fetchedProducts,
		totalCount,
		totalPages: fetchedTotalPages,
	} = data || { products: [], totalCount: 0, totalPages: 0 };

	useEffect(() => {
		refetch();
	}, [searchQuery, refetch]);

	useEffect(() => {
		updateTotalPages(fetchedTotalPages || pagination.DEFAULT_PAGE);
	}, [fetchedTotalPages, updateTotalPages]);

	const handleSearch = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSearchQuery(event.target.value);
		},
		[],
	);

	const handleChangeSort = useCallback(() => {
		setOrder((prevOrder) => (prevOrder === "ASC" ? "DESC" : "ASC"));
		refetch();
	}, [refetch]);

	const getOrderDisplayText = (order: "ASC" | "DESC"): string => {
		return order === "DESC"
			? t("AdminProductManagement.newest")
			: t("AdminProductManagement.oldest");
	};

	const handleConfirmDelete = useCallback(
		async (productId: string) => {
			try {
				await deleteProduct(productId).unwrap();
				refetch();
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknownError") };
				setServerError(loadError.message);
			}
		},
		[deleteProduct, refetch],
	);

	return (
		<StyledContainer>
			<Typography
				sx={{
					fontFamily: theme.typography.playfairDisplayBold,
					fontSize: theme.fontSizes.large,
					mb: 2,
				}}
			>
				{t("AdminPage.products")}
			</Typography>
			<StyledWrapperContainer>
				<StyledWrapperHeader>
					<Box sx={{ alignItems: "center", display: "flex" }}>
						<BoldDivider />
						<StyledHeaderTypography>
							{t("AdminPage.productList")}
						</StyledHeaderTypography>
					</Box>
					<Box sx={{ display: "flex", gap: "10px" }}>
						<StyledSortButton onClick={handleChangeSort}>
							<SortIcon />
							{getOrderDisplayText(order)}
						</StyledSortButton>
					</Box>
				</StyledWrapperHeader>
				<Box sx={{ display: "flex", gap: "32px", mt: 2 }}>
					<StyledLink
						className={
							useIsRouteActive(AppRoute.MANAGEMENT_PRODUCTS_REQUESTS)
								? "active"
								: ""
						}
						to={AppRoute.MANAGEMENT_PRODUCTS_REQUESTS}
					>
						{t("AdminPage.requests")} {isRequestsPage && `(${totalCount})`}
					</StyledLink>
					<StyledLink
						className={
							useIsRouteActive(AppRoute.MANAGEMENT_PRODUCTS_LIST)
								? "active"
								: ""
						}
						to={AppRoute.MANAGEMENT_PRODUCTS_LIST}
					>
						{t("AdminPage.productList")} {!isRequestsPage && `(${totalCount})`}
					</StyledLink>
				</Box>
				<StyledSearchBox>
					<StyledPaper component="form">
						<IconButton aria-label="search" sx={{ p: "10px" }} type="submit">
							<SearchIcon />
						</IconButton>
						<InputBase
							onChange={handleSearch}
							placeholder={t("AdminProductManagement.search")}
							sx={{ width: "100%" }}
							value={searchQuery}
						/>
					</StyledPaper>
				</StyledSearchBox>
				<ProductsTable
					isDeleting={isDeleting}
					isRequestsPage={isRequestsPage}
					onDelete={handleConfirmDelete}
					products={fetchedProducts}
				/>
				{isLoading && <Loader />}
				{isError && (
					<CustomError
						errorMessage={t("AdminProductManagement.errorLoadingProducts")}
					/>
				)}
				{serverError && (
					<Typography
						color="error"
						sx={{ marginBottom: "8px" }}
						variant="body2"
					>
						{serverError}
					</Typography>
				)}
				<CustomPagination
					count={totalPages}
					onChange={handlePageChange}
					page={page}
				/>
			</StyledWrapperContainer>
		</StyledContainer>
	);
};

export { ProductManagement };
