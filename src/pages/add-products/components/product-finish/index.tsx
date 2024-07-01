import { Box, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/use-app-form.hook.ts";
import { type AddProductRequestDto } from "~/pages/add-products/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import {
	resetProductForm,
	setProductMaxPrice,
	setProductMinPrice,
} from "~/redux/products/product-form-slice.ts";
import { useAddNewProductMutation } from "~/redux/products/products-api.ts";
import { RootState } from "~/redux/store.ts";
import theme from "~/theme.ts";

import { gendersOptions } from "../product-description-form/constants.ts";
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

const indexZero = 0;

const ProductFinish: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [addNewProduct] = useAddNewProductMutation();

	const [serverError, setServerError] = useState("");
	const {
		maxPrice,
		minPrice,
		productCategory,
		productDescription,
		productImages,
		productVariants,
	} = useAppSelector((state: RootState) => state.productForm);

	const { control, errors, handleSubmit, setValue } =
		useAppForm<AddProductRequestDto>({
			defaultValues: {
				brand: productDescription.brand ?? undefined,
				category: productCategory.category ?? undefined,
				description: productDescription.description,
				gender:
					productDescription.gender === gendersOptions[indexZero].value
						? "male"
						: "female",
				images: productImages,
				material: productDescription.material ?? undefined,
				maxPrice: maxPrice ?? undefined,
				minPrice: minPrice ?? undefined,
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
			dispatch(setProductMinPrice(minPrice));
			dispatch(setProductMaxPrice(maxPrice));
		},
		[dispatch, setValue],
	);

	const handleInputChange = useCallback(
		async (formData: AddProductRequestDto): Promise<void> => {
			try {
				const { price, ...productData } = formData;
				await addNewProduct(productData).unwrap();

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
			{serverError && (
				<Typography color="error" variant="body2">
					{serverError}
				</Typography>
			)}
			{errors.price && (
				<Typography color="error" variant="body2">
					{errors.price.message}
				</Typography>
			)}
			{errors.images && (
				<Typography color="error" variant="body2">
					{errors.images.message}
				</Typography>
			)}
			{errors.variants && (
				<Typography color="error" variant="body2">
					{errors.variants.message}
				</Typography>
			)}
			{errors.description && (
				<Typography color="error" variant="body2">
					{errors.description.message}
				</Typography>
			)}
			{errors.type && (
				<Typography color="error" variant="body2">
					{errors.type.message}
				</Typography>
			)}
			{errors.material && (
				<Typography color="error" variant="body2">
					{errors.material.message}
				</Typography>
			)}
			{errors.brand && (
				<Typography color="error" variant="body2">
					{errors.brand.message}
				</Typography>
			)}
			{errors.style && (
				<Typography color="error" variant="body2">
					{errors.style.message}
				</Typography>
			)}
			{errors.gender && (
				<Typography color="error" variant="body2">
					{errors.gender.message}
				</Typography>
			)}
			{errors.name && (
				<Typography color="error" variant="body2">
					{errors.name.message}
				</Typography>
			)}
			<StyledButtonsContainer>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_VARIANTS} />
			</StyledButtonsContainer>
		</StyledFormContainer>
	);
};

export { ProductFinish };
