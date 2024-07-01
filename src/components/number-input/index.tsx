import React, { useCallback } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, FormLabel, IconButton, InputAdornment } from "@mui/material";

import theme from "~/theme.ts";

import { StyledNumberInputContainer, StyledTextField } from "./styles.ts";

const minInputNumber = 0;
const maxInputNumber = 0;
const defaultStep = 1;

type NumberInputProps = {
	error?: boolean;
	helperText?: string;
	label?: string;
	max?: number;
	min?: number;
	onChange: (value: number) => void;
	step?: number;
	value: number;
};

const NumberInput: React.FC<NumberInputProps> = ({
	error,
	helperText,
	label,
	max = maxInputNumber,
	min = minInputNumber,
	onChange,
	step = defaultStep,
	value,
}) => {
	const handleIncrement = useCallback((): void => {
		if (value < max) {
			onChange(value + step);
		}
	}, [max, onChange, step, value]);

	const handleDecrement = useCallback((): void => {
		if (value > min) {
			onChange(value - step);
		}
	}, [min, onChange, step, value]);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = parseInt(event.target.value, 10);
			if (newValue >= min && newValue <= max) {
				onChange(newValue);
			}
		},
		[max, min, onChange],
	);

	return (
		<StyledNumberInputContainer>
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
			<StyledTextField
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								disableRipple
								disabled={value >= max}
								onClick={handleIncrement}
							>
								<AddIcon />
							</IconButton>
						</InputAdornment>
					),
					startAdornment: (
						<InputAdornment position="start">
							<IconButton
								disableRipple
								disabled={value <= min}
								onClick={handleDecrement}
							>
								<RemoveIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
				error={error}
				helperText={helperText}
				inputProps={{ max, min, step, style: { textAlign: "center" } }}
				onChange={handleChange}
				type="number"
				value={value}
			/>
		</StyledNumberInputContainer>
	);
};

export { NumberInput };
