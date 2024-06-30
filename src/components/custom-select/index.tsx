import React from "react";

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";

import { FilterItem } from "~/libs/types/filters.ts";

type CustomSelectProps = {
	items: FilterItem[] | null;
	label: string;
	onChange: (event: SelectChangeEvent<string>) => void;
	value: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
	items,
	label,
	onChange,
	value,
}) => {
	return (
		<FormControl fullWidth sx={{ marginBottom: 2 }} variant="outlined">
			<InputLabel sx={{ textTransform: "capitalize" }}>{label}</InputLabel>
			<Select label={label} onChange={onChange} value={value}>
				{items?.map((item) => (
					<MenuItem
						key={item.id}
						sx={{ textTransform: "capitalize" }}
						value={item.name}
					>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export { CustomSelect };
