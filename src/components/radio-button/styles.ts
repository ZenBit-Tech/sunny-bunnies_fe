import styled from "@emotion/styled";
import React from "react";

import theme from "~/theme.ts";

const CustomIcon = styled("span")(() => ({
	".Mui-focusVisible &": {
		outlineOffset: 2,
	},
	backgroundImage:
		"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
	borderRadius: "50%",
	boxShadow: `0 0 0 1px ${theme.palette.darkGrey}`,
	height: 16,
	width: 16,
}));

const CustomCheckedIcon = styled(CustomIcon)(() => ({
	"&::before": {
		backgroundImage: `radial-gradient(${theme.palette.common.white},${theme.palette.common.white} 28%,transparent 32%)`,
		content: '""',
		display: "block",
		height: 16,
		width: 16,
	},
	backgroundColor: theme.palette.primary.main,
	backgroundImage:
		"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
	boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
	"input:hover ~ &": {
		backgroundColor: theme.palette.primary.dark,
	},
}));

export { CustomCheckedIcon, CustomIcon };
