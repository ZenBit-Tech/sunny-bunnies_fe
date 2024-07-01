import { SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import {
	type AddProductVariant,
	type OptionType,
} from "~/pages/add-products/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { addProductVariants } from "~/redux/products/product-form-slice.ts";
import {
	useGetProductColorsQuery,
	useGetProductSizesByCategoryQuery,
} from "~/redux/products/products-api.ts";
import { type RootState } from "~/redux/store.ts";

import { StyledButtonsContainer, StyledFormHelperText } from "../styles.ts";
import {
	StyledVariantDisplayItem,
	StyledVariantsFormContainer,
} from "./styles.ts";
import { productVariantsValidation } from "./validation.ts";
import { VariantDisplay } from "./variant-display.tsx";
import { VariantFormInput } from "./variant-form-input.tsx";

const stepVariantId = 1;
const minQuantity = 1;
const zero = 0;

const ProductVariantsForm: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { productCategory, productVariants } = useAppSelector(
		(state: RootState) => state.productForm,
	);
	const categoryId = productCategory.category;
	const { data: sizes } = useGetProductSizesByCategoryQuery(
		categoryId ?? undefined,
	);
	const { data: colors } = useGetProductColorsQuery(undefined);

	const [variants, setVariants] =
		useState<AddProductVariant[]>(productVariants);
	const [productQuantity, setProductQuantity] = useState<number>(minQuantity);
	const [selectedColor, setSelectedColor] = useState<number>();
	const [selectedSize, setSelectedSize] = useState<number>();
	const [nextVariantId, setNextVariantId] = useState<number>(stepVariantId);
	const [addingVariantError, setAddingVariantError] = useState<null | string>(
		null,
	);
	const [editingVariantId, setEditingVariantId] = useState<null | number>(null);

	const { clearErrors, control, errors, handleSubmit, setValue } = useAppForm<{
		variants: AddProductVariant[];
	}>({
		defaultValues: {
			variants,
		},
		mode: "onChange",
		validationSchema: productVariantsValidation,
	});

	const { append } = useFieldArray({
		control,
		name: "variants",
	});

	useEffect(() => {
		const maxId = (productVariants as AddProductVariant[]).reduce(
			(max, variant) => Math.max(max, variant.id),
			zero,
		);
		setNextVariantId(maxId + stepVariantId);

		setValue("variants", productVariants);
	}, [productVariants, setValue]);

	const handleAddVariant = useCallback(() => {
		if (selectedColor !== undefined && selectedSize !== undefined) {
			const newVariant: AddProductVariant = {
				color: +selectedColor,
				id: nextVariantId,
				quantity: productQuantity,
				size: +selectedSize,
			};
			clearErrors();
			setAddingVariantError("");

			setVariants((prevVariants) => [...prevVariants, newVariant]);
			append(newVariant);

			setNextVariantId((prevId) => prevId + stepVariantId);
			setSelectedColor(undefined);
			setSelectedSize(undefined);
			setProductQuantity(minQuantity);
		} else {
			setAddingVariantError(t("AddVendorProduct.productVariantsError"));
		}
	}, [
		append,
		clearErrors,
		nextVariantId,
		selectedColor,
		selectedSize,
		productQuantity,
		t,
	]);

	const handleRemoveVariant = useCallback(
		(variantId: number) => {
			const updatedVariants = variants.filter(
				(variant) => variant.id !== variantId,
			);
			setVariants(updatedVariants);
			setValue("variants", updatedVariants);
		},
		[setValue, variants],
	);

	const handleColorChange = useCallback((event: SelectChangeEvent<number>) => {
		const colorId = +event.target.value;
		setSelectedColor(colorId);
	}, []);

	const handleSizeChange = useCallback((event: SelectChangeEvent<number>) => {
		const sizeId = +event.target.value;
		setSelectedSize(sizeId);
	}, []);

	const handleChangeQuantity = useCallback((quantity: number) => {
		setProductQuantity(quantity);
	}, []);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();

			void handleSubmit(({ variants }) => {
				dispatch(addProductVariants(variants));
				navigate(AppRoute.PRODUCT_FINISH);
			})(event_);
		},
		[dispatch, handleSubmit, navigate],
	);

	const colorsOptions: OptionType[] = colors
		? colors.map((color) => ({
				label: color.name,
				value: color.id,
		  }))
		: [];

	const sizesOptions: OptionType[] = sizes
		? sizes.map((size) => ({
				label: size.name,
				value: size.id,
		  }))
		: [];

	const handleVariantClick = useCallback(
		(variantId: number) => {
			const variant = variants.find((v): boolean => v.id === variantId);
			if (variant) {
				setEditingVariantId(variantId);
				setProductQuantity(variant.quantity);
				setSelectedColor(variant.color);
				setSelectedSize(variant.size);
			}
		},
		[variants],
	);

	const handleEditSave = useCallback(() => {
		if (selectedColor !== undefined && selectedSize !== undefined) {
			const updatedVariants = variants.map((variant: AddProductVariant) =>
				variant.id === editingVariantId
					? {
							...variant,
							color: selectedColor,
							quantity: productQuantity,
							size: selectedSize,
					  }
					: variant,
			);
			setEditingVariantId(null);
			setProductQuantity(minQuantity);
			setSelectedColor(undefined);
			setSelectedSize(undefined);
			setVariants(updatedVariants);
		}
	}, [
		editingVariantId,
		productQuantity,
		selectedColor,
		selectedSize,
		variants,
	]);

	return (
		<StyledVariantsFormContainer component="form" onSubmit={handleFormSubmit}>
			{editingVariantId === null && (
				<VariantFormInput
					colorsOptions={colorsOptions}
					errors={errors}
					onAddVariant={handleAddVariant}
					onColorChange={handleColorChange}
					onQuantityChange={handleChangeQuantity}
					onSizeChange={handleSizeChange}
					quantity={productQuantity}
					selectedColor={selectedColor}
					selectedSize={selectedSize}
					sizesOptions={sizesOptions}
				/>
			)}
			{addingVariantError && (
				<StyledFormHelperText>{addingVariantError}</StyledFormHelperText>
			)}
			{errors.variants && (
				<StyledFormHelperText>
					{errors.variants.message as string}
				</StyledFormHelperText>
			)}
			{variants.map((variant) => (
				<StyledVariantDisplayItem key={variant.id}>
					{editingVariantId === variant.id && (
						<VariantFormInput
							colorsOptions={colorsOptions}
							errors={errors}
							onAddVariant={handleEditSave}
							onColorChange={handleColorChange}
							onQuantityChange={handleChangeQuantity}
							onSizeChange={handleSizeChange}
							quantity={variant.quantity}
							selectedColor={variant.color}
							selectedSize={variant.size}
							sizesOptions={sizesOptions}
						/>
					)}
				</StyledVariantDisplayItem>
			))}
			{variants.map((variant, index) => (
				<StyledVariantDisplayItem key={variant.id}>
					{editingVariantId !== variant.id && (
						<VariantDisplay
							color={variant.color}
							colors={colors}
							index={index}
							key={variant.id}
							onEdit={handleVariantClick}
							onRemove={handleRemoveVariant}
							quantity={variant.quantity}
							size={variant.size}
							sizes={sizes}
							variantId={variant.id}
						/>
					)}
				</StyledVariantDisplayItem>
			))}
			<StyledButtonsContainer>
				<FormButtons
					isStart={false}
					redirectTo={AppRoute.PRODUCT_DESCRIPTION}
				/>
			</StyledButtonsContainer>
		</StyledVariantsFormContainer>
	);
};

export { ProductVariantsForm };
