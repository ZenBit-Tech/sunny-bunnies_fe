import React from "react";

import { Box, Typography } from "@mui/material";

import { fontSizes } from "~/libs/constants/index.ts";

import { HeaderLinksGroup } from "../index.ts";
import {
	StyledCanceledPrice,
	StyledProductDetailsHeader,
	StyledProductName,
	StyledProductShortDescription,
} from "./styles.ts";

const shortDescriptionEndIndex = 125;
const shortDescriptionStartIndex = 0;

type ProductHeaderProperties = {
	description?: string;
	maxPrice?: number;
	minPrice?: number;
	name?: string;
};

const ProductHeader: React.FC<ProductHeaderProperties> = ({
	description,
	maxPrice,
	minPrice,
	name,
}) => {
	return (
		<StyledProductDetailsHeader>
			<HeaderLinksGroup />
			<StyledProductName>{name}</StyledProductName>
			<StyledProductShortDescription>
				{description?.slice(
					shortDescriptionStartIndex,
					shortDescriptionEndIndex,
				) + "..."}
			</StyledProductShortDescription>
			<Box display="flex" gap="12px" paddingTop="10px">
				<Typography fontSize={fontSizes.l} variant="dmSansBold">
					{minPrice}
				</Typography>
				<StyledCanceledPrice>{maxPrice}</StyledCanceledPrice>
			</Box>
		</StyledProductDetailsHeader>
	);
};

export { ProductHeader };
