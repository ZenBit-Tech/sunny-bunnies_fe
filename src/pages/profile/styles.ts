import { Box, Grid, styled } from "@mui/material";

const StyledProfileContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.lightGray,
	padding: "32px",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.white,
	borderRadius: "10px",
	marginTop: "24px",
}));

export { StyledGrid, StyledProfileContainer };
