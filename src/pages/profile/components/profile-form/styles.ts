import {
	Box,
	FormControl,
	FormLabel,
	FormLabelProps,
	styled,
} from "@mui/material";

import { colors, fontFamily, fontSizes } from "~/libs/constants/index.ts";

const VisuallyHiddenInput = styled("input")({
	border: "0",
	clip: "rect(0, 0, 0, 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: "0",
	position: "absolute",
	whiteSpace: "nowrap",
	width: "1px",
});
const StyledForm = styled("form")({
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	marginBottom: "10px",
	width: "100%",
});

const StyledFormLabel = styled(FormLabel)<FormLabelProps>(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.primary.main,
	marginBottom: "8px",
}));

const StyledPhoneInput = {
	borderBottomRightRadius: "6px",
	borderColor: `${colors.borderGray}`,
	borderTopRightRadius: "6px",
	fontFamily: `${fontFamily.dmSans}`,
	fontSize: `${fontSizes.small}`,
	padding: "27px 7px",
	width: "100%",
};

const StyledPhoneCountryInput = {
	borderBottomLeftRadius: "6px",
	borderColor: `${colors.borderGray}`,
	borderTopLeftRadius: "6px",
	padding: "27px 7px",
};

const StyledContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "24px",
	padding: "24px",
	width: "80%",
});

const StyledImageLabel = styled("label")(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.gray,
	},
	alignItems: "center",
	backgroundColor: theme.palette.black,
	border: `solid 1px`,
	borderRadius: "12px",
	color: theme.palette.white,
	display: "flex",
	height: "40px",
	justifyContent: "center",
	margin: "5px",
	minWidth: "143px",
	padding: "8px",
	textTransform: "none",
}));

const StyledFormControl = styled(FormControl)({
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	gap: "48px",
	width: "70%",
});

export {
	StyledContainer,
	StyledForm,
	StyledFormControl,
	StyledFormLabel,
	StyledImageLabel,
	StyledPhoneCountryInput,
	StyledPhoneInput,
	VisuallyHiddenInput,
};
