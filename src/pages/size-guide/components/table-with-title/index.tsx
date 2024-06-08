import {
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";

import { colors, fontSizes } from "~/libs/constants/index.ts";

import {
	StyledTableBodyCell,
	StyledTableHeaderCell,
	StyledTableWithTitleContainer,
} from "./styles.ts";

const columnForTitles = 0;

type TableWithTitleProperties = {
	items: Array<Record<string, string>>;
	title: string;
};

const TableWithTitle: React.FC<TableWithTitleProperties> = ({
	items,
	title,
}) => {
	return (
		<StyledTableWithTitleContainer>
			<Typography fontSize={fontSizes.lg} variant="dmSans">
				{title}
			</Typography>
			<TableContainer
				component={Paper}
				sx={{ border: "1px solid #333333", width: "100%" }}
			>
				<Table>
					<TableHead
						sx={{
							backgroundColor: colors.grayishRed,
							height: "40px",
							padding: "8px 0",
						}}
					>
						<TableRow>
							{Object.keys(items[columnForTitles]).map((key, index) => (
								<StyledTableHeaderCell key={index}>{key}</StyledTableHeaderCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((size, index) => (
							<TableRow key={index}>
								{Object.values(size).map((value, i) => (
									<StyledTableBodyCell key={i}>{value}</StyledTableBodyCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</StyledTableWithTitleContainer>
	);
};

export { TableWithTitle };
