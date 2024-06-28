import { Box, SelectChangeEvent } from "@mui/material";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { type ProductCategoryTypeStyle } from "~/libs/types/products.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import { useAppDispatch } from "~/redux/hooks.ts";
import {
	useGetCategoriesWithTypesQuery,
	useGetProductStylesQuery,
} from "~/redux/products/products-api.ts";

import { categoryTypeStyleValidation } from "../../validation/index.ts";
import {
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormTitle,
	StyledTextGroup,
} from "../styles.ts";

type ProductCategoryAndTypeProperties = {
	onCategoryTypeStyleChange: (data: ProductCategoryTypeStyle) => void;
};

const ProductCategoryAndType: React.FC<ProductCategoryAndTypeProperties> = ({
	onCategoryTypeStyleChange,
}) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { data: categoriesWithTypes } =
		useGetCategoriesWithTypesQuery(undefined);
	const { data: styles } = useGetProductStylesQuery(undefined);

	const [selectedCategory, setSelectedCategory] = useState<number>();
	const [selectedType, setSelectedType] = useState<number>();
	const [selectedStyle, setSelectedStyle] = useState<number>();
	const [serverError, setServerError] = useState("");

	const { control, errors, handleSubmit, setValue } =
		useAppForm<ProductCategoryTypeStyle>({
			defaultValues: {
				category: null,
				style: null,
				type: null,
			},
			validationSchema: categoryTypeStyleValidation,
		});

	const handleInputChange = useCallback(
		async (formData: ProductCategoryTypeStyle): Promise<void> => {
			try {
				onCategoryTypeStyleChange(formData);
				navigate(AppRoute.PRODUCT_DESCRIPTION);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[onCategoryTypeStyleChange, navigate, t],
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

	return (
		<StyledFormContainer component="form" onSubmit={handleFormSubmit}>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.category")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.categoryDescription")}
					</StyledFormDescription>
				</StyledTextGroup>
				{/* <Box display="flex" gap="26px" width="100%"> */}
				{/* <SelectField
						error={Boolean(errors.category)}
						helperText={errors.category?.message as string}
						items={categoriesWithTypes}
						label={t("AddVendorProduct.categories")}
						onChange={handleCategoryChange}
						value={selectedCategory}
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
						value={selectedType}
					/>
				</Box> */}
			</StyledFormGroup>

			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.style")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.styleDescription")}
					</StyledFormDescription>
				</StyledTextGroup>
				{/* <Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.style)}
						helperText={errors.style?.message as string}
						items={styles}
						label={t("AddVendorProduct.styles")}
						onChange={handleStyleChange}
						value={selectedStyle}
					/>
				</Box> */}
			</StyledFormGroup>

			<Box
				alignSelf="flex-end"
				display="flex"
				gap="10px"
				justifyContent="flex-end"
				marginTop="10%"
				padding="15px 24px"
			>
				<FormButtons
					isStart={false}
					redirectTo={AppRoute.PRODUCT_DESCRIPTION}
				/>
			</Box>
		</StyledFormContainer>
	);
};

export { ProductCategoryAndType };
