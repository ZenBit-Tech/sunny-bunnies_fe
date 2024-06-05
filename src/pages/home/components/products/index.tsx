import { Box, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { FilterButton } from "~/components/index.ts";
import { Product } from "~/libs/types/products.ts";

import { ProductCard } from "../index.ts";
import { StyledProductsContainer } from "./styles.ts";

const minNumberOfProducts = 1;

type ProductsProperties = {
	products: Product[] | undefined;
};

const Products: React.FC<ProductsProperties> = ({ products }) => {
	const { t } = useTranslation();
	const filters = [
		`${t("HomePage.recommended")}`,
		`${t("HomePage.justIn")}`,
		`${t("HomePage.yourSize")}`,
	];
	const [selectedFilter, setSelectedFilter] = useState("Recommended");

	const handleFilterClick = useCallback((filter: string): void => {
		setSelectedFilter(filter);
	}, []);

	return (
		<Box sx={{ padding: "52px", width: "100%" }}>
			<Box sx={{ display: "flex", gap: "15px", height: "40px" }}>
				{filters.map((filter) => (
					<FilterButton
						filter={filter}
						key={filter}
						onClick={handleFilterClick}
						selected={selectedFilter === filter}
					/>
				))}
			</Box>
			<StyledProductsContainer>
				{products?.map((product) => (
					<ProductCard key={product.id} product={product} />
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
