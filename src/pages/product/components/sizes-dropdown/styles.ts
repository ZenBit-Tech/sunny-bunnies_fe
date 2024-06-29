import { Select, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledSelect = styled(Select)(({ theme }) => ({
	"& .MuiSelect-icon": {
		color: theme.palette.primary.main,
		right: "10px",
	},
	"&.Mui-disabled": {
		"& .MuiInputBase-input": {
			color: theme.palette.primary.main,
		},
		"& .MuiSelect-icon": {
			color: theme.palette.primary.main,
		},
		color: theme.palette.primary.main,
		opacity: 1,
	},
	border: `1px solid ${colors.borderGray}`,
	borderRadius: "6px",
	color: theme.palette.primary.main,
}));

export { StyledSelect };
