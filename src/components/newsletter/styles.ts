import { Box, Button, TextField, styled } from "@mui/material";

import { colors, fontWeight } from "~/libs/constants/index.ts";

const StyledNewsletterContainer = styled(Box)({
	alignItems: "center",
	backgroundColor: colors.grayishRed,
	display: "flex",
	flexDirection: "column",
	height: "100%",
	justifyContent: "center",
	width: "100%",
});

const StyledNewsletterContentContainer = styled(Box)({
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	height: "166px",
	justifyContent: "space-between",
	width: "55%",
});

const StyledNewsletterHeader = styled(Box)({
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	gap: "15px",
	justifyContent: "space-between",
});

const StyledNewsletterForm = styled(Box)({
	alignItems: "center",
	borderBottom: "1px solid black",
	display: "flex",
	height: "52px",
	justifyContent: "center",
	width: "75%",
});

const StyledEmailTextField = styled(TextField)(({ theme }) => ({
	"& .MuiInput-underline:after": {
		borderBottom: "none",
	},
	"& .MuiInput-underline:before": {
		borderBottom: "none",
	},
	"& .MuiInput-underline:hover:not(.Mui-disabled):before": {
		borderBottom: "none",
	},
	"& .MuiInputBase-input::placeholder": {
		...theme.typography.dmSans,
		color: colors.textBlack,
		opacity: 1,
	},
	"& .MuiInputBase-root": {
		border: "none",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			border: "none",
		},
		"&.Mui-focused fieldset": {
			border: "none",
		},
		"&:hover fieldset": {
			border: "none",
		},
	},
	flexGrow: 1,
}));

const StyledSignUpButton = styled(Button)(({ theme }) => ({
	...theme.typography.dmSansBold,
	"&:hover": {
		backgroundColor: "inherit",
	},
	color: colors.textBlack,
	fontWeight: fontWeight.bold,
	textTransform: "none",
}));

export {
	StyledEmailTextField,
	StyledNewsletterContainer,
	StyledNewsletterContentContainer,
	StyledNewsletterForm,
	StyledNewsletterHeader,
	StyledSignUpButton,
};
