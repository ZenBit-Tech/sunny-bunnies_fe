import React from "react";
import {
	FormControl,
	Typography,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";

type RadioButtonOption = {
	value: string;
	label: string;
};

type CustomRadioButtonsProps = {
	label: string;
	options: RadioButtonOption[];
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomRadioButtons: React.FC<CustomRadioButtonsProps> = ({
	label,
	options,
	value,
	onChange,
}) => {
	return (
		<FormControl component="fieldset">
			<Typography variant="dmSans" sx={{ textTransform: "capitalize" }}>
				{label}
			</Typography>
			<RadioGroup
				aria-label={label}
				name={label}
				value={value}
				onChange={onChange}
				row
			>
				{options.map((option) => (
					<FormControlLabel
						key={option.value}
						value={option.value}
						control={<Radio />}
						label={option.label}
						sx={{
							textTransform: "capitalize",
							alignItems: "center",
							marginRight: 3,
						}}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export { CustomRadioButtons };
