import React, { useCallback, useEffect, useState } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { SelectChangeEvent } from "@mui/material";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import {
	type OptionType,
	type ProductDescription,
} from "~/pages/add-products/types.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { updateProductDescription } from "~/redux/products/product-form-slice.ts";
import {
	useGetProductBrandsQuery,
	useGetProductMaterialsQuery,
} from "~/redux/products/products-api.ts";
import { type RootState } from "~/redux/store.ts";

import { getProductDescriptionValidation } from "./validation.ts";

type ProductDescriptionFormHook = {
	brandOptions: OptionType[];
	control: Control<ProductDescription, null>;
	errors: FieldErrors<ProductDescription>;
	handleBrandChange: (event: SelectChangeEvent<number>) => void;
	handleChangeDescription: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleGenderChange: (event: SelectChangeEvent<number>) => void;
	handleMaterialChange: (event: SelectChangeEvent<number>) => void;
	handleSubmit: (event: React.BaseSyntheticEvent) => void;
	materialOptions: OptionType[];
	productDescription: string;
	selectedBrand: null | number;
	selectedGender: null | number;
	selectedMaterial: null | number;
};

const useProductDescriptionForm = (): ProductDescriptionFormHook => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const { brand, description, gender, material, name } = useAppSelector(
		(state: RootState) => state.productForm.productDescription,
	);

	const { data: brands } = useGetProductBrandsQuery(undefined);
	const { data: materials } = useGetProductMaterialsQuery(undefined);

	const [productDescription, setProductDescription] =
		useState<string>(description);
	const [selectedBrand, setSelectedBrand] = useState<null | number>(brand);
	const [selectedMaterial, setSelectedMaterial] = useState<null | number>(
		material,
	);
	const [selectedGender, setSelectedGender] = useState<null | number>(gender);

	const validationSchema = getProductDescriptionValidation(t);

	const { control, errors, handleSubmit, setValue } =
		useAppForm<ProductDescription>({
			defaultValues: {
				brand,
				description,
				gender,
				material,
				name,
			},
			validationSchema,
		});

	const handleInputChange = useCallback(
		async (formData: ProductDescription) => {
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
			setValue("material", materialId);
		},
		[setValue],
	);

	const handleGenderChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			const genderId = +event.target.value;
			setSelectedGender(genderId);
			setValue("gender", genderId);
		},
		[setValue],
	);

	const handleChangeName = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const nameValue = event.target.value;
			setValue("name", nameValue);
		},
		[setValue],
	);

	const handleChangeDescription = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const descriptionValue = event.target.value;
			setProductDescription(descriptionValue);
			setValue("description", descriptionValue);
		},
		[setValue],
	);

	const brandsOptions: OptionType[] =
		brands?.map((brand) => ({
			label: brand.name,
			value: brand.id,
		})) || [];

	const materialsOptions: OptionType[] =
		materials?.map((material) => ({
			label: material.name,
			value: material.id,
		})) || [];

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent) => {
			event_.preventDefault();
			handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	useEffect(() => {
		setValue("brand", brand);
		setValue("description", description);
		setValue("gender", gender);
		setValue("material", material);
		setValue("name", name);
	}, [brand, description, gender, material, name, setValue]);

	return {
		brandOptions: brandsOptions,
		control,
		errors,
		handleBrandChange,
		handleChangeDescription,
		handleChangeName,
		handleGenderChange,
		handleMaterialChange,
		handleSubmit: handleFormSubmit,
		materialOptions: materialsOptions,
		productDescription,
		selectedBrand,
		selectedGender,
		selectedMaterial,
	};
};

export { useProductDescriptionForm };
