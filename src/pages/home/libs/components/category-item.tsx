import { Typography } from "@mui/material";
import React from "react";

import { colors, fontSizes } from "~/libs/constants/index.ts";

import { type Category } from "../types/category.ts";
import {
	RoundImage,
	StyledCategoryContainer,
	StyledCategoryImage,
} from "./styles.ts";

type CategoryProperties = {
	category: Category;
};

const CategoryItem: React.FC<CategoryProperties> = ({ category }) => {
	return (
		<StyledCategoryContainer>
			<StyledCategoryImage>
				<RoundImage alt={category.name} as="img" src={category.image} />
			</StyledCategoryImage>
			<Typography
				color={colors.textBlack}
				fontSize={fontSizes.mediumLarge}
				variant="playfairDisplay"
			>
				{category.name}
			</Typography>
		</StyledCategoryContainer>
	);
};

export { CategoryItem };
