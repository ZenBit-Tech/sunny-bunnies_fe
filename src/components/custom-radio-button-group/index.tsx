import React from "react";
import {
	FormControl,
	Typography,
	RadioGroup,
	useRadioGroup,
	Radio,
	FormControlLabelProps,
} from "@mui/material";
import { StyledFormControlLabel } from "./styles";

type RadioButtonOption = {
	value: string;
	label: string;
};

type CustomRadioButtonGroupProps = {
	label: string;
	options: RadioButtonOption[];
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
				sx={{ gap: "10px", marginLeft: "10px", paddingTop: "10px" }}
			>
				{options.map((option) => (
					<FormControlRadioLabel
						key={option.value}
						value={option.value}
						control={<Radio />}
						label={option.label}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export { CustomRadioButtonGroup };
