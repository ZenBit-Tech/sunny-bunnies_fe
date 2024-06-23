import { Box, styled } from "@mui/material";

import { BaseButton } from "~/components/index.ts";
import { colors, fontFamily } from "~/libs/constants/index.ts";

const StyledAddressBox = styled(Box)`
	border: 1px solid ${colors.grayishRed};
	border-radius: 12px;
	padding: 16px;
	width: fit-content;
	display: flex;
	flex-direction: column;
	gap: 8px;
	min-width: 308px;
`;

const StyledButton = styled(BaseButton)`
	border-radius: 12px;
	padding: 8px 24px;
	width: 100px;
	font-family: ${fontFamily.piayfairDisplay};
	text-transform: capitalize;
`;

export { StyledAddressBox, StyledButton };
