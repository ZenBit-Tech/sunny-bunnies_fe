import {
	Autocomplete,
	AutocompleteRenderInputParams,
	Box,
	TextField,
} from "@mui/material";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Product } from "~/libs/types/products.ts";

import { useProductSearch } from "../../hooks/index.ts";

const ProductSearch: React.FC = () => {
	const { t } = useTranslation();
	const {
		handleInputChange,
		handleProductSelect,
		isMinSearchLengthMet,
		options,
	} = useProductSearch("");

	const getOptionLabel = useCallback(
		(option: Product | string): string =>
			typeof option === "string" ? option : option.name,
		[],
	);

	const renderOption = useCallback(
		(
			props: React.HTMLAttributes<HTMLLIElement>,
			option: Product | string,
		): React.ReactNode => (
			<li {...props} key={typeof option === "string" ? option : option.id}>
				{typeof option === "string" ? option : option.name}
			</li>
		),
		[],
	);

	const renderInput = useCallback(
		(params: AutocompleteRenderInputParams): React.ReactNode => (
			<TextField
				{...params}
				InputProps={{
					...params.InputProps,
					endAdornment: null,
				}}
				placeholder={`${t("HomePage.searchProducts")}...`}
				size="small"
				variant="outlined"
			/>
		),
		[t],
	);

	const filterOptions = useCallback(
		(filteredOptions: (Product | string)[]) => filteredOptions,
		[],
	);

	return (
		<Box
			sx={{
				display: "flex",
				flexShrink: 1,
				justifyContent: "center",
				margin: "0 auto",
				width: "50%",
			}}
		>
			<Autocomplete
				clearIcon
				filterOptions={filterOptions}
				getOptionLabel={getOptionLabel}
				noOptionsText={isMinSearchLengthMet && t("HomePage.noProducts")}
				onChange={handleProductSelect}
				onInputChange={handleInputChange}
				options={options}
				renderInput={renderInput}
				renderOption={renderOption}
				sx={{ width: "100%" }}
			/>
		</Box>
	);
};

export { ProductSearch };
