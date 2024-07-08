import React, { useCallback, useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { t } from "i18next";

import { CustomError, CustomPagination, Loader } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { pagination } from "~/libs/constants/pagination.ts";
import { usePagination } from "~/libs/hooks/index.ts";
import { useGetProductsQuery } from "~/redux/products/products-api.ts";
import theme from "~/theme.ts";

import { useIsRouteActive } from "../../hooks/use-is-route-active.ts";
import { ProductsTable } from "../products-table/index.tsx";
import {
	BoldDivider,
	StyledContainer,
	StyledWrapperContainer,
	StyledWrapperHeader,
} from "../styles.ts";
import {
	StyledHeaderTypography,
	StyledLink,
	StyledPaper,
	StyledSearchBox,
	StyledSortButton,
} from "./styles.ts";

const ProductManagement: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [order, setOrder] = useState<"ASC" | "DESC">("ASC");
	const { handlePageChange, limit, page, totalPages, updateTotalPages } =
		usePagination();

	const { data, isError, isLoading, refetch } = useGetProductsQuery({
		activityStatuses: ["inactive"],
		limit,
		order,
		page,
		searchQuery,
	});

	const {
		products: fetchedProducts,
		totalCount,
		totalPages: fetchedTotalPages,
	} = data || { products: [], totalCount: 0, totalPages: 0 };

	useEffect(() => {
		updateTotalPages(fetchedTotalPages || pagination.DEFAULT_PAGE);
	}, [fetchedTotalPages, updateTotalPages]);

	useEffect(() => {
		refetch();
	}, [searchQuery, refetch]);

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
							{order}
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
						{t("AdminPage.requests")} {`(${totalCount})`}
					</StyledLink>
					<StyledLink
						className={
							useIsRouteActive(AppRoute.MANAGEMENT_PRODUCTS_LIST)
								? "active"
								: ""
						}
						to={AppRoute.MANAGEMENT_PRODUCTS_LIST}
					>
						{t("AdminPage.productList")}
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
				<ProductsTable products={fetchedProducts} />
				{isLoading && <Loader />}
				{isError && (
					<CustomError
						errorMessage={t("AdminProductManagement.errorLoadingProducts")}
					/>
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
