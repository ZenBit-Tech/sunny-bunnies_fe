import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { fontSizes } from "~/libs/constants/index.ts";

import { categories } from "../../constants/index.ts";
import { useCategoryCarousel } from "../../hooks/index.ts";
import { CategoryItem } from "../index.ts";
import {
	StyledCategoriesContainer,
	StyledCategoriesItems,
	StyledCategoryCarouselContainer,
} from "./styles.ts";

type CategoryCarouselProperties = {
	onChooseCategory: (category: string) => void;
};

const CategoryCarousel: React.FC<CategoryCarouselProperties> = ({
	onChooseCategory,
}) => {
	const { t } = useTranslation();

	const {
		handleNext,
		handlePrev,
		itemsPerPage,
		showNextButton,
		showPrevButton,
		startIndex,
	} = useCategoryCarousel(categories);

	return (
		<StyledCategoryCarouselContainer>
			<Box sx={{ height: "38px" }}>
				<Typography sx={{ fontSize: fontSizes.xxl }} variant="playfairDisplay">
					{t("HomePage.categories")}
				</Typography>
			</Box>
			<StyledCategoriesContainer>
				{showPrevButton && (
					<IconButton onClick={handlePrev}>
						<ArrowBackIos sx={{ height: "82px", width: "82px" }} />
					</IconButton>
				)}
				<StyledCategoriesItems>
					{categories &&
						categories
							.slice(startIndex, startIndex + itemsPerPage)
							.map((category, index) => (
								<CategoryItem
									category={category}
									key={index}
									onChooseCategory={onChooseCategory}
								/>
							))}
				</StyledCategoriesItems>
				{showNextButton && (
					<IconButton onClick={handleNext}>
						<ArrowForwardIos sx={{ height: "82px", width: "82px" }} />
					</IconButton>
				)}
			</StyledCategoriesContainer>
		</StyledCategoryCarouselContainer>
	);
};

export { CategoryCarousel };
