import { Box, BoxProps, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type StyledNumberCircleProps = {
	isBeforeActive?: boolean;
} & BoxProps;

const StyledTabLabel = styled(Box)({
	alignItems: "center",
	display: "flex",
	height: "100%",
	padding: "16px 24px",
	width: "100%",
});

const StyledNumberCircle = styled(Box)<StyledNumberCircleProps>(
	({ isBeforeActive, theme }) => ({
		alignItems: "center",
		border: `2px solid ${
			isBeforeActive ? theme.palette.primary.dark : theme.palette.darkGrey
		}`,
		borderRadius: "50%",
		color: theme.palette.primary.dark,
		display: "flex",
		height: "3em",
		justifyContent: "center",
		marginRight: "1rem",
		sx: {
			display: { tablet: "flex", xs: "none" },
		},
		width: "3em",
	}),
);

const StyledLabelText = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: theme.typography.dmSansBold.fontSize,
	fontWeight: theme.typography.playfairDisplayBold.fontWeight,
}));

export { StyledLabelText, StyledNumberCircle, StyledTabLabel };
