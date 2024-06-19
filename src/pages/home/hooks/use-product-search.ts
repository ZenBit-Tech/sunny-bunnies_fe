import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Product } from "~/libs/types/products.ts";
import { useGetProductsByNameQuery } from "~/redux/products/products-api.ts";

type UseProductSearchReturn = {
	handleInputChange: (
		event: React.SyntheticEvent<Element, Event>,
		value: string,
	) => void;
	handleProductSelect: (
		event: React.SyntheticEvent<Element, Event>,
		newValue: Product | null | string,
	) => void;
	options: Product[];
	searchTerm: string;
};

const MIN_SEARCH_LENGTH = 2;

const useProductSearch = (
	initialSearchTerm: string,
): UseProductSearchReturn => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
	const [options, setOptions] = useState<Product[]>([]);
	const { data: productSuggestions, refetch } = useGetProductsByNameQuery(
		{ name: searchTerm },
		{ skip: searchTerm.length < MIN_SEARCH_LENGTH },
	);

	useEffect(() => {
		if (searchTerm.length >= MIN_SEARCH_LENGTH) {
			refetch();
		}
	}, [searchTerm, refetch]);

	useEffect(() => {
		if (productSuggestions) {
			setOptions(productSuggestions);
		}
	}, [productSuggestions]);

	const handleInputChange = (
		_event: React.SyntheticEvent<Element, Event>,
		value: string,
	): void => {
		const trimmedValue = value.replace(/^\s+|\s+(?=\s)/g, "");
		setSearchTerm(trimmedValue);
		if (trimmedValue === "") {
			setOptions([]);
		}
	};

	const handleProductSelect = (
		_event: React.SyntheticEvent<Element, Event>,
		newValue: Product | null | string,
	): void => {
		if (newValue && typeof newValue !== "string") {
			navigate(`/product/${newValue.id}`);
		}
	};

	return {
		handleInputChange,
		handleProductSelect,
		options,
		searchTerm,
	};
};

export { useProductSearch };
