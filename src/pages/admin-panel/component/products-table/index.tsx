import React from "react";
import { Link } from "react-router-dom";

import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { t } from "i18next";

import { ConfirmIcon } from "~/assets/icons/confirm-icon.tsx";
import { DeclineIcon } from "~/assets/icons/decline-icon.tsx";
import { ViewIcon } from "~/assets/icons/view-icon.tsx";
import theme from "~/theme.ts";

import { ProductStatus } from "../product-status/index.tsx";
import {
	StyledActionTableCell,
	StyledButtonsContainer,
	StyledStatusTableCell,
	StyledTableCell,
	StyledUpperCaseTableCell,
} from "./styles.ts";

const ProductsTable: React.FC = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow
						sx={{
							backgroundColor: theme.palette.gray,
						}}
					>
						<StyledUpperCaseTableCell width="30%">
							{t("AdminProductManagement.product")}
						</StyledUpperCaseTableCell>
						<StyledUpperCaseTableCell width="20%">
							{t("AdminProductManagement.category")}
						</StyledUpperCaseTableCell>
						<StyledUpperCaseTableCell width="10%">
							{t("AdminProductManagement.status")}
						</StyledUpperCaseTableCell>
						<StyledUpperCaseTableCell width="10%">
							{t("AdminProductManagement.quantity")}
						</StyledUpperCaseTableCell>
						<StyledUpperCaseTableCell width="10%">
							{t("AdminProductManagement.price")}
						</StyledUpperCaseTableCell>
						<StyledActionTableCell width="20%">
							{t("AdminProductManagement.action")}
						</StyledActionTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<StyledTableCell width="30%">
							{t("AdminProductManagement.product")}
						</StyledTableCell>
						<StyledTableCell width="20%">
							{t("AdminProductManagement.category")}
						</StyledTableCell>
						<StyledStatusTableCell width="10%">
							<ProductStatus status="rejected" />
						</StyledStatusTableCell>
						<StyledTableCell width="10%">
							{t("AdminProductManagement.quantity")}
						</StyledTableCell>
						<StyledTableCell width="10%">
							{t("AdminProductManagement.price")}
						</StyledTableCell>
						<StyledTableCell width="20%">
							<StyledButtonsContainer>
								<IconButton>
									<ConfirmIcon />
								</IconButton>
								<IconButton>
									<DeclineIcon />
								</IconButton>
								<IconButton
									component={Link}
									to="/product-management/products-requests"
								>
									<ViewIcon />
								</IconButton>
							</StyledButtonsContainer>
						</StyledTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export { ProductsTable };
