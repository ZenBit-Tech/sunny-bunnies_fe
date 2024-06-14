import { FormControlLabel, styled } from "@mui/material";
import { colors } from "~/libs/constants";

type StyledFormControlLabelProps = {
	checked?: boolean;
};

const StyledFormControlLabel = styled(
	FormControlLabel,
)<StyledFormControlLabelProps>(({ checked }) => ({
	borderRadius: "4px",
	border: `1px solid ${colors.lightGray}`,
	padding: "10px 0",
	backgroundColor: colors.white,
	width: "55px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"& .MuiRadio-root": {
		display: "none",
	},
	"& .MuiTypography-root": {
		textTransform: "uppercase",
	},
	"&:hover": {
		borderColor: colors.gray,
	},
	...(checked && {
		borderColor: colors.black,
	}),
}));

export { StyledFormControlLabel };
