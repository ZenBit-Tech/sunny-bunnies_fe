import React from "react";
import { useTranslation } from "react-i18next";

import { Box, TextField } from "@mui/material";

import { CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
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
import { useProductDescriptionForm } from "./use-product-description-form.hook.ts";

const ProductDescriptionForm: React.FC = () => {
	const { t } = useTranslation();

	const {
		brandOptions: brandsOptions,
		control,
		errors,
		handleBrandChange,
		handleChangeDescription,
		handleChangeName,
		handleGenderChange,
		handleMaterialChange,
		handleSubmit,
		materialOptions,
		productDescription,
		selectedBrand,
		selectedGender,
		selectedMaterial,
	} = useProductDescriptionForm();

	return (
		<StyledFormContainer component="form" onSubmit={handleSubmit}>
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
						items={materialOptions}
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
