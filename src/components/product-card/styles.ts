import { Link } from "react-router-dom";

import { Box, IconButton, Typography, styled } from "@mui/material";

import theme from "~/theme.ts";

type CustomSliderDotProps = {
	backgroundColor: {
		active: string;
		inactive: string;
	};
	isActive: boolean;
};

type CustomHeartIconProps = {
	isWishlistProduct: boolean;
};

const CustomSliderDot = styled(Box)<CustomSliderDotProps>(
	({ backgroundColor, isActive }) => ({
		backgroundColor: isActive
			? backgroundColor.active
			: backgroundColor.inactive,
		borderRadius: "2px",
		cursor: "pointer",
		height: "6px",
		margin: "-120% 50%",
		transform: isActive ? "scaleX(1.75)" : "scaleX(1)",
		transition: "transform 0.3s ease, background-color 0.3s ease",
		width: "0.8em",
	}),
);

const StyledImageWrapper = styled(Link)(() => ({
	alignItems: "center",
	display: "flex",
	flex: "0 0 auto",
	justifyContent: "center",
	overflow: "hidden",
	paddingTop: "100%",
	position: "relative",
	width: "100%",
}));

const StyledImage = styled("img")(() => ({
	backgroundColor: theme.palette.gray,
	cursor: "pointer",
	height: "100%",
	left: "0",
	objectFit: "contain",
	position: "absolute",
	top: "0",
	width: "100%",
}));

const StyledCard = styled(Box)(() => ({
	position: "relative",
	width: "100%",
}));

const StyledCardWrapper = styled(Box)(({ theme }) => ({
	"&:hover": {
		boxShadow: `3.97px 3.97px 17.81px 8.97px ${theme.palette.gray}`,
	},
	backgroundColor: theme.palette.common.white,
	borderRadius: "12px",
	boxShadow: `2.97px 2.97px 17.81px 0px ${theme.palette.gray}`,
	display: "flex",
	flexDirection: "column",
	overflow: "hidden",
	position: "relative",
	width: "100%",
}));

const StyledProductInfo = styled(Box)(() => ({
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
}));

const StyledLinkTitle = styled(Link)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	color: theme.palette.black,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeight.semiBold,
}));

const StyledLinkVendor = styled(Link)(({ theme }) => ({
	...theme.typography.dmSans,
	color: theme.palette.black,
	fontSize: theme.fontSizes.medium,
}));

const StyledProductInfoWrapper = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	margin: "15px 0 0",
	minHeight: "90px",
	padding: "8px",
	position: "relative",
}));

const StyledTypography = styled(Typography)(() => ({
	WebkitBoxOrient: "vertical",
	WebkitLineClamp: 1,
	display: "-webkit-box",
	lineHeight: "28px",
	overflow: "hidden",
	textOverflow: "ellipsis",
}));

const StyledSmallTypography = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	color: theme.palette.fontGray,
	fontWeight: theme.fontWeight.medium,
	lineHeight: "22px",
}));

const CustomHeartIcon = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isWishlistProduct",
})<CustomHeartIconProps>(({ isWishlistProduct, theme }) => ({
	"&:hover": {
		color: isWishlistProduct ? theme.palette.fontGray : theme.palette.red,
		transform: "scale(1.3)",
	},
	color: isWishlistProduct ? theme.palette.red : theme.palette.fontGray,
	cursor: "pointer",
	position: "absolute",
	right: "10px",
	top: "10px",
	transform: "scale(1.15)",
	transition: "all 0.3s ease",
}));

const CustomIcon = styled(IconButton)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.gray,
		color: theme.palette.black,
		scale: "1.1",
	},
	backgroundColor: theme.palette.black,
	color: theme.palette.white,
	display: "flex",
	transition: "all 0.3s ease",
}));

export {
	CustomHeartIcon,
	CustomIcon,
	CustomSliderDot,
	StyledCard,
	StyledCardWrapper,
	StyledImage,
	StyledImageWrapper,
	StyledLinkTitle,
	StyledLinkVendor,
	StyledProductInfo,
	StyledProductInfoWrapper,
	StyledSmallTypography,
	StyledTypography,
};
