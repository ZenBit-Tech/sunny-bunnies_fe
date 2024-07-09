import { Box, styled } from "@mui/material";

const ErrorBox = styled(Box)(({ theme }) => ({
	alignItems: "center",
	backgroundColor: theme.palette.errorBoxColor,
	borderRadius: 1,
	display: "flex",
	height: "100%",
	justifyContent: "center",
	padding: "20px",
}));

export { ErrorBox };
