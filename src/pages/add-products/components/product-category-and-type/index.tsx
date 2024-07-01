import { Box, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Loader } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import {
	type OptionType,
	type ProductCategoryTypeStyle,
} from "~/pages/add-products/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { updateProductCategoryTypeStyle } from "~/redux/products/product-form-slice.ts";
import {
	useGetCategoriesWithTypesQuery,
	useGetProductStylesQuery,
} from "~/redux/products/products-api.ts";
import { type RootState } from "~/redux/store.ts";

import { SelectField } from "../select-field.tsx";
import {
	StyledButtonsContainer,
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormTitle,
	StyledTextGroup,
} from "../styles.ts";
import { categoryTypeStyleValidation } from "./validation.ts";

const ProductCategoryAndType: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { category, style, type } = useAppSelector(
		(state: RootState) => state.productForm.productCategory,
	);

	const { data: categoriesWithTypes } =
		useGetCategoriesWithTypesQuery(undefined);
	const { data: styles } = useGetProductStylesQuery(undefined);

	const [selectedCategory, setSelectedCategory] = useState<null | number>(
		category,
	);
	const [selectedType, setSelectedType] = useState<null | number>(type);
	const [selectedStyle, setSelectedStyle] = useState<null | number>(style);

	const [types, setTypes] = useState<OptionType[]>([]);

	const { errors, handleSubmit, setValue } =
		useAppForm<ProductCategoryTypeStyle>({
			defaultValues: {
				category: null,
				style: null,
				type: null,
			},
			validationSchema: categoryTypeStyleValidation,
		});

	useEffect(() => {
		setValue("category", category);
		setValue("style", style);
		setValue("type", type);
	}, [category, style, type, setValue]);

	useEffect(() => {
		if (categoriesWithTypes && selectedCategory) {
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
			setValue("type", +event.target.value);
		},
		[setValue],
	);

	const handleStyleChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const styleId = +event.target.value;
			setSelectedStyle(styleId);
			setValue("style", +event.target.value);
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

	if (!categoriesWithTypes || !styles || !types) {
		return (
			<Box alignItems="center" display="flex" minHeight="550px">
				<Loader />
			</Box>
		);
	}

	return (
		<StyledFormContainer component="form" onSubmit={handleFormSubmit}>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.category")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.categoryDescription")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.category)}
						helperText={errors.category?.message as string}
						items={categoryOptions}
						label={t("AddVendorProduct.categories")}
						onChange={handleCategoryChange}
						value={selectedCategory || undefined}
					/>
				</Box>
			</StyledFormGroup>

			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.type")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.typeDescription")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.type)}
						helperText={errors.type?.message as string}
						items={types}
						label={t("AddVendorProduct.types")}
						onChange={handleTypeChange}
						value={selectedType || undefined}
					/>
				</Box>
			</StyledFormGroup>

			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.style")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.styleDescription")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.style)}
						helperText={errors.style?.message as string}
						items={styleOptions}
						label={t("AddVendorProduct.styles")}
						onChange={handleStyleChange}
						value={selectedStyle || undefined}
					/>
				</Box>
			</StyledFormGroup>

			<StyledButtonsContainer>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_PHOTOS} />
			</StyledButtonsContainer>
		</StyledFormContainer>
	);
};

export { ProductCategoryAndType };
