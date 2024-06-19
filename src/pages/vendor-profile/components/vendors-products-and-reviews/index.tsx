import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";

import { Product } from "~/libs/types/products.ts";
import { Review } from "~/libs/types/vendor.ts";

import {
	ProductsSection,
	ReviewsSection,
	VendorsButtonsGroup,
} from "../index.ts";
import { StyledVendorProductsAndReviews } from "./styles.ts";

type VendorsProductsAndReviewsProperties = {
	products: Product[];
	reviews: Review[];
	vendorName: string;
};

const VendorsProductsAndReviews: React.FC<
	VendorsProductsAndReviewsProperties
> = ({ products, reviews, vendorName }) => {
	const [isProductShown, setIsProductShown] = useState(true);

	const handleProductsClick = useCallback(() => {
		setIsProductShown(true);
	}, []);

	const handleReviewsClick = useCallback(() => {
		setIsProductShown(false);
	}, []);

	return (
		<StyledVendorProductsAndReviews>
			<VendorsButtonsGroup
				isProductShown={isProductShown}
				onProductsClick={handleProductsClick}
				onReviewsClick={handleReviewsClick}
				reviewsNumber={reviews.length}
			/>
			<Box>
				{isProductShown && (
					<ProductsSection products={products} vendorName={vendorName} />
				)}
				{!isProductShown && <ReviewsSection reviews={reviews} />}
			</Box>
		</StyledVendorProductsAndReviews>
	);
};

export { VendorsProductsAndReviews };
