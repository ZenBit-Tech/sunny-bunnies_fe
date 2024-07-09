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
import { Product } from "~/libs/types/products.ts";
import theme from "~/theme.ts";

import { ProductStatus } from "../product-status/index.tsx";
import {
	StyledActionTableCell,
	StyledButtonsContainer,
	StyledProductContainer,
	StyledProductImage,
	StyledStatusTableCell,
	StyledTableCell,
	StyledUpperCaseTableCell,
} from "./styles.ts";

type ProductsTableSort = {
	products: Product[];
};

const firstElementArray = 0;

const countAllQuantities = (product: Product): number => {
	return product.variants.reduce(
		(total, variant) => total + variant.quantity,
		firstElementArray,
	);
};

const ProductsTable: React.FC<ProductsTableSort> = ({ products }) => {
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
					{products.map((product) => {
						return (
							<TableRow key={product.id}>
								<StyledTableCell width="30%">
									<StyledProductContainer>
										<StyledProductImage
											alt={product.name}
											src={product.images[firstElementArray].url}
										/>
										{product.name}
									</StyledProductContainer>
								</StyledTableCell>
								<StyledTableCell width="20%">
									{product.category.name}
								</StyledTableCell>
								<StyledStatusTableCell width="10%">
									<ProductStatus status={product.activityStatus} />
								</StyledStatusTableCell>
								<StyledTableCell width="10%">
									{countAllQuantities(product)}
								</StyledTableCell>
								<StyledTableCell width="10%">
									{product.minPrice}
								</StyledTableCell>
								<StyledTableCell width="20%">
									<StyledButtonsContainer>
										<IconButton>
											<ConfirmIcon />
										</IconButton>
										<IconButton>
											<DeclineIcon />
										</IconButton>
										<IconButton component={Link} to={`/product/${product.id}`}>
											<ViewIcon />
										</IconButton>
									</StyledButtonsContainer>
								</StyledTableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export { ProductsTable };
