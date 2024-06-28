import { Box, Button, styled } from "@mui/material";

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

export { StyledPaper, StyledSortButton, StylesSearchBox };
