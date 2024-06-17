import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "~/libs/types/products.ts";
import { useGetProductsByNameQuery } from "~/redux/products/products-api.ts";

const MIN_SEARCH_LENGTH = 2;

const useProductSearch = (initialSearchTerm: string) => {
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
		_: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setSearchTerm(value);
		if (value === "") {
			setOptions([]);
		}
	};

	const handleProductSelect = (
		_: React.SyntheticEvent<Element, Event>,
		newValue: Product | string | null,
	): void => {
		if (newValue && typeof newValue !== "string") {
			console.log(newValue.id);
			navigate(`/product/${newValue.id}`);
		}
	};

	return {
		searchTerm,
		options,
		handleInputChange,
		handleProductSelect,
	};
};

export { useProductSearch };
