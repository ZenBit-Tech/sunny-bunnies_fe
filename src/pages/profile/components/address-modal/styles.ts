import { Box, FormLabel, FormLabelProps, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledModalContainer = styled(Box)`
	background-color: ${colors.white};
	border-radius: 10px;
	box-shadow: 24;
	left: 35%;
	max-width: 600px;
	padding: 20px;
	position: absolute;
	top: 25%;
	width: 70%;
`;

const StyledFormLabel = styled(FormLabel)<FormLabelProps>(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.primary.main,
	marginBottom: "8px",
}));

export { StyledFormLabel, StyledModalContainer };
