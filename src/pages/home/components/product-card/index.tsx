import { Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { type Product } from "~/libs/types/products.ts";
import theme from "~/theme.ts";

import {
	StyledProductCardContainer,
	StyledProductCardContent,
	StyledProductCardImage,
} from "./styles.ts";

const defaultImageIndex = 0;

type ProductCardProperties = {
	product: Product;
};

const ProductCard: React.FC<ProductCardProperties> = ({ product }) => {
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		navigate(`/product/${product.id}`);
	}, [navigate, product]);

	return (
		<StyledProductCardContainer onClick={handleClick}>
			<StyledProductCardImage
				alt={product.images[defaultImageIndex].description}
				src={product.images[defaultImageIndex].url}
			/>
			<StyledProductCardContent>
				<Typography
					color={theme.palette.primary.main}
					fontWeight={theme.fontWeight.medium}
					variant="playfairDisplayBold"
				>
					{product.name}
				</Typography>
				<Typography color={theme.palette.primary.main} variant="dmSansBold">
					{`$ ${product.minPrice}`}
				</Typography>
				<Typography fontSize={theme.fontSizes.small} variant="dmSans">
					{product.user.name}
				</Typography>
			</StyledProductCardContent>
		</StyledProductCardContainer>
	);
};

export { ProductCard };
