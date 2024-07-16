import { Box, FormControl, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledParent = styled(Box)`
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledFormContainer = styled(Box)`
	align-items: center;
	justify-content: center;
	display: flex;
	gap: 40px;
	padding: 24px;
	width: 100%;
`;

const StyledBox = styled(Box)`
	width: 100%;
	display: flex;
	gap: 1rem;
	justify-content: end;
	padding: 1rem;
`;

const StyledButton = styled("button")(({ theme }) => ({
	...theme.typography.dmSans,
	background: theme.palette.black,
	border: "none",
	borderRadius: "0.5rem",
	color: theme.palette.white,
	cursor: "pointer",
	marginTop: "1.5rem",
	padding: `0.7rem 2rem`,
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.primary.main,
	marginBottom: "8px",
}));

const StyledFormControl = styled(FormControl)(() => ({
	width: "60%",
}));

export {
	StyledBox,
	StyledButton,
	StyledFormContainer,
	StyledFormControl,
	StyledFormLabel,
	StyledParent,
};
