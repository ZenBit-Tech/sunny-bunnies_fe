import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Box, SelectChangeEvent, TextField } from "@mui/material";

import { CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import {
	type OptionType,
	type ProductDescription,
} from "~/pages/add-products/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { updateProductDescription } from "~/redux/products/product-form-slice.ts";
import {
	useGetProductBrandsQuery,
	useGetProductMaterialsQuery,
} from "~/redux/products/products-api.ts";
import { type RootState } from "~/redux/store.ts";
import theme from "~/theme.ts";

import { SelectField } from "../select-field.tsx";
import {
	StyledButtonsContainer,
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormTitle,
	StyledTextGroup,
} from "../styles.ts";
import { gendersOptions } from "./constants.ts";
import { productDescriptionValidation } from "./validation.ts";

const ProductDescriptionForm: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { brand, description, gender, material, name } = useAppSelector(
		(state: RootState) => state.productForm.productDescription,
	);
	const { data: brands } = useGetProductBrandsQuery(undefined);
	const { data: materials } = useGetProductMaterialsQuery(undefined);

	const [productDescription, setProductDescription] = useState(description);
	const [selectedBrand, setSelectedBrand] = useState<null | number>(brand);
	const [selectedMaterial, setSelectedMaterial] = useState<null | number>(
		material,
	);
	const [selectedGender, setSelectedGender] = useState<null | number>(gender);

	const { control, errors, handleSubmit, setValue } =
		useAppForm<ProductDescription>({
			defaultValues: {
				brand,
				description,
				gender,
				material,
				name,
			},
			validationSchema: productDescriptionValidation,
		});

	const handleInputChange = useCallback(
		async (formData: ProductDescription): Promise<void> => {
			dispatch(updateProductDescription(formData));
			navigate(AppRoute.PRODUCT_VARIANTS);
		},
		[dispatch, navigate],
	);

	const handleBrandChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const brandId = +event.target.value;
			setSelectedBrand(brandId);
			setValue("brand", brandId);
		},
		[setValue],
	);

	const handleMaterialChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const materialId = +event.target.value;
			setSelectedMaterial(materialId);
			setValue("material", +event.target.value);
		},
		[setValue],
	);

	const handleGenderChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const gender = +event.target.value;
			setSelectedGender(gender);
			setValue("gender", gender);
		},
		[setValue],
	);

	const handleChangeName = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const name = event.target.value;
			setValue("name", name);
		},
		[setValue],
	);

	const handleChangeDescription = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const description = event.target.value;
			setProductDescription(description);
			setValue("description", description);
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

	const brandsOptions: OptionType[] = brands
		? brands.map((brand) => ({
				label: brand.name,
				value: brand.id,
		  }))
		: [];

	const materialsOptions: OptionType[] = materials
		? materials.map((material) => ({
				label: material.name,
				value: material.id,
		  }))
		: [];

	return (
		<StyledFormContainer component="form" onSubmit={handleFormSubmit}>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.productName")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.dontExceedCharacters")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<CustomFormGroup
						control={control}
						error={errors.name}
						handleChange={handleChangeName}
						label=""
						name="name"
						placeholder={t("AddVendorProduct.enterProductName")}
						sx={{
							"& .MuiInputBase-input::placeholder": {
								...theme.typography.dmSans,
								color: theme.palette.placeholderGray,
							},
							margin: 0,
						}}
						type="text"
					/>
				</Box>
			</StyledFormGroup>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.description")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.setDescription")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<TextField
						error={Boolean(errors.description)}
						fullWidth
						helperText={errors.description?.message as string}
						multiline
						name="description"
						onChange={handleChangeDescription}
						placeholder={t("AddVendorProduct.textWillBeHere")}
						rows={4}
						sx={{
							"& .MuiFormHelperText-root": {
								margin: 0,
								padding: 0,
							},
							margin: 0,
						}}
						value={productDescription}
						variant="outlined"
					/>
				</Box>
			</StyledFormGroup>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.brand")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.pleaseSelectYourProductBrand")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.brand)}
						helperText={errors.brand?.message as string}
						items={brandsOptions}
						label={t("AddVendorProduct.selectBrand")}
						onChange={handleBrandChange}
						showLabel={false}
						value={selectedBrand ?? undefined}
					/>
				</Box>
			</StyledFormGroup>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.material")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.pleaseSelectMaterial")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.material)}
						helperText={errors.material?.message as string}
						items={materialsOptions}
						label={t("AddVendorProduct.selectMaterial")}
						onChange={handleMaterialChange}
						showLabel={false}
						value={selectedMaterial ?? undefined}
					/>
				</Box>
			</StyledFormGroup>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>{t("AddVendorProduct.gender")}</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.pleaseSelectGender")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.gender)}
						helperText={errors.gender?.message as string}
						items={gendersOptions}
						label={t("AddVendorProduct.selectGender")}
						onChange={handleGenderChange}
						showLabel={false}
						value={selectedGender ?? undefined}
					/>
				</Box>
			</StyledFormGroup>
			<StyledButtonsContainer>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_CATEGORY} />
			</StyledButtonsContainer>
		</StyledFormContainer>
	);
};

export { ProductDescriptionForm };
