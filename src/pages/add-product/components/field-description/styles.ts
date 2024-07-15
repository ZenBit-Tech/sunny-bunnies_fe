import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDescriptionBox = styled(Box)`
	width: 15%;
`;

const TitleTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	marginBottom: "8px",
	...theme.typography.playfairDisplayBold,
	marginRight: "2rem",
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.fontGray,
	...theme.typography.dmSans,
	marginRight: "2rem",
}));

export { DescriptionTypography, StyledDescriptionBox, TitleTypography };
