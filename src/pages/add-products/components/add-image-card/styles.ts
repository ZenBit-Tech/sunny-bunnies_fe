import { Box, styled } from "@mui/material";

const StyledAddImageContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.lightGrayWithOpacity,
	border: `2px dashed ${theme.palette.fontGray}`,
	borderRadius: "2px",
	height: "160px",
	padding: "21px",
	width: "160px",
}));

export { StyledAddImageContainer };
