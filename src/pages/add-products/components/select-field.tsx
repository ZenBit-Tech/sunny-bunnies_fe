import React from "react";

import {
	FormControl,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";

import theme from "~/theme.ts";

type SelectFieldProps = {
	error?: boolean;
	helperText?: string;
	items: Array<{ label: string; value: number }>;
	label: string;
	onChange: (event: SelectChangeEvent<number>) => void;
	showLabel?: boolean;
	value: number | undefined;
};

const SelectField: React.FC<SelectFieldProps> = ({
	error,
	helperText,
	items,
	label,
	onChange,
	showLabel = true,
	value,
}) => (
	<FormControl component="fieldset" error={error} sx={{ width: "100%" }}>
		{showLabel && (
			<FormLabel
				component="legend"
				sx={{
					color: theme.palette.primary.main,
					...theme.typography.playfairDisplay,
					marginBottom: "8px",
				}}
			>
				{label}
			</FormLabel>
		)}
		{!value && <InputLabel shrink={false}>{label}</InputLabel>}
		<Select onChange={onChange} value={value || ""}>
			<MenuItem value="">{`Select ${label.toLowerCase()}`}</MenuItem>
			{items.map((item) => (
				<MenuItem key={item.value} value={item.value}>
					{item.label}
				</MenuItem>
			))}
		</Select>
		{error && (
			<FormHelperText
				sx={{
					color: theme.palette.error.main,
					marginLeft: 0,
				}}
			>
				{helperText}
			</FormHelperText>
		)}
	</FormControl>
);

export { SelectField };
