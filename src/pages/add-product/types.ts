import {
	Brand,
	Category,
	Material,
	Style,
	Type,
} from "~/libs/types/categories.ts";

type Image = {
	id: string;
	primary: boolean;
	selected: boolean;
	src: string;
};

type FirstStepFormData = {
	images: Image[];
};

type SecondStepFormData = {
	category: string;
	style: string;
	type: string;
};

type SecondStepDefaultValues = {
	categories: Category[] | undefined;
	category: Category | null;
	setSecondStepData: (
		formData: SecondStepFormData,
		categories: Category[],
	) => void;
	style: Style | null;
	type: Type | null;
};

type ThirdStepFormData = {
	brand: string;
	description: string;
	material: string;
	name: string;
};

type ThirdStepDefaultValues = {
	brand: Brand | null;
	category: Category | null;
	description: string;
	material: Material | null;
	name: string;
	setThirdStepData: (formData: ThirdStepFormData, category: Category) => void;
};

export type {
	FirstStepFormData,
	Image,
	SecondStepDefaultValues,
	SecondStepFormData,
	ThirdStepDefaultValues,
	ThirdStepFormData,
};
