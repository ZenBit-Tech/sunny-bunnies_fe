import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { SelectChangeEvent } from "@mui/material";

import { Loader } from "~/components/index.ts";
import { findItemByKey } from "~/helpers/find-item-by-key.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { Brand, Material } from "~/libs/types/categories.ts";
import { SelectionField } from "~/pages/add-product/components/form-selection-field/index.tsx";
import {
	ThirdStepDefaultValues,
	ThirdStepFormData,
} from "~/pages/add-product/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { InputField } from "../form-input-field/index.tsx";
import { StyledBox, StyledFormContainer } from "./styles.ts";
import { thirdStepValidation } from "./third-step-validation.ts";

const ThirdStepForm: React.FC<ThirdStepDefaultValues> = ({
	brand,
	category,
	description,
	material,
	name,
	setThirdStepData,
}: ThirdStepDefaultValues) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
		material,
	);
	const [selectedBrand, setSelectedBrand] = useState<Brand | null>(brand);

	const {
		clearErrors,
		control,
		formState: { errors },
		getValues,
		handleSubmit,
		setValue,
	} = useForm<ThirdStepFormData>({
		defaultValues: {
			brand: selectedBrand ? selectedBrand.name : "",
			description: description,
			material: selectedMaterial ? selectedMaterial.name : "",
			name: name,
		},
		resolver: yupResolver(thirdStepValidation),
	});

	const handleChangeBrand = useCallback(
		(event: SelectChangeEvent<string>): void => {
			if (category) {
				const brandName = event.target.value;
				const brand = findItemByKey(category.brands, brandName, "name");
				if (brand) {
					setValue("brand", brand.name);
					clearErrors("brand");
				} else {
					setValue("brand", "");
				}
				setSelectedBrand(brand);
			}
		},
		[category, setValue, clearErrors],
	);

	const handleChangeMaterial = useCallback(
		(event: SelectChangeEvent<string>): void => {
			if (category) {
				const materialName = event.target.value;
				const material = findItemByKey(
					category.materials,
					materialName,
					"name",
				);
				if (material) {
					setValue("material", material?.name);
					clearErrors("material");
				} else {
					setValue("material", "");
				}
				setSelectedMaterial(material);
			}
		},
		[category, setValue, clearErrors],
	);

	const getBrandValueId = useCallback(
		(brand: Brand): string => brand.id.toString(),
		[],
	);
	const getBrandValueName = useCallback(
		(brand: Brand): string => brand.name,
		[],
	);
	const getMaterialValueId = useCallback(
		(material: Material): string => material.id.toString(),
		[],
	);
	const getMaterialValueName = useCallback(
		(material: Material): string => material.name,
		[],
	);

	useEffect(() => {
		if (selectedBrand && getValues("brand") !== selectedBrand.name) {
			setValue("brand", selectedBrand?.name);
		}
		if (selectedMaterial && getValues("material") !== selectedMaterial.name) {
			setValue("material", selectedMaterial?.name);
		}
	}, [selectedBrand, selectedMaterial, setValue, getValues]);

	const onSubmit = (data: ThirdStepFormData): void => {
		if (category) setThirdStepData(data, category);
		navigate(AppRoute.PRODUCT_VARIANTS);
	};

	if (!category) return <Loader />;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StyledFormContainer>
				<InputField
					control={control}
					description={t("AddVendorProduct.dontExceedCharacters")}
					error={errors?.name?.message}
					label={t("AddVendorProduct.productName")}
					name="name"
					placeholder={t("AddVendorProduct.enterProductName")}
					title={t("AddVendorProduct.productName")}
				/>

				<InputField
					control={control}
					description={t("AddVendorProduct.setDescription")}
					error={errors?.description?.message}
					label={t("AddVendorProduct.description")}
					name="description"
					placeholder={t("AddVendorProduct.textWillBeHere")}
					rows={5}
					title={t("AddVendorProduct.description")}
				/>

				<SelectionField
					control={control}
					description={t("AddVendorProduct.pleaseSelectYourProductBrand")}
					disabled={!category}
					error={errors?.brand?.message}
					getValueId={getBrandValueId}
					getValueName={getBrandValueName}
					handleChangeValue={handleChangeBrand}
					name="brand"
					selectedValue={selectedBrand}
					title={t("AddVendorProduct.brand")}
					values={category ? category.brands : []}
				/>

				<SelectionField
					control={control}
					description={t("AddVendorProduct.pleaseSelectMaterial")}
					disabled={!category}
					error={errors?.material?.message}
					getValueId={getMaterialValueId}
					getValueName={getMaterialValueName}
					handleChangeValue={handleChangeMaterial}
					name="material"
					selectedValue={selectedMaterial}
					title={t("AddVendorProduct.material")}
					values={category ? category.materials : []}
				/>
			</StyledFormContainer>

			<StyledBox>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_CATEGORY} />
			</StyledBox>
		</form>
	);
};

export { ThirdStepForm };
