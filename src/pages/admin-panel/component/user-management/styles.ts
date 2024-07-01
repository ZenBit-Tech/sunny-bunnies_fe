import { Box, Button, Typography, styled } from "@mui/material";

import theme from "~/theme.ts";

const StylesSearchBox = styled(Box)({
	border: `1px solid ${theme.palette.gray}`,
	borderRadius: "6px",
	marginBottom: "32px",
	width: "100%",
});

const StyledPaper = styled(Box)({
	alignItems: "center",
	boxShadow: "inherit",
	display: "flex",
	width: "100%",
});

const StyledSortButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	display: "flex",
	gap: "10px",
	padding: "6px 16px",
}));

const StyledUserCount = styled("span")(({ theme }) => ({
	...theme.typography.dmSans,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeight.semiBold,
}));

const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	fontSize: theme.fontSizes.large,
}));

export {
	StyledHeaderTypography,
	StyledPaper,
	StyledSortButton,
	StyledUserCount,
	StylesSearchBox,
};
