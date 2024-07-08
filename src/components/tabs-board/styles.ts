import { styled } from "@mui/material/styles";
import {Box, BoxProps, Typography} from "@mui/material";

interface StyledNumberCircleProps extends BoxProps {
	isBeforeActive?: boolean;
}

export const StyledTabLabel = styled(Box)({
	alignItems: "center",
	display: "flex",
	height: "100%",
	padding: "16px 24px",
	width: "100%",
});

export const StyledNumberCircle = styled(Box)<StyledNumberCircleProps>(({ theme, isBeforeActive }) => ({
	alignItems: "center",
	border: `2px solid ${
		isBeforeActive ? theme.palette.primary.dark : theme.palette.darkGrey
	}`,
	borderRadius: "50%",
	color: theme.palette.primary.dark,
	display: "flex",
	height: "3em",
	justifyContent: "center",
	marginRight: theme.spacing(1),
	sx: {
		display: { tablet: "flex", xs: "none" },
	},
	width: "3em",
}));

export const StyledLabelText = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: theme.typography.dmSansBold.fontSize,
	fontWeight: "bold",
}));
