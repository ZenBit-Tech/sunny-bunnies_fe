import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import { SelectChangeEvent } from "@mui/material";

import { findItemByKey } from "~/helpers/find-item-by-key.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { SelectionField } from "~/pages/add-product/components/form-selection-field/index.tsx";
import { secondStepValidation } from "~/pages/add-product/validation/second-step-validation.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { Category, CategoryType, Style, categories } from "./mock.ts";
import { StyledBox, StyledFormContainer } from "./styles.ts";

type FormData = {
	category: string;
	categoryType: string;
	style: string;
};

const SecondStepForm: React.FC = () => {
	const { t } = useTranslation();

	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null,
	);
	const [selectedType, setSelectedType] = useState<CategoryType | null>(null);
	const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);

	const {
		control,
		formState: { errors },
		getValues,
		handleSubmit,
		setValue,
	} = useForm<FormData>({
		defaultValues: {
			category: "",
			categoryType: "",
			style: "",
		},
		resolver: yupResolver(secondStepValidation),
	});

	const handleChangeCategory = useCallback(
		(event: SelectChangeEvent<string>): void => {
			const categoryName = event.target.value;
			const category = findItemByKey(categories, categoryName, "name");
			if (category) setValue("category", category.name);
			setSelectedCategory(category);
			setSelectedType(null);
			setSelectedStyle(null);
		},
		[setValue],
	);

	const handleChangeType = useCallback(
		(event: SelectChangeEvent<string>): void => {
			if (selectedCategory) {
				const typeName = event.target.value;
				const type = findItemByKey(selectedCategory.types, typeName, "name");
				if (type) setValue("categoryType", type.name);
				setSelectedType(type);
			}
		},
		[selectedCategory, setValue],
	);

	const handleChangeStyle = useCallback(
		(event: SelectChangeEvent<string>): void => {
			if (selectedCategory) {
				const styleName = event.target.value;
				const style = findItemByKey(selectedCategory.styles, styleName, "name");
				if (style) setValue("style", style?.name);
				setSelectedStyle(style);
			}
		},
		[selectedCategory, setValue],
	);

	useEffect(() => {
		if (selectedCategory && getValues("category") !== selectedCategory.name) {
			setValue("category", selectedCategory?.name);
			setValue("categoryType", "");
			setValue("style", "");
		}
		if (selectedType && getValues("categoryType") !== selectedType.name) {
			setValue("categoryType", selectedType?.name);
		}
		if (selectedStyle && getValues("style") !== selectedStyle.name) {
			setValue("style", selectedStyle?.name);
		}
	}, [selectedCategory, selectedType, selectedStyle, setValue, getValues]);

	const onSubmit = (data: FormData): void => {
		console.log(data);
	};

	const getCategoryValueId = useCallback(
		(category: Category): string => category.id.toString(),
		[],
	);
	const getCategoryValueName = useCallback(
		(category: Category): string => category.name,
		[],
	);
	const getTypeValueId = useCallback(
		(categoryType: CategoryType): string => categoryType.id.toString(),
		[],
	);
	const getTypeValueName = useCallback(
		(type: CategoryType): string => type.name,
		[],
	);
	const getStyleValueId = useCallback(
		(style: Style): string => style.id.toString(),
		[],
	);
	const getStyleValueName = useCallback(
		(style: Style): string => style.name,
		[],
	);

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
					error={errors?.categoryType?.message}
					getValueId={getTypeValueId}
					getValueName={getTypeValueName}
					handleChangeValue={handleChangeType}
					name="categoryType"
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
