import { TableCell, styled } from "@mui/material";

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
}));

export { CustomTableCell, CustomUpperCaseTableCell };
