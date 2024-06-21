import { Box, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledRadioLabelContainer = styled(Box)({
	alignItems: "center",
	borderRadius: "4px",
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
});

const StyledRadioLabelContent = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 4px;
	height: 100%;
	width: 100%;
`;

const StyledRadioLabelImage = styled(Box)({
	border: `1px solid ${colors.lightGray}`,
	borderRadius: "8px",
	height: "72px",
	minWidth: "68px",
});

export {
	StyledRadioLabelContainer,
	StyledRadioLabelContent,
	StyledRadioLabelImage,
};
