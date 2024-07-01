import React from "react";

import { Box, FormControlLabel, Radio, Typography } from "@mui/material";

import { FilterItem } from "~/libs/types/filters.ts";

import { StyledCheckIcon, StyledColorBox } from "./styles.ts";

type ColorPickerProps = {
	colors: FilterItem[] | null;
	onChange: (color: string) => void;
	selectedColor: string;
	title: string;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
	colors,
	onChange,
	selectedColor,
	title,
}) => {
	if (!colors) return null;

	const handleChange = (color: string) => (): void => {
		onChange(color);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography sx={{ textTransform: "capitalize" }} variant="dmSans">
				{title}
			</Typography>
			<Box
				sx={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: 1 }}
			>
				{colors.map(
					(color) =>
						color.name !== "Other" && (
							<StyledColorBox bgcolor={color.name} key={color.id}>
								<FormControlLabel
									control={
										<Radio
											checked={selectedColor === color.name}
											onChange={handleChange(color.name)}
											sx={{
												height: "100%",
												opacity: 0,
												position: "absolute",
												width: "100%",
											}}
											value={color.name}
										/>
									}
									label=""
									sx={{
										height: "100%",
										margin: 0,
										padding: 0,
										width: "100%",
									}}
								/>
								{selectedColor === color.name && (
									<StyledCheckIcon bgcolor={color.name} />
								)}
							</StyledColorBox>
						),
				)}
			</Box>
		</Box>
	);
};

export { ColorPicker };
