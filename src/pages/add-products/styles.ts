import { Box, styled } from "@mui/material";

const StyledAddProductContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	display: "flex",
	flexDirection: "column",
	gap: "24px",
	height: "100%",
	padding: "12px 24px",
}));

const StyledAddProductSteps = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.white,
	borderRadius: "8px",
	boxShadow: `0px 2px 2px 0px ${theme.palette.shadowGrey}`,
	display: "flex",
	flexDirection: "column",
}));

const StyledAddProductForms = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.white,
	borderRadius: "8px",
}));

const StyledButtonWrapper = styled(Box)(({ theme }) => ({
	borderRadius: "10px",
	padding: "15px, 24px, 15px, 24px",
}));

export {
	StyledAddProductContainer,
	StyledAddProductForms,
	StyledAddProductSteps,
	StyledButtonWrapper,
};
