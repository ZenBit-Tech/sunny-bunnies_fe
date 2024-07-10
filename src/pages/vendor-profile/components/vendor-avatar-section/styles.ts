import { Box, styled } from "@mui/material";

const StyledVendorProfileData = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 32px;
	min-width: 312px;
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

const StyledFollowButtonContainer = styled(Box)(({ theme }) => ({
	alignSelf: "center",
	border: `1px solid ${theme.palette.graylishRed}`,
	borderRadius: "12px",
	display: "flex",
	justifyContent: "center",
	padding: "16px 25px 16px 16px",
	width: "100%",
}));

export {
	StyledFollowButtonContainer,
	StyledRatingContainer,
	StyledRatingIcon,
	StyledVendorProfileData,
};
