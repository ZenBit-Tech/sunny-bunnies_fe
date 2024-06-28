import { Box, FormLabel, Typography, styled } from "@mui/material";

const StyledFormContainer = styled(Box)`
	align-items: flex-start;
	justify-content: flex-start;
	display: flex;
	gap: 40px;
	flex-direction: column;
	padding-top: 24px;
	width: 100%;
`;

const StyledFormGroup = styled(Box)(() => ({
	display: "flex",
	gap: "40px",
	padding: "12px 24px",
	width: "100%",
}));

const StyledTextGroup = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	width: "150px",
}));

const StyledFormTitle = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.primary.main,
	fontSize: theme.fontSizes.medium,
	marginBottom: "8px",
}));

const StyledFormDescription = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	color: theme.palette.fontGray,
	fontSize: theme.fontSizes.small,
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.primary.main,
	marginBottom: "8px",
}));

export {
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormLabel,
	StyledFormTitle,
	StyledTextGroup,
};
