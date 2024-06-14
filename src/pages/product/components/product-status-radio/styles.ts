import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	styled,
} from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledRadioFormControl = styled(FormControl)`
	align-item: center;
	display: flex;
	flex-direction: column;
`;

const StyledRadioGroup = styled(RadioGroup)`
	align-item: center;
	border-radius: 8px;
	display: flex;
	gap: "24px";
`;

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
	"& .Mui-checked + .MuiFormControlLabel-label": {
		background: colors.pastelGreen,
		borderRadius: "0 12px 12px 0",
	},
	"& .MuiFormControlLabel-label": {
		padding: "16px 25px 16px 0",
		width: "100%",
	},
	"& .MuiRadio-colorPrimary.Mui-checked": {
		"&:hover": {
			backgroundColor: colors.pastelGreen,
		},
		background: colors.pastelGreen,
		borderRadius: "12px 0 0 12px",
	},
	"& .MuiRadio-root": {
		"&:hover": {
			backgroundColor: "transparent",
		},
		borderRadius: 0,
		color: colors.black,
		height: "100%",
	},
	"& .MuiRadio-root span": {
		"&:hover": {
			backgroundColor: "transparent",
		},
		backgroundColor: "transparent",
	},
	background: "white",
	border: "1px solid #EDEAE9",
	borderRadius: "12px",
	margin: 0,
}));

export { StyledFormControlLabel, StyledRadioFormControl, StyledRadioGroup };
