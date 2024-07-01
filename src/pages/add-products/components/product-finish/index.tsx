import React, { useCallback, useState } from "react";
import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/use-app-form.hook.ts";
import { type AddProduct } from "~/pages/add-products/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { resetProductForm } from "~/redux/products/product-form-slice.ts";
import { useAddNewProductMutation } from "~/redux/products/products-api.ts";
import { RootState } from "~/redux/store.ts";
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
import { finalProductValidation } from "./validation.ts";

const ProductFinish: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [addNewProduct] = useAddNewProductMutation();

	const [serverError, setServerError] = useState("");
	const {
		productCategory,
		productDescription,
		productImages,
		productVariants,
	} = useAppSelector((state: RootState) => state.productForm);

	const { control, errors, handleSubmit, setValue } = useAppForm<AddProduct>({
		defaultValues: {
			brand: productDescription.brand ?? undefined,
			category: productCategory.category ?? undefined,
			description: productDescription.description,
			gender: productDescription.gender ?? undefined,
			images: productImages,
			material: productDescription.material ?? undefined,
			maxPrice: undefined,
			minPrice: undefined,
			name: productDescription.name,
			price: "",
			style: productCategory.style ?? undefined,
			type: productCategory.type ?? undefined,
			variants: productVariants,
		},
		validationSchema: finalProductValidation,
	});

	const handlePriceChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const price = event.target.value;
			setValue("price", price);

			const [minPrice, maxPrice] = price.split("-").map(Number);
			setValue("maxPrice", maxPrice);
			setValue("minPrice", minPrice);
		},
		[setValue],
	);

	const handleInputChange = useCallback(
		async (formData: AddProduct): Promise<void> => {
			try {
				const { price, variants, ...productData } = formData;
				const sanitizedVariants = variants.map(({ id, ...variant }) => variant);

				await addNewProduct({
					...productData,
					variants: sanitizedVariants,
				}).unwrap();

				void dispatch(resetProductForm());
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[addNewProduct, dispatch, t],
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
