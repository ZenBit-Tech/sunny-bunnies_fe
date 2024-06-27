import { Box, FormLabel, FormLabelProps, styled } from "@mui/material";

const boxShadow = 24;

const StyledModalContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.white,
	borderRadius: "10px",
	boxShadow: theme.shadows[boxShadow],
	left: "35%",
	maxWidth: "600px",
	padding: "20px",
	position: "absolute",
	top: "25%",
	width: "70%",
}));

const StyledFormLabel = styled(FormLabel)<FormLabelProps>(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.primary.main,
	marginBottom: "8px",
}));

export { StyledFormLabel, StyledModalContainer };
