import { Box, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormContainer = styled(Box)`
	align-items: flex-start;
	justify-content: start;
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	padding: 24px;
	width: 100%;
`;

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
	color: theme.palette.primary.main,
	...theme.typography.playfairDisplay,
	marginBottom: "8px",
}));

const FieldBox = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const SelectBox = styled(Box)`
	width: 80%;
	marginleft: 2rem;
`;

const ErrorSpan = styled("div")(({ theme }) => ({
	color: theme.palette.red,
	marginTop: "0.4rem",
}));

export { ErrorSpan, FieldBox, SelectBox, StyledFormContainer, StyledFormLabel };
