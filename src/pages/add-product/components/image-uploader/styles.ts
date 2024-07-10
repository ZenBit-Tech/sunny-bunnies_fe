import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const UploadContainer = styled(Box)(({ theme }) => ({
	alignItems: "center",
	border: `3px dashed ${theme.palette.darkGrey}`,
	display: "flex",
	flexDirection: "column",
	height: "12rem",
	justifyContent: "center",
	marginBottom: "20px",
	padding: "20px",
	textAlign: "center",
	width: "10rem",
}));

const Input = styled("input")({
	display: "none",
});

const ErrorSpan = styled("div")(({ theme }) => ({
	color: theme.palette.red,
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.fontGray,
	...theme.typography.dmSans,
	marginTop: "0.5rem",
}));

export { DescriptionTypography, ErrorSpan, Input, UploadContainer };
