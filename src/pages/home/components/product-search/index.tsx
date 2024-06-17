import React from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Product } from "~/libs/types/products.ts";
import { useProductSearch } from "../../hooks";

const ProductSearch: React.FC = () => {
	const { t } = useTranslation();
	const { options, handleInputChange, handleProductSelect } =
		useProductSearch("");

	return (
		<Box
			sx={{
				display: "flex",
				flex: 1,
				justifyContent: "center",
			}}
		>
			<Autocomplete
				freeSolo
				options={options}
				getOptionLabel={(option: string | Product) =>
					typeof option === "string" ? option : option.name
				}
				filterOptions={(filteredOptions) => filteredOptions}
				onInputChange={handleInputChange}
				onChange={handleProductSelect}
				noOptionsText={t("HomePage.noProducts")}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="outlined"
						placeholder={`${t("HomePage.searchProducts")}...`}
						sx={{ width: "400px" }}
					/>
				)}
				renderOption={(props, option) => (
					<li {...props} key={typeof option === "string" ? option : option.id}>
						{option.name}
					</li>
				)}
			/>
		</Box>
	);
};

export { ProductSearch };
