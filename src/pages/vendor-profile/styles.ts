import { Box, styled } from "@mui/material";

const StyledVendorProfileContainer = styled(Box)`
	align-item: flex-start;
	display: flex;
	justify-content: space-between;
	padding: 0 52px;
`;

const StyledVendorProfileData = styled(Box)`
	display: flex;
	flex-direction: column;
	height: 844px;
	gap: 32px;
	width: 312px;
`;

const StyledVendorProductsAndReviews = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 988px;
`;

export {
	StyledVendorProductsAndReviews,
	StyledVendorProfileContainer,
	StyledVendorProfileData,
};
