import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";

import { Product } from "~/libs/types/products.ts";
import { Review } from "~/libs/types/vendor.ts";

import { ProductsSection } from "../products-section/index.tsx";
import { VendorsButtonsGroup } from "../vendor-buttons-group/index.tsx";
import { StyledVendorProductsAndReviews } from "./styles.ts";

type VendorsProductsAndReviewsProperties = {
	products: Product[];
	reviews?: Review[];
	vendorName: string;
};

const VendorsProductsAndReviews: React.FC<
	VendorsProductsAndReviewsProperties
> = ({ products, vendorName }) => {
	const [isProductShown, setIsProductShown] = useState(true);

	const handleButtonsClick = useCallback(() => {
		setIsProductShown(!isProductShown);
	}, [isProductShown]);

	return (
		<StyledVendorProductsAndReviews>
			<VendorsButtonsGroup onClick={handleButtonsClick} reviewsNumber={10} />
			<Box>
				<ProductsSection products={products} vendorName={vendorName} />
			</Box>
		</StyledVendorProductsAndReviews>
	);
};

export { VendorsProductsAndReviews };
