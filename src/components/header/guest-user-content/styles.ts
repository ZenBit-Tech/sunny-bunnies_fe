import { Button, styled } from "@mui/material";

const StyledButtonSignUp = styled(Button)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.black,
		color: theme.palette.white,
	},
	backgroundColor: theme.palette.white,
	border: `1px solid ${theme.palette.black}`,
	borderRadius: "12px",
	color: theme.palette.black,
	...theme.typography.dmSans,
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.medium,
	height: "34px",
	textTransform: "none",
	transition: "background-color 0.3s, color 0.3s",
	width: "77px",
}));

const StyledButtonLogIn = styled(Button)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.white,
		color: theme.palette.black,
	},
	backgroundColor: theme.palette.black,
	border: `1px solid ${theme.palette.black}`,
	borderRadius: "12px",
	color: theme.palette.white,
	...theme.typography.dmSans,
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.medium,
	height: "34px",
	textTransform: "none",
	transition: "background-color 0.3s, color 0.3s",
	width: "77px",
}));

export { StyledButtonLogIn, StyledButtonSignUp };
