import { adaptV4Theme, createTheme, responsiveFontSizes } from "@mui/material";

// colors

const xl = 1920;
const lg = 1280;
const md = 768;
const sm = 480;
const xs = 0;

const theme = createTheme(
	adaptV4Theme({
		breakpoints: {
			values: {
				lg,
				md,
				sm,
				xl,
				xs,
			},
		},
	}),
);

export default responsiveFontSizes(theme);
