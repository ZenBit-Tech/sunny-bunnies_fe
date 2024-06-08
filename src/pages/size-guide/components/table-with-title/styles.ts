import { Box, TableCell, styled } from "@mui/material";

import { colors, fontSizes, fontWeight } from "~/libs/constants/index.ts";

const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.dmSans,
	fontSize: fontSizes.xs,
	fontWeight: fontWeight.semiBold,
	width: "14.28%",
}));

const StyledTableWithTitleContainer = styled(Box)({
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	gap: "25px",
	justifyContent: "center",
	margin: "0 auto",
	marginTop: "16px",
	padding: "35px",
	width: "75%",
});

const StyledTableBodyCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.dmSans,
	borderBottom: "1px solid #333333",
	color: colors.tableCellColor,
	fontSize: fontSizes.xs,
	width: "14.28%",
}));

export {
	StyledTableBodyCell,
	StyledTableHeaderCell,
	StyledTableWithTitleContainer,
};
