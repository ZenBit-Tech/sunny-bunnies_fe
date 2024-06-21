import { Box, styled } from "@mui/material";

const StyledRecommendedProductsContainer = styled(Box)`
	align-item: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 536px;
	padding: 9px 166px 52px 90px;
	width: 100%;
`;

const StyledRecommendedProductsHeader = styled(Box)`
	align-item: flex-start;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledRecommendedProductsSlider = styled(Box)`
	display: flex;
	gap: 40px;
	justify-content: space-between;
	overflow: auto;
	width: 100%;
`;

export {
	StyledRecommendedProductsContainer,
	StyledRecommendedProductsHeader,
	StyledRecommendedProductsSlider,
};
