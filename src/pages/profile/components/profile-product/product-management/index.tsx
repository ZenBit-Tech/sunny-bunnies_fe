import React, { useCallback, useEffect, useState } from "react";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import {
	Box,
	IconButton,
	InputAdornment,
	InputBase,
	MenuItem,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { t } from "i18next";

import { CustomError, CustomPagination, Loader } from "~/components/index.ts";
import { pagination } from "~/libs/constants/pagination.ts";
import { usePagination } from "~/libs/hooks/index.ts";
import { sortOrder } from "~/pages/admin-panel/constants/sort-order.ts";
import { StyledContainer } from "~/pages/profile/components/profile-form/styles.ts";
import { useGetVendorProductsByOptionsQuery } from "~/redux/vendor/vendor-api.ts";
import theme from "~/theme.ts";

import { ProductsTable } from "../products-table/index.tsx";
import {
	BoldDivider,
	StyledHeaderTypography,
	StyledPaper,
	StyledProductsCount,
	StyledSearchBox,
	StyledSortButton,
	StyledSortSelect,
	StyledWrapperContainer,
	StyledWrapperHeader,
} from "./styles.ts";

const allStatuses = ["inactive", "active", "rejected"];

const ProductManagement: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [order, setOrder] = useState<"ASC" | "DESC">("DESC");
	const [filter, setFilter] = useState<string>("name");

	const { handlePageChange, limit, page, totalPages, updateTotalPages } =
		usePagination(pagination.DEFAULT_PAGE, pagination.PRODUCT_LIMIT);

	const { data, isError, isLoading, refetch } =
		useGetVendorProductsByOptionsQuery({
			activityStatuses: allStatuses,
			filter,
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
		refetch();
	}, [searchQuery, filter, order, page, refetch]);

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
		setOrder((prevOrder) => (prevOrder === sortOrder.ASC ? "DESC" : "ASC"));
		refetch();
	}, [refetch]);

	const handleFilterChange = useCallback(
		(event: SelectChangeEvent<unknown>) => {
			setFilter(event.target.value as string);
			refetch();
		},
		[refetch],
	);

	const getOrderDisplayText = (order: "ASC" | "DESC"): string => {
		return order === sortOrder.DESC
			? t("VendorProfilePage.ascending")
			: t("VendorProfilePage.descending");
	};

	return (
		<StyledContainer>
			<Typography
				sx={{
					fontFamily: theme.typography.playfairDisplayBold,
					fontSize: theme.fontSizes.large,
				}}
			>
				{t("AdminPage.products")}
				<StyledProductsCount>{`: ${totalCount}`}</StyledProductsCount>
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
							<SortIcon
								sx={{
									transform:
										order === sortOrder.ASC ? "rotate(180deg)" : undefined,
								}}
							/>
							{getOrderDisplayText(order)}
						</StyledSortButton>
						<StyledSortSelect
							displayEmpty
							label="ФИЛЬТР"
							onChange={handleFilterChange}
							startAdornment={
								<InputAdornment position="start">
									<FilterAltIcon sx={{ cursor: "pointer", width: "40px" }} />
								</InputAdornment>
							}
							value={filter}
						>
							<MenuItem value="name">{t("VendorProfilePage.name")}</MenuItem>
							<MenuItem value="category">
								{t("VendorProfilePage.category")}
							</MenuItem>
							<MenuItem value="status">
								{t("VendorProfilePage.status")}
							</MenuItem>
							<MenuItem value="price">{t("VendorProfilePage.price")}</MenuItem>
						</StyledSortSelect>
					</Box>
				</StyledWrapperHeader>
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
