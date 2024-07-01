import { Box, FormControl, Typography, styled } from "@mui/material";

const StyledAddImageContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.lightGrayWithOpacity,
	backgroundPosition: "center",
	backgroundSize: "cover",
	border: `2px dashed ${theme.palette.fontGray}`,
	borderRadius: "2px",
	height: "160px",
	padding: "21px",
	width: "160px",
}));

const StyledFormController = styled(FormControl)(() => ({
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	gap: "6px",
	height: "100%",
	justifyContent: "center",
	width: "100%",
}));

const StyledHintTextOnAddImageCard = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	color: theme.palette.pastelGray,
	fontSize: theme.fontSizes.xs,
	lineHeight: "16px",
	textAlign: "center",
}));

export {
	StyledAddImageContainer,
	StyledFormController,
	StyledHintTextOnAddImageCard,
};
