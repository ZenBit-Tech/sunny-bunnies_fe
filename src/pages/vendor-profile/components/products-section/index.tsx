import React from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";

import { fontSizes } from "~/libs/constants/fonts.ts";
import { Product } from "~/libs/types/products.ts";

import { ProductCard } from "../index.ts";
import { StyledProductsContent, StyledProductsSection } from "./styles.ts";

type ProductsSectionProperties = {
	products: Product[];
	vendorName: string;
};

const ProductsSection: React.FC<ProductsSectionProperties> = ({
	products,
	vendorName,
}) => {
	const { t } = useTranslation();

	return (
		<StyledProductsSection>
			<Typography
				sx={{ fontSize: fontSizes.large }}
				variant="playfairDisplayTitle"
			>
				{t("VendorProfilePage.vendorsCloset")}
			</Typography>
			<StyledProductsContent>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						vendorName={vendorName}
					/>
				))}
			</StyledProductsContent>
		</StyledProductsSection>
	);
};

export { ProductsSection };
