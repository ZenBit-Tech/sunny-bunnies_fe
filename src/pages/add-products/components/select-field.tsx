import {
	FormControl,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";

import theme from "~/theme.ts";

type SelectFieldProps = {
	error?: boolean;
	helperText?: string;
	items: Array<{ label: string; value: number }>;
	label: string;
	onChange: (event: SelectChangeEvent<number>) => void;
	value: number | undefined;
};

const SelectField: React.FC<SelectFieldProps> = ({
	error,
	helperText,
	items,
	label,
	onChange,
	value,
}) => (
	<FormControl component="fieldset" error={error} sx={{ width: "100%" }}>
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
					paddingLeft: "24px",
				}}
			>
				{helperText}
			</FormHelperText>
		)}
	</FormControl>
);

export { SelectField };
