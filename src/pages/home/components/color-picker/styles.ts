import { Box, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "~/libs/constants";
import { isColorLight } from "~/helpers";

type StyledColorProps = {
	bgcolor: string;
};

const StyledColorBox = styled(Box)<StyledColorProps>(({ bgcolor }) => ({
	position: "relative",
	width: 30,
	height: 30,
	borderRadius: "50%",
	border: `1px solid ${colors.disabledButtonBg}`,
	backgroundColor: bgcolor,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "5px",
}));

const StyledCheckIcon = styled(CheckIcon)<StyledColorProps>(({ bgcolor }) => ({
	color: isColorLight(bgcolor) ? "#000" : "#fff",
	fontSize: 18,
	fontWeight: "bold",
	marginRight: "5px",
}));

export { StyledColorBox, StyledCheckIcon };
