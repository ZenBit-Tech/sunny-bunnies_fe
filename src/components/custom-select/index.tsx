import {
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { FilterItem } from "~/libs/types/filters";

type CustomSelectProps = {
	label: string;
	value: string;
	onChange: (event: SelectChangeEvent<string>) => void;
	items: FilterItem[] | null;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
	label,
	value,
	onChange,
	items,
}) => {
	if (null) return null;
	return (
		<FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
			<InputLabel sx={{ textTransform: "capitalize" }}>{label}</InputLabel>
			<Select value={value} onChange={onChange} label={label}>
				{items?.map((item) => (
					<MenuItem key={item.id} value={item.name}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export { CustomSelect };
