import { Box, BoxProps, Theme, styled } from "@mui/material";

type StyledProductStatusProps = {
	status: "active" | "inactive" | "rejected";
} & BoxProps;

type StatusStyles = {
	backgroundColor: string;
	color: string;
};

const getStatusStyles = (status: string, theme: Theme): StatusStyles => {
	switch (status) {
		case "active":
			return {
				backgroundColor: theme.palette.secondaryLightGreen,
				color: theme.palette.greenSuccess,
			};
		case "inactive":
			return {
				backgroundColor: theme.palette.lightYellow,
				color: theme.palette.gold,
			};
		case "rejected":
			return {
				backgroundColor: theme.palette.secondaryLightRed,
				color: theme.palette.errorRed,
			};
		default:
			return {
				backgroundColor: theme.palette.transparent,
				color: theme.palette.black,
			};
	}
};

const StyledProductStatus = styled(Box)<StyledProductStatusProps>(({
	status,
	theme,
}) => {
	const { backgroundColor, color } = getStatusStyles(status, theme);

	return {
		...theme.typography.playfairDisplay,
		alignItems: "center",
		backgroundColor: backgroundColor,
		borderRadius: "20px",
		color: color,
		display: "flex",
		fontSize: theme.fontSizes.small,
		fontWeight: theme.fontWeight.semiBold,
		justifyContent: "center",
		padding: "4px 16px",
		textTransform: "capitalize",
		width: "92px",
	};
});

export { StyledProductStatus };
