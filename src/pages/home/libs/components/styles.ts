import { Box, styled } from "@mui/material";

import { homePageImages } from "~/assets/images/home-page/index.ts";

const StyledTopInfoContainer = styled(Box)`
	align-items: center;
	background-image: url(${homePageImages.backgroundWithBag});
	background-size: cover;
	background-position: center;
	display: flex;
	height: 268px;
	justify-content: center;
	width: 100%;
`;

const StyledTopInfoTextBlock = styled(Box)`
	align-items: center;
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	width: 45%;
`;

const StyledCategoryCarouselContainer = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	height: 414px;
	justify-content: flex-start;
	padding: 15px 25px;
	width: 100%;
`;

const StyledCategoriesContainer = styled(Box)`
	align-items: center;
	display: flex;
	gap: 20px;
	justify-content: center;
	width: 100%;
`;

const StyledCategoriesItems = styled(Box)`
	display: flex;
	gap: 30px;
	flex-wrap: nowrap;
	overflow-x: auto;
	justify-content: space-evenly;
	width: 100%;
`;

const StyledCategoryContainer = styled(Box)`
	align-item: center;
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 240px;
	justify-content: center;
	width: 196px;
`;

const StyledCategoryImage = styled(Box)`
	align-item: center;
	display: flex;
	height: 196px;
	justify-content: center;
	overflow: hidden;
	width: 196px;
`;

const RoundImage = styled("img")`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export {
	RoundImage,
	StyledCategoriesContainer,
	StyledCategoriesItems,
	StyledCategoryCarouselContainer,
	StyledCategoryContainer,
	StyledCategoryImage,
	StyledTopInfoContainer,
	StyledTopInfoTextBlock,
};
