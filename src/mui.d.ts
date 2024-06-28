import "@mui/material/Button";
import React from "react";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		primary_black_bold: true;
		primary_black_regular: true;
		primary_outlined: true;
		secondary_black: true;
		small_icon: true;
	}
}

declare module "@mui/material/styles" {
	interface TypographyVariants {
		dmSans: React.CSSProperties;
		dmSansBold: React.CSSProperties;
		playfairDisplay: React.CSSProperties;
		playfairDisplayBold: React.CSSProperties;
		playfairDisplayTitle: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		dmSans?: React.CSSProperties;
		dmSansBold?: React.CSSProperties;
		playfairDisplay?: React.CSSProperties;
		playfairDisplayBold?: React.CSSProperties;
		playfairDisplayTitle?: React.CSSProperties;
	}
	interface BreakpointOverrides {
		tablet: true;
	}
	interface Palette {
		black: string;
		contentBlack: string;
		darkGrey: string;
		fontGray: string;
		gray: string;
		lightGreen: string;
		lightRed: string;
		pink: string;
		red: string;
		secondaryTextGray: string;
		transparent: string;
		white: string;
	}
	interface PaletteOptions {
		black: string;
		contentBlack: string;
		darkGrey: string;
		fontGray: string;
		gray: string;
		lightGreen: string;
		lightRed: string;
		pink: string;
		red: string;
		secondaryTextGray: string;
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

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		dmSans: true;
		dmSansBold: true;
		playfairDisplay: true;
		playfairDisplayBold: true;
		playfairDisplayTitle: true;
	}
}

declare module "@mui/material/styles" {
	interface ZIndex {
		low: number;
		medium: number;
	}

	interface ZIndexOptions {
		low?: number;
		medium?: number;
	}
}
