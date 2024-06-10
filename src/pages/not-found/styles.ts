import { Box, Container, Typography, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledNotFoundContainer = styled(Container)`
	align-items: center;
	display: flex;
	justify-content: center;
	height: 100vh;
	margin: auto;
`;

const StyledNotFoundContentContainer = styled(Box)`
	align-items: center;
	background-color: ${colors.lightGray};
	border-radius: 35px;
	display: flex;
	gap: 15px;
	flex-direction: column;
	justify-content: center;
	margin: auto;
	padding: 55px;
	text-align: center;
`;

const StyledNotFoundContentOptions = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 20px;
	width: 100%;
`;

const StyledTypography = styled(Typography)`
	line-height: 25px;
	text-align: start;
`;

export {
	StyledNotFoundContainer,
	StyledNotFoundContentContainer,
	StyledNotFoundContentOptions,
	StyledTypography,
};
