import React, { useCallback, useState } from "react";
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
import { DeleteIcon } from "~/assets/icons/delete-icon.tsx";
import { ViewIcon } from "~/assets/icons/view-icon.tsx";
import { DeleteModal } from "~/components/index.ts";
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
	isDeleting: boolean;
	isRequestsPage: boolean;
	onDelete: (productId: string) => void;
	products: Product[];
};

const firstElementArray = 0;

const countAllQuantities = (product: Product): number => {
	return product.variants.reduce(
		(total, variant) => total + variant.quantity,
		firstElementArray,
	);
};

const ProductsTable: React.FC<ProductsTableSort> = ({
	isDeleting,
	isRequestsPage,
	onDelete,
	products,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedProductId, setSelectedProductId] = useState<null | string>(
		null,
	);

	const handleDeleteClick = useCallback((productId: string) => {
		setSelectedProductId(productId);
		setIsModalOpen(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false);
		setSelectedProductId(null);
	}, []);

	const handleConfirmDelete = useCallback(() => {
		if (selectedProductId) {
			onDelete(selectedProductId);
		}
		setIsModalOpen(false);
	}, [onDelete, selectedProductId]);

	const createDeleteHandler = (productId: string) => {
		return (): void => handleDeleteClick(productId);
	};

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
										{isRequestsPage ? (
											<>
												<IconButton>
													<ConfirmIcon />
												</IconButton>
												<IconButton>
													<DeclineIcon />
												</IconButton>
											</>
										) : (
											<IconButton onClick={createDeleteHandler(product.id)}>
												<DeleteIcon />
											</IconButton>
										)}
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
			<DeleteModal
				attention={t("AdminProductManagement.attention")}
				isLoading={isDeleting}
				isModalOpen={isModalOpen}
				onClose={handleCloseModal}
				onConfirmDelete={handleConfirmDelete}
				question={t("AdminProductManagement.question")}
			/>
		</TableContainer>
	);
};

export { ProductsTable };
