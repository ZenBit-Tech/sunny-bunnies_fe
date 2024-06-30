import { Box, styled } from "@mui/material";

type IconWrapperProps = { background: string };

const StyledIconWrapper = styled(Box)<IconWrapperProps>(({ background }) => ({
	alignItems: "center",
	backgroundColor: background,
	borderRadius: "50%",
	display: "flex",
	height: "32px",
	justifyContent: "center",
	padding: "6px",
	width: "32px",
}));

export { StyledIconWrapper };
