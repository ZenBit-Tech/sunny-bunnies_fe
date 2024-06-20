import { Box, styled } from "@mui/material";

const StyledVendorProfileData = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 52px;
	width: 412px;
`;

const StyledRatingContainer = styled(Box)`
	align-items: center;
	display: flex;
	justify-content: center;
	gap: 10px;
	width: 100%;
`;

const StyledRatingIcon = styled(Box)`
	height: 24px;
	width: 24px;
`;

export { StyledRatingContainer, StyledRatingIcon, StyledVendorProfileData };
