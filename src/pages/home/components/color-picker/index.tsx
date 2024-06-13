import { Radio, FormControlLabel, Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import { FilterItem } from "~/libs/types/filters";

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
			<Typography variant="dmSans">{title}</Typography>
			<Box sx={{ display: "flex", flexWrap: "wrap", marginTop: 1 }}>
				{colors.map((color) => (
					<Box
						key={color.id}
						sx={{
							position: "relative",
							margin: "5px",
							width: 30,
							height: 30,
							borderRadius: "50%",
							backgroundColor: color.name,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<FormControlLabel
							control={
								<Radio
									checked={selectedColor === color.name}
									onChange={() => onChange(color.name)}
									value={color.name}
									name="color-radio-button"
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
							<CheckIcon
								sx={{
									color: "#fff",
									fontSize: 18,
									fontWeight: "bold",
								}}
							/>
						)}
					</Box>
				))}
			</Box>
		</Box>
	);
};

export { ColorPicker };
