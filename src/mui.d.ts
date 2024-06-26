import "@mui/material/Button";
import React from "react";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		primary_black_bold: true;
		primary_black_regular: true;
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
