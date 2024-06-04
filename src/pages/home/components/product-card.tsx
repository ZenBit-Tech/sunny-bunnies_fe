import { Box, Typography } from "@mui/material";
import React from "react";

import { fontSizes } from "~/libs/constants/font.ts";
import { type Product } from "~/libs/types/products.ts";

import { StyledProductCardContent } from "./styles.ts";

type ProductCardProperties = {
	product: Product;
};

const ProductCard: React.FC<ProductCardProperties> = ({ product }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "12px",
				maxWidth: "300px",
			}}
		>
			<img
				alt={product.name}
				height="322px"
				src={product.imageUrl}
				width="100%"
			/>
			<StyledProductCardContent>
				<Typography color="primary" variant="playfairDisplayBold">
					{product.name}
				</Typography>
				<Box sx={{ alignItem: "center", display: "flex", gap: "5px" }}>
					<Typography color="primary" component="span" variant="dmSansBold">
						{product.priceTo}
					</Typography>
					<Typography
						color="secondary"
						component="span"
						fontSize={fontSizes.small}
						sx={{ textDecoration: "line-through" }}
						variant="dmSansBold"
					>
						{product.priceTo}
					</Typography>
				</Box>
			</StyledProductCardContent>
		</Box>
	);
};

export { ProductCard };
