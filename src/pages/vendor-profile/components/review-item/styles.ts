import { Box, Typography, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledReviewItemContainer = styled(Box)`
	border: 1px solid ${colors.borderGray};
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	height: 163px;
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

export {
	StyledBuyerRating,
	StyledRatingIcon,
	StyledReviewContent,
	StyledReviewItemBuyerData,
	StyledReviewItemContainer,
};
