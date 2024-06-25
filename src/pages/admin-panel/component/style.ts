import { Box, Divider, styled } from "@mui/material";

import theme from "~/theme.ts";

const StyledContainer = styled(Box)({
	backgroundColor: theme.palette.gray,
	height: "100%",
	padding: "30px",
});

const VerticalDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	height: "auto",
	marginLeft: "24px",
	marginRight: "12px",
	width: "1px",
}));

export { StyledContainer, VerticalDivider };
