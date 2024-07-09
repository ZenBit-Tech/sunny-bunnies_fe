import { Icon, TableCell, styled } from "@mui/material";

const CustomTableCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.dmSans,
	fontWeight: theme.fontWeight.medium,
	width: "20%",
}));

const CustomUpperCaseTableCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	cursor: "pointer",
	fontSize: theme.fontSizes.small,
	textTransform: "uppercase",
	verticalAlign: "middle",
}));

const CustomIconButton = styled(Icon)({
	padding: "6px 8px",
	width: "auto",
});

export { CustomIconButton, CustomTableCell, CustomUpperCaseTableCell };
