import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import { Interpolation } from "@mui/system";

import {
	colors,
	fontFamily,
	fontSizes,
	fontWeight,
} from "./libs/constants/index.ts";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		tablet: true;
	}
	interface Palette {
		borderGray: string;
		darkGrey: string;
		fontGray: string;
		gray: string;
		lightGreen: string;
		secondaryTextGray: string;
		shadowColor: string;
		transparent: string;
		white: string;
	}
	interface PaletteOptions {
		borderGray: string;
		darkGrey: string;
		fontGray: string;
		gray: string;
		lightGreen: string;
		secondaryTextGray: string;
		shadowColor: string;
		transparent: string;
		white: string;
	}
	interface Theme {
		fontSizes: {
			extraLarge: string;
			large: string;
			lg: string;
			medium: string;
			mediumLarge: string;
			small: string;
			title: string;
			xl: string;
			xs: string;
			xxl: string;
		};
		fontWeight: {
			bold: number;
			medium: number;
			regular: number;
			semiBold: number;
		};
	}
	interface ThemeOptions {
		fontSizes: {
			extraLarge: string;
			large: string;
			lg: string;
			medium: string;
			mediumLarge: string;
			small: string;
			title: string;
			xl: string;
			xs: string;
			xxl: string;
		};
		fontWeight: {
			bold: number;
			medium: number;
			regular: number;
			semiBold: number;
		};
	}
}

const xl = 1920;
const lg = 1280;
const tablet = 1024;
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
			tablet,
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
						fontSize: fontSizes.large,
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
						backgroundColor: colors.lightGray,
						border: "none",
						borderRadius: "12px",
						fontFamily: fontFamily.piayfairDisplay,
						fontSize: fontSizes.large,
						fontWeight: fontWeight.regular,
						padding: "16px 24px",
						textTransform: "none",
					},
				},
				{
					props: { variant: "text" },
					style: {
						"& .MuiTouchRipple-root": {
							display: "none",
						},
						"&:active": {
							background: "transparent",
							backgroundColor: "transparent",
						},
						"&:hover, &:focus": {
							background: "transparent",
							backgroundColor: "transparent",
							boxShadow: "none",
						},
						fontFamily: fontFamily.piayfairDisplay,
						fontSize: fontSizes.medium,
						fontWeight: fontWeight.bold,
						textTransform: "none",
					},
				},
				{
					props: { variant: "small_icon" },
					style: {
						"& .MuiButton-icon": {
							margin: 0,
						},
						"& .MuiButton-startIcon": {
							margin: 0,
						},
						backgroundColor: colors.lightGreen,
						borderRadius: "100px",
						height: "44px",
						margin: 0,
						minWidth: "44px",
						padding: "10px",
						width: "44px",
					},
				},
			],
		},
	},
	fontSizes: {
		extraLarge: fontSizes.extraLarge,
		large: fontSizes.large,
		lg: fontSizes.lg,
		medium: fontSizes.medium,
		mediumLarge: fontSizes.mediumLarge,
		small: fontSizes.small,
		title: fontSizes.title,
		xl: fontSizes.xl,
		xs: fontSizes.xs,
		xxl: fontSizes.xxl,
	},
	fontWeight: {
		bold: fontWeight.bold,
		medium: fontWeight.medium,
		regular: fontWeight.regular,
		semiBold: fontWeight.semiBold,
	},
	palette: {
		borderGray: colors.borderGray,
		darkGrey: colors.darkGrey,
		fontGray: colors.gray,
		gray: colors.grayishRed,
		lightGreen: colors.lightGreen,
		primary: {
			dark: colors.hoverBlack,
			main: colors.black,
		},
		secondary: {
			main: colors.gray,
		},
		secondaryTextGray: colors.secondaryTextGray,
		shadowColor: colors.shadowColor,
		transparent: colors.transparent,
		white: colors.white,
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
		playfairDisplayBold: {
			fontFamily: fontFamily.piayfairDisplay,
			fontSize: fontSizes.medium,
			fontWeight: fontWeight.bold,
			letterSpacing: "-0.4%",
			lineHeight: "28px",
		},
		playfairDisplayTitle: {
			fontFamily: fontFamily.piayfairDisplay,
			fontSize: fontSizes.xl,
			fontWeight: fontWeight.semiBold,
			letterSpacing: "-1%",
			lineHeight: "37px",
		},
	},
	zIndex: {
		low: 0,
		medium: 1,
	},
});

export default responsiveFontSizes(theme);
