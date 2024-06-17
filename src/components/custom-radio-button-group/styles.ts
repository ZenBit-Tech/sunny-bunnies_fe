import { FormControlLabel, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

type StyledFormControlLabelProps = {
	checked?: boolean;
};

const StyledFormControlLabel = styled(
	FormControlLabel,
)<StyledFormControlLabelProps>(({ checked }) => ({
	"& .MuiRadio-root": {
		display: "none",
	},
	"& .MuiTypography-root": {
		textTransform: "uppercase",
	},
	"&:hover": {
		borderColor: colors.gray,
	},
	alignItems: "center",
	backgroundColor: colors.white,
	border: `1px solid ${colors.lightGray}`,
	borderRadius: "4px",
	display: "flex",
	justifyContent: "center",
	padding: "10px 0",
	width: "55px",
	...(checked && {
		borderColor: colors.black,
	}),
}));

export { StyledFormControlLabel };
