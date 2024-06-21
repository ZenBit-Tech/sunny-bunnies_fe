import { Box, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { fontSizes, fontWeights } from "~/libs/constants/font.ts";
import { type Product } from "~/libs/types/products.ts";

import { StyledProductCardContent } from "./styles.ts";

const zeroIndex = 0;

type ProductCardProperties = {
	product: Product;
};

const ProductCard: React.FC<ProductCardProperties> = ({ product }) => {
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		navigate(`/product/${product.id}`);
	}, [navigate, product]);

	return (
		<Box
			onClick={handleClick}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "12px",
				height: "360px",
				maxWidth: "300px",
				width: "300px",
			}}
		>
			<img
				alt={product.name}
				src={product.images[zeroIndex]?.url}
				style={{ height: "80%", width: "100%" }}
			/>
			<StyledProductCardContent>
				<Typography color="primary" variant="playfairDisplayBold">
					{product.name}
				</Typography>
				<Box sx={{ alignItem: "center", display: "flex", gap: "5px" }}>
					<Typography color="primary" component="span" variant="dmSansBold">
						{product.minPrice}
					</Typography>
					<Typography
						color="secondary"
						component="span"
						fontSize={fontSizes.small}
						fontWeight={fontWeights.regular}
						sx={{ textDecoration: "line-through" }}
						variant="dmSansBold"
					>
						{product.maxPrice}
					</Typography>
				</Box>
			</StyledProductCardContent>
		</Box>
	);
};

export { ProductCard };
