import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { FilterButton } from "~/components/index.ts";
import { Product } from "~/libs/types/products.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";

import { ProductCard } from "../index.ts";
import { StyledProductsContainer } from "./styles.ts";

const minNumberOfProducts = 1;
const dateRangeForJustIn = 7;
const defaultFilter = 0;

const filtersForUnregisteredUsers = [
	{ value: "Recommended" },
	{ value: "Just In" },
];

const allFilters = [
	{ value: "Recommended" },
	{ value: "Just In" },
	{ value: "Your Size" },
];

type ProductsProperties = {
	handleFilterChange: (newFilters: Record<string, number | undefined>) => void;
	products?: Product[];
};

const Products: React.FC<ProductsProperties> = ({
	handleFilterChange,
	products,
}) => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { t } = useTranslation();

	const filtersToShow = user ? allFilters : filtersForUnregisteredUsers;

	const [selectedFilter, setSelectedFilter] = useState(
		allFilters[defaultFilter].value,
	);

	const handleFilterClick = useCallback(
		(filter: string): void => {
			setSelectedFilter(filter);
			const newFilters: Record<string, number | undefined> = {};

			if (filter === `${t("HomePage.justIn")}`) {
				newFilters.dateRange = dateRangeForJustIn;
			} else {
				newFilters.dateRange = undefined;
			}

			handleFilterChange(newFilters);
		},
		[handleFilterChange, t],
	);

	return (
		<Box sx={{ padding: "52px", width: "100%" }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "15px",
					height: "40px",
				}}
			>
				<Box sx={{ display: "flex", gap: "15px" }}>
					{filtersToShow.map((filter) => (
						<FilterButton
							filter={filter.value}
							key={filter.value}
							onClick={handleFilterClick}
							selected={selectedFilter === filter.value}
						/>
					))}
				</Box>
				<TextField
					variant="outlined"
					placeholder={t("Search products...")}
					sx={{ flexGrow: 1, margin: "0 15px" }}
				/>
				<Button variant="contained">{t("Filters")}</Button>
			</Box>
			<StyledProductsContainer>
				{products?.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
				{(!products || products.length < minNumberOfProducts) && (
					<Typography textAlign="center" variant="playfairDisplay" width="100%">
						{t("HomePage.productsWereNotFound")}
					</Typography>
				)}
			</StyledProductsContainer>
		</Box>
	);
};

export { Products };
