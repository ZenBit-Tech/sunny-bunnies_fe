import { keyframes } from "@emotion/react";
import { Box, IconButton, styled } from "@mui/material";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const wave = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const AnimatedButtonContainer = styled(Box)(({ theme }) => ({
	alignItems: "center",
	display: "flex",
	height: 100,
	justifyContent: "center",
	position: "relative",
	width: 100,
}));

const PulseBox1 = styled(Box)(({ theme }) => ({
	animation: `${pulse} 1.5s infinite`,
	backgroundColor: theme.palette.lightRed,
	borderRadius: "50%",
	height: 100,
	position: "absolute",
	width: 100,
}));

const PulseBox2 = styled(Box)(({ theme }) => ({
	animation: `${pulse} 1.5s infinite 0.5s`,
	backgroundColor: theme.palette.pink,
	borderRadius: "50%",
	height: 70,
	position: "absolute",
	width: 70,
}));

const WaveIconButton = styled(IconButton)(({ theme }) => ({
	"&:hover::after": {
		animation: `${wave} 1.5s infinite`,
		backgroundColor: theme.palette.red,
		borderRadius: "50%",
		content: '""',
		height: 50,
		position: "absolute",
		width: 50,
	},
	position: "relative",
	zIndex: 0,
}));

export { AnimatedButtonContainer, PulseBox1, PulseBox2, WaveIconButton };
