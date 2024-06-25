import { Box, styled } from "@mui/material";

const StyledCategoryCarouselContainer = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 15px 52px;
	width: 100%;
`;

const StyledCategoriesContainer = styled(Box)`
	align-items: center;
	display: flex;
	gap: 20px;
	justify-content: space-between;
	width: 100%;
`;

const StyledCategoriesItems = styled(Box)`
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	width: 100%;
`;

export {
	StyledCategoriesContainer,
	StyledCategoriesItems,
	StyledCategoryCarouselContainer,
};
