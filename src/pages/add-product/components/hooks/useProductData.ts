import { useState } from "react";

import {
	Brand,
	Category,
	Material,
	Style,
	Type,
} from "~/libs/types/categories.ts";

import {
	FirstStepFormData,
	Image,
	SecondStepFormData,
	ThirdStepFormData,
} from "../../types.ts";

type Product = {
	brand: Brand | null;
	category: Category | null;
	description: string;
	images: Image[];
	material: Material | null;
	name: string;
	style: Style | null;
	type: Type | null;
};

const defaultValues: Product = {
	brand: null,
	category: null,
	description: "",
	images: [],
	material: null,
	name: "",
	style: null,
	type: null,
};

type UseProductDataReturnType = {
	product: Product;
	setFirstStepData: (formData: FirstStepFormData) => void;
	setSecondStepData: (
		formData: SecondStepFormData,
		categories: Category[],
	) => void;
	setThirdStepData: (formData: ThirdStepFormData, category: Category) => void;
};

const useProductData = (): UseProductDataReturnType => {
	const [product, setProduct] = useState<Product>(defaultValues);

	const setFirstStepData = (formData: FirstStepFormData): void => {
		const { images } = formData;
		setProduct((prevProduct) => ({
			...prevProduct,
			images: images,
		}));
	};

	const setSecondStepData = (
		formData: SecondStepFormData,
		categories: Category[],
	): void => {
		const { category, style, type } = formData;
		const categoryObject = categories.find(
			(categoryElement) => categoryElement.name === category,
		);
		const typeObject = categoryObject?.types.find(
			(typeElement) => typeElement.name === type,
		);
		const styleObject = categoryObject?.styles.find(
			(styleElement) => styleElement.name === style,
		);
		setProduct((prevProduct) => ({
			...prevProduct,
			category: categoryObject ? categoryObject : null,
			style: styleObject ? styleObject : null,
			type: typeObject ? typeObject : null,
		}));
	};

	const setThirdStepData = (
		formData: ThirdStepFormData,
		category: Category,
	): void => {
		const { brand, description, material, name } = formData;
		const brandObject = category.brands.find(
			(brandElement) => brandElement.name === brand,
		);
		const materialObject = category.materials.find(
			(materialElement) => materialElement.name === material,
		);
		setProduct((prevProduct) => ({
			...prevProduct,
			brand: brandObject ? brandObject : null,
			description: description,
			material: materialObject ? materialObject : null,
			name: name,
		}));
	};

	return {
		product,
		setFirstStepData,
		setSecondStepData,
		setThirdStepData,
	};
};

export { useProductData };
