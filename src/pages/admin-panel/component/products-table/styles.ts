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

const StyledProductContainer = styled(Box)(() => ({
	alignItems: "center",
	display: "flex",
	gap: "20px",
}));

const StyledProductImage = styled("img")(({ theme }) => ({
	border: `14px solid ${theme.palette.gray}`,
	borderRadius: "4px",
	height: "92px",
	width: "80px",
}));

export {
	StyledActionTableCell,
	StyledButtonsContainer,
	StyledProductContainer,
	StyledProductImage,
	StyledStatusTableCell,
	StyledTableCell,
	StyledUpperCaseTableCell,
};
