import { Box, Button, Typography, styled } from "@mui/material";

import { colors, fontSizes } from "~/libs/constants/index.ts";

const StyledReviewItemContainer = styled(Box)`
	border: 1px solid ${colors.borderGray};
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 16px 25px 16px 16px;
	width: 100%;
`;

const StyledReviewItemBuyerData = styled(Box)`
	display: flex;
	gap: 4px;
	position: relative;
	width: 100%;
`;

const StyledRatingIcon = styled(Box)`
	height: 24px;
	width: 24px;
`;

const StyledReviewContent = styled(Box)`
	width: 100%;
`;

const StyledBuyerRating = styled(Typography)(() => ({
	alignItems: "center",
	display: "flex",
	position: "absolute",
	right: "5px",
	top: "5px",
}));

const StyledReadMoreLessButton = styled(Button)(({ theme }) => ({
	...theme.typography.dmSans,
	fontSize: fontSizes.medium,
	padding: 0,
	textTransform: "none",
}));

export {
	StyledBuyerRating,
	StyledRatingIcon,
	StyledReadMoreLessButton,
	StyledReviewContent,
	StyledReviewItemBuyerData,
	StyledReviewItemContainer,
};
