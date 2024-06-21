import CheckIcon from "@mui/icons-material/Check";
import { Box, styled } from "@mui/material";

import { isColorLight } from "~/helpers/index.ts";
import { colors } from "~/libs/constants/index.ts";

type StyledColorProps = {
	bgcolor: string;
};

const StyledColorBox = styled(Box)<StyledColorProps>(({ bgcolor }) => ({
	alignItems: "center",
	backgroundColor: bgcolor,
	border: `1px solid ${colors.disabledButtonBg}`,
	borderRadius: "50%",
	display: "flex",
	gap: "5px",
	height: 30,
	justifyContent: "center",
	position: "relative",
	width: 30,
}));

const StyledCheckIcon = styled(CheckIcon)<StyledColorProps>(({ bgcolor }) => ({
	color: isColorLight(bgcolor) ? colors.black : colors.white,
	fontSize: 18,
	fontWeight: "bold",
	marginRight: "5px",
}));

export { StyledCheckIcon, StyledColorBox };
