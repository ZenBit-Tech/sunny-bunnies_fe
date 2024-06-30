import { Link } from "react-router-dom";

import { Box, Typography, styled } from "@mui/material";

import theme from "~/theme.ts";

type StyledUserBoxProps = {
	gap?: string;
	width?: string;
};

const StyledUserBox = styled(Box)<StyledUserBoxProps>`
	display: flex;
	flex-direction: column;
	gap: ${(props): null | string => props.gap || null};
	width: ${(props): null | string => props.width || null};
`;

const StyledTitle = styled(Typography)({
	...theme.typography.playfairDisplay,
	marginBottom: "16px",
});

const StyledTitleDmSans = styled(Typography)({
	...theme.typography.dmSans,
});

const StyledLink = styled(Link)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	color: "inherit",
	fontSize: theme.fontSizes.large,
	textDecoration: "none",
}));

export { StyledLink, StyledTitle, StyledTitleDmSans, StyledUserBox };
