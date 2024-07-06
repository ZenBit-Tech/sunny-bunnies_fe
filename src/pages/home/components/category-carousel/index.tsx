import React from "react";
import { useTranslation } from "react-i18next";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

import { fontSizes } from "~/libs/constants/index.ts";
import { useCategoryCarousel } from "~/pages/home/hooks/index.ts";

import { CategoryItem } from "../index.ts";
import { categories } from "./constants.ts";
import {
	StyledCategoriesContainer,
	StyledCategoriesItems,
	StyledCategoryCarouselContainer,
} from "./styles.ts";

type CategoryCarouselProperties = {
	onChooseCategory: (category: string) => void;
};

const CategoryCarousel: React.FC<CategoryCarouselProperties> = React.memo(({
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
		animationClass,
	} = useCategoryCarousel(categories);

	return (
		<StyledCategoryCarouselContainer>
			<Box sx={{ height: "38px", m: "17px 0 17px 0" }}>
				<Typography sx={{ fontSize: fontSizes.xxl }} variant="playfairDisplay">
					{t("HomePage.categories")}
				</Typography>
			</Box>
			<StyledCategoriesContainer>
				{showPrevButton && (
					<Box>
						<IconButton onClick={handlePrev} disableRipple disableFocusRipple>
							<ArrowBackIos sx={{ height: "70px", width: "70px" }} />
						</IconButton>
					</Box>
				)}
				<StyledCategoriesItems className={animationClass}>
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
					<IconButton onClick={handleNext} disableRipple disableFocusRipple>
						<ArrowForwardIos sx={{ height: "70px", width: "70px" }} />
					</IconButton>
				)}
			</StyledCategoriesContainer>
		</StyledCategoryCarouselContainer>
	);
});

export { CategoryCarousel };
