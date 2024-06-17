import { Box, Slider, TextField, Typography } from "@mui/material";
import React from "react";

type CustomSliderProps = {
	inputStartAdornment?: string;
	label?: string;
	max: number;
	min: number;
	onChange: (_: Event, newValue: number | number[]) => void;
	onMaxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onMinChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	step?: number;
	value: [number, number];
};

const VALUE_INDEX_MIN = 0;
const VALUE_INDEX_MAX = 1;

const CustomSlider: React.FC<CustomSliderProps> = ({
	inputStartAdornment,
	label,
	max,
	min,
	onChange,
	onMaxChange,
	onMinChange,
	step = VALUE_INDEX_MAX,
	value,
}) => {
	return (
		<Box>
			{label && (
				<Typography sx={{ textTransform: "capitalize" }} variant="dmSans">
					{label}
				</Typography>
			)}
			<Slider
				max={max}
				min={min}
				onChange={onChange}
				step={step}
				value={value}
				valueLabelDisplay="auto"
			/>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					InputProps={{
						startAdornment: inputStartAdornment && (
							<Typography sx={{ mr: 1 }}>{inputStartAdornment}</Typography>
						),
					}}
					onChange={onMinChange}
					value={value[VALUE_INDEX_MIN]}
				/>
				<Typography sx={{ marginX: 2 }}>-</Typography>
				<TextField
					InputProps={{
						startAdornment: inputStartAdornment && (
							<Typography sx={{ mr: 1 }}>{inputStartAdornment}</Typography>
						),
					}}
					onChange={onMaxChange}
					value={value[VALUE_INDEX_MAX]}
				/>
			</Box>
		</Box>
	);
};

export { CustomSlider };
