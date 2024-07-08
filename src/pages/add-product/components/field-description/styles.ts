import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const StyledDescriptionBox = styled(Box)`
	width: 15%;
`;

const TitleTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	marginBottom: "8px",
	fontSize: theme.typography.playfairDisplayBold,
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.fontGray,
	fontSize: theme.typography.dmSans,
}));

export { StyledDescriptionBox, TitleTypography, DescriptionTypography };
