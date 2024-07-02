import React, { useCallback, useEffect, useState } from "react";
import { FieldErrors, useFieldArray } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { SelectChangeEvent } from "@mui/material";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { Color, ProductSize } from "~/libs/types/products.ts";
import { AddProductVariant, OptionType } from "~/pages/add-products/types.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { addProductVariants } from "~/redux/products/product-form-slice.ts";
import {
	useGetProductColorsQuery,
	useGetProductSizesByCategoryQuery,
} from "~/redux/products/products-api.ts";
import { RootState } from "~/redux/store.ts";

import { getProductVariantValidation } from "./validation.ts";

const stepVariantId = 1;
const minQuantity = 1;
const zeroIndex = 0;

type UseProductVariantsFormReturn = {
	addingVariantError: null | string;
	colors: Color[] | undefined;
	colorsOptions: OptionType[];
	editingVariantId: null | number;
	errors: FieldErrors<{
		variants: AddProductVariant[];
	}>;
	handleAddVariant: () => void;
	handleChangeQuantity: (quantity: number) => void;
	handleColorChange: (event: SelectChangeEvent<number>) => void;
	handleEditSave: () => void;
	handleFormSubmit: (event_: React.BaseSyntheticEvent) => void;
	handleRemoveVariant: (variantId: number) => void;
	handleSizeChange: (event: SelectChangeEvent<number>) => void;
	handleVariantClick: (variantId: number) => void;
	productQuantity: number;
	selectedColor?: number;
	selectedSize?: number;
	sizes: ProductSize[] | undefined;
	sizesOptions: OptionType[];
	variants: AddProductVariant[];
};

const useProductVariantsForm = (): UseProductVariantsFormReturn => {
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

	const validationSchema = getProductVariantValidation(t);

	const { clearErrors, control, errors, handleSubmit, setValue } = useAppForm<{
		variants: AddProductVariant[];
	}>({
		defaultValues: {
			variants,
		},
		mode: "onChange",
		validationSchema,
	});

	const { append } = useFieldArray({
		control,
		name: "variants",
	});

	useEffect(() => {
		const maxId = productVariants.reduce(
			(max, variant) => Math.max(max, variant.id),
			zeroIndex,
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
		productQuantity,
		selectedColor,
		selectedSize,
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
			const variant = variants.find((v) => v.id === variantId);
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

	return {
		addingVariantError,
		colors,
		colorsOptions,
		editingVariantId,
		errors,
		handleAddVariant,
		handleChangeQuantity,
		handleColorChange,
		handleEditSave,
		handleFormSubmit,
		handleRemoveVariant,
		handleSizeChange,
		handleVariantClick,
		productQuantity,
		selectedColor,
		selectedSize,
		sizes,
		sizesOptions,
		variants,
	};
};

export { useProductVariantsForm };
