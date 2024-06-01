import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import { Interpolation } from "@mui/system";

import {
	colors,
	fontFamily,
	fontSizes,
	fontWeight,
} from "./libs/constants/index.ts";

const xl = 1920;
const lg = 1280;
const md = 768;
const sm = 480;
const xs = 0;

const commonPrimaryBlackButtonStyles: Interpolation<Theme> = {
	"&.Mui-disabled": {
		backgroundColor: colors.disabledButtonBg,
		color: colors.white,
	},
	"&:hover": {
		backgroundColor: colors.hoverBlack,
	},
	backgroundColor: colors.black,
	border: "none",
	borderRadius: "12px",
	color: colors.white,
	padding: "16px 24px",
	textTransform: "none",
};

const theme = createTheme({
	breakpoints: {
		values: {
			lg,
			md,
			sm,
			xl,
			xs,
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "primary_black_bold" },
					style: {
						...commonPrimaryBlackButtonStyles,
						fontFamily: fontFamily.piayfairDisplay,
						fontSize: fontSizes.medium,
						fontWeight: fontSizes.medium,
						letterSpacing: "-0.5px",
					},
				},
				{
					props: { variant: "primary_black_regular" },
					style: {
						...commonPrimaryBlackButtonStyles,
						fontFamily: fontFamily.piayfairDisplay,
						fontSize: fontSizes.large,
						fontWeight: fontWeight.regular,
					},
				},
				{
					props: { variant: "secondary_black" },
					style: {
						border: "1px solid #333333",
						borderRadius: "12px",
						fontSize: fontSizes.small,
						fontWeight: fontWeight.medium,
						padding: "8px 24px",
					},
				},
			],
		},
	},
	palette: {
		primary: {
			dark: colors.hoverBlack,
			main: colors.black,
		},
		secondary: {
			main: colors.gray,
		},
	},
	typography: {
		dmSans: {
			fontFamily: fontFamily.dmSans,
			fontSize: fontSizes.medium,
			fontWeight: fontWeight.regular,
			letterSpacing: "-1.5%",
			lineHeight: "20px",
		},
		dmSansBold: {
			fontFamily: fontFamily.dmSans,
			fontSize: fontSizes.small,
			fontWeight: fontWeight.medium,
			letterSpacing: "-1.5%",
			lineHeight: "20px",
		},
		fontFamily: [
			fontFamily.dmSans,
			fontFamily.piayfairDisplay,
			"sans-serif",
		].join(","),
		playfairDisplay: {
			fontFamily: fontFamily.piayfairDisplay,
			fontSize: fontSizes.small,
			fontWeight: fontWeight.semiBold,
			letterSpacing: "-1.5%",
			lineHeight: "20px",
		},
		playfairDisplayTitle: {
			fontFamily: fontFamily.piayfairDisplay,
			fontSize: fontSizes.xl,
			fontWeight: fontWeight.semiBold,
			letterSpacing: "-1%",
			lineHeight: "37px",
		},
	},
});

export default responsiveFontSizes(theme);
