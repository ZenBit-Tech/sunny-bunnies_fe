import { Box, styled } from "@mui/material";

const StyledCategoryCarouselContainer = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 15px 52px;
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

export {
	StyledCategoriesContainer,
	StyledCategoriesItems,
	StyledCategoryCarouselContainer,
};
