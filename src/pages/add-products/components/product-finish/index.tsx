import React from "react";
import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";

import { CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { type AddProduct } from "~/pages/add-products/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import theme from "~/theme.ts";

import {
	StyledButtonsContainer,
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormTitle,
	StyledTextGroup,
} from "../styles.ts";
import {
	StyledPriceHeader,
	StyledPriceTitle,
	StyledPriceTitleLine,
} from "./styles.ts";
import { useProductFinishForm } from "./use-product-finish.hook.ts";

const ProductFinish: React.FC = () => {
	const { t } = useTranslation();

	const { control, errors, handleFormSubmit, handlePriceChange, serverError } =
		useProductFinishForm();

	return (
		<StyledFormContainer component="form" onSubmit={handleFormSubmit}>
			<StyledPriceHeader>
				<StyledPriceTitleLine />
				<StyledPriceTitle>
					{t("AddVendorProduct.rentingPrice")}
				</StyledPriceTitle>
			</StyledPriceHeader>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>
						{t("AddVendorProduct.recommendedPrice")}
					</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.itsPriceBacedOnCategory")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px" width="100%">
					<CustomFormGroup
						control={control}
						error={errors.price}
						handleChange={handlePriceChange}
						label=""
						name="price"
						placeholder={t("AddVendorProduct.pricePlaceholder")}
						sx={{
							"& .MuiInputBase-input::placeholder": {
								...theme.typography.dmSans,
								color: theme.palette.placeholderGray,
							},
							margin: 0,
						}}
						type="number"
					/>
				</Box>
			</StyledFormGroup>
			<Box display="flex" flexDirection="column" gap="12px" paddingLeft="24px">
				{Object.keys(errors).map((key) => {
					const errorKey = key as keyof FieldErrors<AddProduct>;

					return (
						<Typography color="error" key={errorKey} variant="body2">
							{errors[errorKey]?.message}
						</Typography>
					);
				})}
				{serverError && (
					<Typography color="error" variant="body2">
						{serverError}
					</Typography>
				)}
			</Box>
			<StyledButtonsContainer>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_VARIANTS} />
			</StyledButtonsContainer>
		</StyledFormContainer>
	);
};

export { ProductFinish };
