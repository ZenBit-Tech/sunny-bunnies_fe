import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React, { useCallback, useState } from "react";

import { type ProductVariant } from "~/libs/types/products.ts";

const defaultSizeIndex = 0;

type SizesDropdownProperties = {
	variants: ProductVariant[];
};

const SizesDropdown: React.FC<SizesDropdownProperties> = ({ variants }) => {
	const [selectedSize, setSelectedSize] = useState(
		variants[defaultSizeIndex].size.id,
	);

	const handleChange = useCallback(
		(event: SelectChangeEvent<number>) => {
			setSelectedSize(event.target.value as number);
		},
		[setSelectedSize],
	);

	return (
		<FormControl fullWidth>
			<Select
				defaultValue={selectedSize}
				onChange={handleChange}
				value={selectedSize}
			>
				{variants?.map((variant) => (
					<MenuItem key={variant.size.id} value={variant.size.id}>
						{variant.size.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export { SizesDropdown };
