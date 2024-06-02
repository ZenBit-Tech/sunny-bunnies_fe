import { Box, Typography } from "@mui/material";
import React from "react";

import { type Product } from "~/libs/types/products.ts";

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
				height: "388px",
			}}
		>
			<img alt={product.name} height="322px" src={product.image} width="100%" />
			<Box>
				<Typography color="primary" variant="playfairDisplayBold">
					{product.name}
				</Typography>
				<Typography color="primary" component="span" variant="dmSansBold">
					{product.price}
				</Typography>
				<Typography component="span">{product.price}</Typography>
			</Box>
		</Box>
	);
};

export { ProductCard };
