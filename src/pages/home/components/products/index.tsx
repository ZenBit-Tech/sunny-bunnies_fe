import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Drawer, Typography } from "@mui/material";

import { BaseButton, FilterButton } from "~/components/index.ts";
import { Filters } from "~/libs/types/filters.ts";
import { Product } from "~/libs/types/products.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";

import {
	FilterTags,
	ProductCard,
	ProductFilters,
	ProductSearch,
} from "../index.ts";
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
	additionalFilters: Record<string, number | undefined>;
	handleFilterChange: (newFilters: Record<string, number | undefined>) => void;
	hasAdditionalFilters: boolean;
	products?: Product[];
};

const Products: React.FC<ProductsProperties> = ({
	additionalFilters,
	handleFilterChange,
	hasAdditionalFilters,
	products,
}) => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { t } = useTranslation();

	const filtersToShow = user ? allFilters : filtersForUnregisteredUsers;

	const [selectedFilter, setSelectedFilter] = useState(
		allFilters[defaultFilter].value,
	);
	const [drawerOpen, setDrawerOpen] = useState(false);

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

	const handleApplyFilters = useCallback(
		(filters: Filters): void => {
			const { maxPrice, minPrice, ...otherFilters } = filters;

			const updatedFilters = {
				...additionalFilters,
				...otherFilters,
				maxPrice: maxPrice ? +maxPrice : undefined,
				minPrice: minPrice ? +minPrice : undefined,
			};

			handleFilterChange(updatedFilters);
			setDrawerOpen(false);
		},
		[additionalFilters, handleFilterChange],
	);

	const handleClearFilters = useCallback(() => {
		const clearedFilters = {};
		handleFilterChange(clearedFilters);
	}, [handleFilterChange]);

	const handleClearFilter = useCallback(
		(filterKey: string) => {
			const updatedFilters = { ...additionalFilters };
			delete updatedFilters[filterKey];
			handleFilterChange(updatedFilters);
		},
		[additionalFilters, handleFilterChange],
	);

	const toggleDrawer = useCallback((): void => {
		setDrawerOpen((prev) => !prev);
	}, []);

	return (
		<Box sx={{ padding: "52px", width: "100%" }}>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					flexWrap: "wrap",
					gap: "15px",
					justifyContent: "space-between",
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

				<ProductSearch />
				<BaseButton onClick={toggleDrawer} variant="contained">
					{t("ProductFilters.filters")}
				</BaseButton>
			</Box>
			<Drawer
				anchor="right"
				onClose={toggleDrawer}
				open={drawerOpen}
				sx={{ "& .MuiDrawer-paper": { width: "400px" } }}
			>
				<ProductFilters
					initialFilters={additionalFilters}
					onApply={handleApplyFilters}
					onClear={handleClearFilters}
				/>
			</Drawer>
			{hasAdditionalFilters && (
				<FilterTags
					filters={additionalFilters}
					onClearAll={handleClearFilters}
					onClearFilter={handleClearFilter}
				/>
			)}
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
