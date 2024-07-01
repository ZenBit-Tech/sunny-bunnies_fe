import {
	Box,
	FormHelperText,
	FormLabel,
	Typography,
	styled,
} from "@mui/material";

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
	width: "20%",
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

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
	color: theme.palette.error.main,
	marginLeft: 0,
	paddingLeft: "24px",
}));

const StyledButtonsContainer = styled(Box)(() => ({
	alignSelf: "flex-end",
	display: "flex",
	gap: "10px",
	justifyContent: "flex-end",
	marginTop: "10%",
	padding: "15px 24px",
}));

export {
	StyledButtonsContainer,
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormHelperText,
	StyledFormLabel,
	StyledFormTitle,
	StyledTextGroup,
};
