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
	FourthStepFormData,
	Image,
	SecondStepFormData,
	ThirdStepFormData,
	VariantItem,
} from "../../types.ts";

type Product = {
	brand: Brand | null;
	category: Category | null;
	description: string;
	images: Image[];
	material: Material | null;
	name: string;
	price: string;
	style: Style | null;
	type: Type | null;
	variants: VariantItem[];
};

const defaultValues: Product = {
	brand: null,
	category: null,
	description: "",
	images: [],
	material: null,
	name: "",
	price: "",
	style: null,
	type: null,
	variants: [],
};

type UseProductDataReturnType = {
	product: Product;
	setFifthStepData: (price: string) => void;
	setFirstStepData: (formData: FirstStepFormData) => void;
	setFourthStepData: (formData: FourthStepFormData) => void;
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
			brand: null,
			variants: [],
			material: null,
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

	const setFourthStepData = (formData: FourthStepFormData): void => {
		const { variants } = formData;
		setProduct((prevProduct) => ({
			...prevProduct,
			variants: variants,
		}));
	};

	const setFifthStepData = (price: string): void => {
		setProduct((prevProduct) => ({
			...prevProduct,
			price: price,
		}));
	};

	return {
		product,
		setFifthStepData,
		setFirstStepData,
		setFourthStepData,
		setSecondStepData,
		setThirdStepData,
	};
};

export { useProductData };
