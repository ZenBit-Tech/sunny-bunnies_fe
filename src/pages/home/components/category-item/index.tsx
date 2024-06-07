import { Typography } from "@mui/material";
import React, { useCallback } from "react";

import { colors, fontSizes } from "~/libs/constants/index.ts";
import { type Category } from "~/pages/home/types/index.ts";

import {
	RoundImage,
	StyledCategoryContainer,
	StyledCategoryImage,
} from "./styles.ts";

type CategoryProperties = {
	category: Category;
	onChooseCategory: (category: string) => void;
};

const CategoryItem: React.FC<CategoryProperties> = ({
	category,
	onChooseCategory,
}) => {
	const handleChooseCategory = useCallback(() => {
		onChooseCategory(category.name);
	}, [category, onChooseCategory]);

	return (
		<StyledCategoryContainer>
			<StyledCategoryImage>
				<RoundImage
					alt={category.name}
					as="img"
					onClick={handleChooseCategory}
					src={category.image}
				/>
			</StyledCategoryImage>
			<Typography
				color={colors.textBlack}
				fontSize={fontSizes.mediumLarge}
				textAlign="center"
				variant="playfairDisplay"
			>
				{category.name}
			</Typography>
		</StyledCategoryContainer>
	);
};

export { CategoryItem };
