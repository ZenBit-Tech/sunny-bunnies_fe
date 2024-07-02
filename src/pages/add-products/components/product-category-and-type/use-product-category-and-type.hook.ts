import React, { useCallback, useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { SelectChangeEvent } from "@mui/material";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import {
	OptionType,
	ProductCategoryTypeStyle,
} from "~/pages/add-products/types.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { updateProductCategoryTypeStyle } from "~/redux/products/product-form-slice.ts";
import {
	useGetCategoriesWithTypesQuery,
	useGetProductStylesQuery,
} from "~/redux/products/products-api.ts";
import { RootState } from "~/redux/store.ts";

import { getCategoryTypeStyleValidation } from "./validation.ts";

type UseProductCategoryAndTypeResult = {
	categoryLoading: boolean;
	categoryOptions: OptionType[];
	errors: FieldErrors<ProductCategoryTypeStyle>;
	handleCategoryChange: (event: SelectChangeEvent<number>) => void;
	handleFormSubmit: (event_: React.BaseSyntheticEvent) => void;
	handleStyleChange: (event: SelectChangeEvent<number>) => void;
	handleTypeChange: (event: SelectChangeEvent<number>) => void;
	selectedCategory: null | number;
	selectedStyle: null | number;
	selectedType: null | number;
	styleOptions: OptionType[];
	stylesLoading: boolean;
	types: OptionType[];
};

const useProductCategoryAndType = (): UseProductCategoryAndTypeResult => {
	const { t } = useTranslation();

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { category, style, type } = useAppSelector(
		(state: RootState) => state.productForm.productCategory,
	);

	const { data: categoriesWithTypes, isLoading: categoryLoading } =
		useGetCategoriesWithTypesQuery(undefined);
	const { data: styles, isLoading: stylesLoading } =
		useGetProductStylesQuery(undefined);

	const [selectedCategory, setSelectedCategory] = useState<null | number>(
		category,
	);
	const [selectedType, setSelectedType] = useState<null | number>(type);
	const [selectedStyle, setSelectedStyle] = useState<null | number>(style);
	const [types, setTypes] = useState<OptionType[]>([]);

	const validationSchema = getCategoryTypeStyleValidation(t);

	const { errors, handleSubmit, setValue } =
		useAppForm<ProductCategoryTypeStyle>({
			defaultValues: {
				category: null,
				style: null,
				type: null,
			},
			validationSchema: validationSchema,
		});

	useEffect(() => {
		setValue("category", category);
		setValue("style", style);
		setValue("type", type);
	}, [category, style, type, setValue]);

	useEffect(() => {
		if (categoriesWithTypes && selectedCategory !== null) {
			const category = categoriesWithTypes.find(
				(category) => category.id === selectedCategory,
			);

			if (category) {
				const typesOptions: OptionType[] = category.types.map((type) => ({
					label: type.name,
					value: type.id,
				}));
				setTypes(typesOptions);
			}
		}
	}, [categoriesWithTypes, selectedCategory]);

	const handleInputChange = useCallback(
		async (formData: ProductCategoryTypeStyle): Promise<void> => {
			dispatch(updateProductCategoryTypeStyle(formData));
			navigate(AppRoute.PRODUCT_DESCRIPTION);
		},
		[dispatch, navigate],
	);

	const handleCategoryChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const categoryId = +event.target.value;
			setSelectedCategory(categoryId);
			setValue("category", categoryId);
		},
		[setValue],
	);

	const handleTypeChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const typeId = +event.target.value;
			setSelectedType(typeId);
			setValue("type", typeId);
		},
		[setValue],
	);

	const handleStyleChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const styleId = +event.target.value;
			setSelectedStyle(styleId);
			setValue("style", styleId);
		},
		[setValue],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	const categoryOptions: OptionType[] = categoriesWithTypes
		? categoriesWithTypes.map((category) => ({
				label: category.name,
				value: category.id,
		  }))
		: [];

	const styleOptions: OptionType[] = styles
		? styles.map((style) => ({
				label: style.name,
				value: style.id,
		  }))
		: [];

	return {
		categoryLoading,
		categoryOptions,
		errors,
		handleCategoryChange,
		handleFormSubmit,
		handleStyleChange,
		handleTypeChange,
		selectedCategory,
		selectedStyle,
		selectedType,
		styleOptions,
		stylesLoading,
		types,
	};
};

export { useProductCategoryAndType };
