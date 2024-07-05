import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { t } from "i18next";

import { CustomPagination } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { usePagination } from "~/libs/hooks/index.ts";
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
	const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");
	const { handlePageChange, limit, page, totalPages, updateTotalPages } =
		usePagination();

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
						<StyledSortButton>
							<SortIcon />
							{sortOrder}
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
						Requests
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
						<InputBase placeholder={t("AdminProductManagement.search")} />
					</StyledPaper>
				</StyledSearchBox>
				<ProductsTable />
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
