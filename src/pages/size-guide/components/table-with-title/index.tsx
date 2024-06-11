import {
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { colors, fontSizes } from "~/libs/constants/index.ts";

import {
	StyledTableBodyCell,
	StyledTableHeaderCell,
	StyledTableRow,
	StyledTableWithTitleContainer,
} from "./styles.ts";

const indexOfFirstElementInSizesArray = 0;

type TableWithTitleProperties = {
	addOneSizeRow?: boolean;
	items: Array<Record<string, string>>;
	title: string;
};

const TableWithTitle: React.FC<TableWithTitleProperties> = ({
	addOneSizeRow,
	items,
	title,
}) => {
	const { t } = useTranslation();

	return (
		<StyledTableWithTitleContainer>
			<Typography fontSize={fontSizes.lg} variant="dmSans">
				{title}
			</Typography>
			<TableContainer
				component={Paper}
				sx={{ border: "1px solid #333333", boxShadow: "none", width: "100%" }}
			>
				<Table>
					<TableHead
						sx={{
							backgroundColor: colors.grayishRed,
							height: "40px",
							padding: "8px 0",
						}}
					>
						<StyledTableRow>
							{Object.keys(items[indexOfFirstElementInSizesArray]).map(
								(key, index) => (
									<StyledTableHeaderCell key={index}>
										{key}
									</StyledTableHeaderCell>
								),
							)}
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{items.map((size, index) => (
							<StyledTableRow key={index}>
								{Object.values(size).map((value, i) => (
									<StyledTableBodyCell key={i}>{value}</StyledTableBodyCell>
								))}
							</StyledTableRow>
						))}
						{addOneSizeRow && (
							<StyledTableRow>
								<StyledTableBodyCell
									align="center"
									colSpan={
										Object.keys(items[indexOfFirstElementInSizesArray]).length
									}
								>
									{t("SizesGuidePage.oneSize")}
								</StyledTableBodyCell>
							</StyledTableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</StyledTableWithTitleContainer>
	);
};

export { TableWithTitle };
