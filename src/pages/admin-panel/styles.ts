import { Divider, styled } from "@mui/material";

const VerticalDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	height: "40px",
	marginRight: "24px",
	width: "1px",
}));

export { VerticalDivider };
