import { Box, TableCell, styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.dmSans,
	fontWeight: theme.fontWeight.medium,
}));

const StyledUpperCaseTableCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	fontSize: theme.fontSizes.small,
	textTransform: "uppercase",
}));

const StyledActionTableCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	fontSize: theme.fontSizes.small,
	textAlign: "center",
	textTransform: "uppercase",
}));

const StyledStatusTableCell = styled(TableCell)(() => ({
	padding: "16px 0",
}));

const StyledButtonsContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
}));

export {
	StyledActionTableCell,
	StyledButtonsContainer,
	StyledStatusTableCell,
	StyledTableCell,
	StyledUpperCaseTableCell,
};
