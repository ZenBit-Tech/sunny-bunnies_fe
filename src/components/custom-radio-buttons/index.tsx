import React from "react";

import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material";

type RadioButtonOption = {
	label: string;
	value: string;
};

type CustomRadioButtonsProps = {
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	options: RadioButtonOption[];
	value: string;
};

const CustomRadioButtons: React.FC<CustomRadioButtonsProps> = ({
	label,
	onChange,
	options,
	value,
}) => {
	return (
		<FormControl component="fieldset">
			<Typography sx={{ textTransform: "capitalize" }} variant="dmSans">
				{label}
			</Typography>
			<RadioGroup
				aria-label={label}
				name={label}
				onChange={onChange}
				row
				value={value}
			>
				{options.map((option) => (
					<FormControlLabel
						control={<Radio />}
						key={option.value}
						label={option.label}
						sx={{
							alignItems: "center",
							marginRight: 3,
							textTransform: "capitalize",
						}}
						value={option.value}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export { CustomRadioButtons };
