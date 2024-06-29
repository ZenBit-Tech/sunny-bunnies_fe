import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useState } from "react";

import { type ProductVariant } from "~/libs/types/products.ts";

import { StyledSelect } from "./styles.ts";

const defaultSizeIndex = 0;

type SizesDropdownProperties = {
	disabled: boolean;
	variants: ProductVariant[];
};

const SizesDropdown: React.FC<SizesDropdownProperties> = ({
	disabled,
	variants,
}) => {
	const [selectedSize, setSelectedSize] = useState(
		variants[defaultSizeIndex].size.id,
	);

	const handleChange = useCallback(
		(event: SelectChangeEvent<unknown>) => {
			const size = event?.target?.value as number;
			setSelectedSize(size);
		},
		[setSelectedSize],
	);

	return (
		<FormControl fullWidth>
			<StyledSelect
				IconComponent={ExpandMoreIcon}
				defaultValue={selectedSize}
				disabled={disabled}
				onChange={handleChange}
				value={selectedSize}
			>
				{variants?.map((variant) => (
					<MenuItem key={variant.size.id} value={variant.size.id}>
						{variant.size.name}
					</MenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
};

export { SizesDropdown };
