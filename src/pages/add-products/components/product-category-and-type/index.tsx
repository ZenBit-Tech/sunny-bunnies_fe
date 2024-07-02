import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { LoaderWrapper } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { SelectField } from "../select-field.tsx";
import {
	StyledButtonsContainer,
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormTitle,
	StyledTextGroup,
} from "../styles.ts";
import { useProductCategoryAndType } from "./use-product-category-and-type.hook.ts";

const ProductCategoryAndType: React.FC = () => {
	const { t } = useTranslation();

	const {
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
	} = useProductCategoryAndType();

	return (
		<LoaderWrapper isLoading={categoryLoading || stylesLoading}>
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
		</LoaderWrapper>
	);
};

export { ProductCategoryAndType };
