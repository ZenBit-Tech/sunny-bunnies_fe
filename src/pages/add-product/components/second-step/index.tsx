import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { SelectChangeEvent } from "@mui/material";

import { Loader } from "~/components/index.ts";
import { findItemByKey } from "~/helpers/find-item-by-key.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { Category, Style, Type } from "~/libs/types/categories.ts";
import { SelectionField } from "~/pages/add-product/components/form-selection-field/index.tsx";
import {
	SecondStepDefaultValues,
	SecondStepFormData,
} from "~/pages/add-product/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { secondStepValidation } from "./second-step-validation.ts";
import { StyledBox, StyledFormContainer } from "./styles.ts";

const SecondStepForm: React.FC<SecondStepDefaultValues> = ({
	categories,
	category,
	setSecondStepData,
	style,
	type,
}: SecondStepDefaultValues) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		category,
	);
	const [selectedType, setSelectedType] = useState<Type | null>(type);
	const [selectedStyle, setSelectedStyle] = useState<Style | null>(style);

	const {
		clearErrors,
		control,
		formState: { errors },
		getValues,
		handleSubmit,
		setValue,
	} = useForm<SecondStepFormData>({
		defaultValues: {
			category: "",
			style: "",
			type: "",
		},
		resolver: yupResolver(secondStepValidation),
	});

	const handleChangeCategory = useCallback(
		(event: SelectChangeEvent<string>): void => {
			const categoryName = event.target.value;
			if (categories) {
				const category = findItemByKey(categories, categoryName, "name");
				if (category) {
					setValue("category", category.name);
					clearErrors("category");
				} else {
					setValue("category", "");
				}
				setSelectedCategory(category);
				setSelectedType(null);
				setSelectedStyle(null);
			}
		},
		[setValue, categories, clearErrors],
	);

	const handleChangeType = useCallback(
		(event: SelectChangeEvent<string>): void => {
			if (selectedCategory) {
				const typeName = event.target.value;
				const type = findItemByKey(selectedCategory.types, typeName, "name");
				if (type) {
					setValue("type", type.name);
					clearErrors("type");
				} else {
					setValue("type", "");
				}
				setSelectedType(type);
			}
		},
		[selectedCategory, setValue, clearErrors],
	);

	const handleChangeStyle = useCallback(
		(event: SelectChangeEvent<string>): void => {
			if (selectedCategory) {
				const styleName = event.target.value;
				const style = findItemByKey(selectedCategory.styles, styleName, "name");
				if (style) {
					setValue("style", style.name);
					clearErrors("style");
				} else {
					setValue("style", "");
				}
				setSelectedStyle(style);
			}
		},
		[selectedCategory, setValue, clearErrors],
	);

	const getCategoryValueId = useCallback(
		(category: Category): string => category.id.toString(),
		[],
	);
	const getCategoryValueName = useCallback(
		(category: Category): string => category.name,
		[],
	);
	const getTypeValueId = useCallback(
		(type: Type): string => type.id.toString(),
		[],
	);
	const getTypeValueName = useCallback((type: Type): string => type.name, []);
	const getStyleValueId = useCallback(
		(style: Style): string => style.id.toString(),
		[],
	);
	const getStyleValueName = useCallback(
		(style: Style): string => style.name,
		[],
	);

	useEffect(() => {
		if (selectedCategory && getValues("category") !== selectedCategory.name) {
			setValue("category", selectedCategory?.name);
			setValue("type", "");
			setValue("style", "");
		}
		if (selectedType && getValues("type") !== selectedType.name) {
			setValue("type", selectedType?.name);
		}
		if (selectedStyle && getValues("style") !== selectedStyle.name) {
			setValue("style", selectedStyle?.name);
		}
	}, [selectedCategory, selectedType, selectedStyle, setValue, getValues]);

	const onSubmit = (data: SecondStepFormData): void => {
		if (categories) setSecondStepData(data, categories);
		navigate(AppRoute.PRODUCT_DESCRIPTION);
	};

	if (!categories) return <Loader />;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StyledFormContainer>
				<SelectionField
					control={control}
					description={t("AddVendorProduct.categoryDescription")}
					disabled={false}
					error={errors?.category?.message}
					getValueId={getCategoryValueId}
					getValueName={getCategoryValueName}
					handleChangeValue={handleChangeCategory}
					name="category"
					selectedValue={selectedCategory}
					title={t("AddVendorProduct.category")}
					values={categories}
				/>

				<SelectionField
					control={control}
					description={t("AddVendorProduct.typeDescription")}
					disabled={!selectedCategory}
					error={errors?.type?.message}
					getValueId={getTypeValueId}
					getValueName={getTypeValueName}
					handleChangeValue={handleChangeType}
					name="type"
					selectedValue={selectedType}
					title={t("AddVendorProduct.type")}
					values={selectedCategory ? selectedCategory.types : []}
				/>

				<SelectionField
					control={control}
					description={t("AddVendorProduct.styleDescription")}
					disabled={!selectedType}
					error={errors?.style?.message}
					getValueId={getStyleValueId}
					getValueName={getStyleValueName}
					handleChangeValue={handleChangeStyle}
					name="style"
					selectedValue={selectedStyle}
					title={t("AddVendorProduct.style")}
					values={selectedCategory ? selectedCategory.styles : []}
				/>
			</StyledFormContainer>

			<StyledBox>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_PHOTOS} />
			</StyledBox>
		</form>
	);
};

export { SecondStepForm };
