import { Box, TableCell, TableRow, styled } from "@mui/material";

import { colors, fontSizes, fontWeight } from "~/libs/constants/index.ts";

const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.dmSans,
	fontSize: fontSizes.xs,
	fontWeight: fontWeight.semiBold,
	height: "24px",
	padding: "4px 8px",
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
	maxWidth: "850px",
	padding: "35px",
	width: "70%",
});

const StyledTableRow = styled(TableRow)`
	height: 40px;
	padding: 8px 0px;
`;

const StyledTableBodyCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.dmSans,
	borderBottom: "1px solid #333333",
	color: colors.tableCellColor,
	fontSize: fontSizes.xs,
	height: "24px",
	padding: "4px 8px",
	width: "14.28%",
}));

export {
	StyledTableBodyCell,
	StyledTableHeaderCell,
	StyledTableRow,
	StyledTableWithTitleContainer,
};
