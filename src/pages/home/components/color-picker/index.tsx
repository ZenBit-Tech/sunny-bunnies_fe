import { Radio, FormControlLabel, Box, Typography } from "@mui/material";
import React from "react";
import { FilterItem } from "~/libs/types/filters";
import { StyledColorBox, StyledCheckIcon } from "./styles";

type ColorPickerProps = {
	colors: FilterItem[] | null;
	selectedColor: string;
	onChange: (color: string) => void;
	title: string;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
	colors,
	selectedColor,
	onChange,
	title,
}) => {
	if (!colors) return null;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography variant="dmSans" sx={{ textTransform: "capitalize" }}>
				{title}
			</Typography>
			<Box
				sx={{ display: "flex", flexWrap: "wrap", marginTop: 1, gap: "10px" }}
			>
				{colors.map(
					(color) =>
						color.name !== "Other" && (
							<StyledColorBox key={color.id} bgcolor={color.name}>
								<FormControlLabel
									control={
										<Radio
											checked={selectedColor === color.name}
											onChange={() => onChange(color.name)}
											value={color.name}
											sx={{
												position: "absolute",
												opacity: 0,
												width: "100%",
												height: "100%",
											}}
										/>
									}
									label=""
									sx={{
										margin: 0,
										padding: 0,
										width: "100%",
										height: "100%",
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
