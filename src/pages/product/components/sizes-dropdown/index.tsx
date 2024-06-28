import React, { useCallback, useState } from "react";

import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";

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
			const size = event.target.value as number;
			setSelectedSize(size);
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
