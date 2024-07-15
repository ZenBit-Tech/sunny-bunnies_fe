import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormContainer = styled(Box)`
	align-items: start;
	justify-content: space-between;
	display: flex;
	flex-direction: column;
	gap: 4rem;
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

const StyledTypography = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplayTitle,
}));

const StyledSpan = styled("span")(({ theme }) => ({
	border: "0.3rem solid " + theme.palette.gray,
	borderRadius: "0.4rem",
	marginRight: "1rem",
}));

export { StyledBox, StyledFormContainer, StyledSpan, StyledTypography };
