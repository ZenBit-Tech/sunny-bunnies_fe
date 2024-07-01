import { Box, Typography, styled } from "@mui/material";

import { CustomFormGroup } from "~/components/index.ts";

const StyledPriceHeader = styled(Box)(() => ({
	display: "flex",
	gap: "12px",
	padding: "0 24px",
}));

const StyledPriceTitle = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.blueBlack,
	fontSize: theme.fontSizes.large,
}));

const StyledPriceTitleLine = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	borderRadius: "10px",
	height: "24px",
	width: "8px",
}));

const StyledFormGroup = styled(CustomFormGroup)(({ theme }) => ({
	"& .MuiInputBase-input::placeholder": {
		...theme.typography.dmSans,
		color: theme.palette.placeholderGray,
	},
}));

export {
	StyledFormGroup,
	StyledPriceHeader,
	StyledPriceTitle,
	StyledPriceTitleLine,
};
