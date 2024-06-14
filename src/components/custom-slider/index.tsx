import { Box, Slider, TextField, Typography } from "@mui/material";
import React from "react";

type CustomSliderProps = {
	min: number;
	max: number;
	step?: number;
	value: [number, number];
	onChange: (_: Event, newValue: number | number[]) => void;
	onMinChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onMaxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	inputStartAdornment?: string;
};

const CustomSlider: React.FC<CustomSliderProps> = ({
	min,
	max,
	step = 1,
	value,
	onChange,
	onMinChange,
	onMaxChange,
	label,
	inputStartAdornment,
}) => {
	return (
		<Box>
			{label && (
				<Typography variant="dmSans" sx={{ textTransform: "capitalize" }}>
					{label}
				</Typography>
			)}
			<Slider
				value={value}
				onChange={onChange}
				valueLabelDisplay="auto"
				min={min}
				max={max}
				step={step}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<TextField
					value={value[0]}
					onChange={onMinChange}
					InputProps={{
						startAdornment: inputStartAdornment && (
							<Typography sx={{ mr: 1 }}>{inputStartAdornment}</Typography>
						),
					}}
				/>
				<Typography sx={{ marginX: 2 }}>-</Typography>
				<TextField
					value={value[1]}
					onChange={onMaxChange}
					InputProps={{
						startAdornment: inputStartAdornment && (
							<Typography sx={{ mr: 1 }}>{inputStartAdornment}</Typography>
						),
					}}
				/>
			</Box>
		</Box>
	);
};

export { CustomSlider };
