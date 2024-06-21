import { Box, Link, styled } from "@mui/material";

import { colors, fontSizes } from "~/libs/constants/index.ts";

const StyledHeaderLinksGroup = styled(Box)`
	align-item: flex-start;
	display: flex;
	gap: 12px;
	justify-content: flex-start;
	height: 20px;
`;

const StyledHeaderLink = styled(Link)(({ theme }) => ({
	...theme.typography.dmSans,
	color: colors.gray,
	fontSize: fontSizes.xs,
}));

export { StyledHeaderLink, StyledHeaderLinksGroup };
