import {
	FormControl,
	FormControlLabelProps,
	Radio,
	RadioGroup,
	Typography,
	useRadioGroup,
} from "@mui/material";
import React from "react";

import { StyledFormControlLabel } from "./styles.ts";

type RadioButtonOption = {
	label: string;
	value: string;
};

type CustomRadioButtonGroupProps = {
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	options: RadioButtonOption[];
	value: string;
};

type FormControlRadioLabelProps = {
	checked?: boolean;
} & FormControlLabelProps;

const FormControlRadioLabel: React.FC<FormControlRadioLabelProps> = (props) => {
	const radioGroup = useRadioGroup();
	let checked = false;

	if (radioGroup) {
		checked = radioGroup.value === props.value;
	}

	return <StyledFormControlLabel checked={checked} {...props} />;
};

const CustomRadioButtonGroup: React.FC<CustomRadioButtonGroupProps> = ({
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
				sx={{ gap: "10px", marginLeft: "10px", paddingTop: "10px" }}
				value={value}
			>
				{options.map((option) => (
					<FormControlRadioLabel
						control={<Radio />}
						key={option.value}
						label={option.label}
						value={option.value}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export { CustomRadioButtonGroup };
