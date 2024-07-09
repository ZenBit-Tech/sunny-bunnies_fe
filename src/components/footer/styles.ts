import { Box, Divider, Typography, styled } from "@mui/material";
import { Container } from "@mui/system";

const StyledTypography = styled(Typography)(({ theme }) => ({
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeight.semiBold,
	letterSpacing: "-0.01em",
	lineHeight: "37px",
	textAlign: "center",
}));

const LogoContainer = styled("div")({
	alignItems: "center",
	display: "flex",
	gap: "9.5px",
});

const StyledFooterText = styled(Typography)(({ theme }) => ({
	fontFamily: theme.typography.dmSans.fontFamily,
	fontSize: theme.fontSizes.medium,
	fontWeight: theme.fontWeight.regular,
	lineHeight: "26px",
	textAlign: "left",
	width: "310px",
}));

const SocialIconsContainer = styled("div")({
	marginBottom: "76px",
});

const StyledFooterTextContainer = styled("div")({
	marginBottom: "24px",
});

const StyledFooterCopyrightText = styled(Typography)(({ theme }) => ({
	fontFamily: theme.typography.dmSans.fontFamily,
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.regular,
	lineHeight: "22px",
}));

const SocialIconsBox = styled(Box)({
	display: "flex",
	gap: "16px",
});

const NavTitle = styled(Typography)(({ theme }) => ({
	fontFamily: theme.typography.dmSansBold.fontFamily,
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.bold,
	lineHeight: "24px",
	marginBottom: "16px",
}));

const FooterContainer = styled(Container)({
	display: "flex",
	height: "232px",
	justifyContent: "space-evenly",
	marginBottom: "72px",
	padding: "72px 87px 0 87px",
});

const NavBox = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "12px",
	padding: "0",
});

const StyledCircularElement = styled(Box)({
	alignItems: "center",
	borderRadius: "50%",
	display: "flex",
	justifyContent: "center",
	position: "relative",
});

const StyledDivider = styled(Divider)({
	marginBottom: "24px",
});

const FooterBottomContainer = styled(Container)({
	paddingInline: "52px",
});

export {
	FooterBottomContainer,
	FooterContainer,
	LogoContainer,
	NavBox,
	NavTitle,
	SocialIconsBox,
	SocialIconsContainer,
	StyledCircularElement,
	StyledDivider,
	StyledFooterCopyrightText,
	StyledFooterText,
	StyledFooterTextContainer,
	StyledTypography,
};
