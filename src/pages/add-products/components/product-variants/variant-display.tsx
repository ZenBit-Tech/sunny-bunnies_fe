import { Box, IconButton, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import Pen from "~/assets/images/add-product/pen.svg?react";
import TrashBin from "~/assets/images/add-product/trash-bin.svg?react";
import { Color } from "~/libs/types/products.ts";

import { getColorName } from "./helpers.ts";
import {
	StyledVariantDisplayContainer,
	StyledVariantTypography,
} from "./styles.ts";

const generateOrderNumberFromId = 1;

type VariantDisplayProps = {
	color: number;
	colors: Color[] | undefined;
	index: number;
	onEdit: (variantId: number) => void;
	onRemove: (variantId: number) => void;
	quantity: number;
	size: number;
	sizes: Color[] | undefined;
	variantId: number;
};

const VariantDisplay: React.FC<VariantDisplayProps> = ({
	color,
	colors,
	index,
	onEdit,
	onRemove,
	quantity,
	size,
	sizes,
	variantId,
}) => {
	const { t } = useTranslation();

	const handleRemoveVariant = useCallback(() => {
		onRemove(variantId);
	}, [onRemove, variantId]);

	const handleEditVariant = useCallback(() => {
		onEdit(variantId);
	}, [onEdit, variantId]);

	if (!colors || !sizes) {
		return <Typography>Sizes and Colors were not found</Typography>;
	}

	const colorName = getColorName(colors, color);
	const sizeName = getColorName(sizes, size);

	return (
		<StyledVariantDisplayContainer>
			<Typography width="1%">{index + generateOrderNumberFromId}</Typography>
			<StyledVariantTypography>{`${t(
				"AddVendorProduct.color",
			)} - ${colorName}`}</StyledVariantTypography>
			<StyledVariantTypography>{`${t(
				"AddVendorProduct.size",
			)} - ${sizeName}`}</StyledVariantTypography>
			<StyledVariantTypography>{`${t(
				"AddVendorProduct.quantity",
			)} - ${quantity}`}</StyledVariantTypography>
			<Box>
				<IconButton onClick={handleEditVariant}>
					<Pen />
				</IconButton>
				<IconButton onClick={handleRemoveVariant}>
					<TrashBin />
				</IconButton>
			</Box>
		</StyledVariantDisplayContainer>
	);
};

export { VariantDisplay };
