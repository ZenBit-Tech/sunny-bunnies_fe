import Radio, { RadioProps } from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomIcon = styled("span")(({ theme }) => ({
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

const CustomCheckedIcon = styled(CustomIcon)(({ theme }) => ({
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

const CustomRadioButton: React.FC<RadioProps> = (props) => {
	return (
		<Radio
			checkedIcon={<CustomCheckedIcon />}
			color="default"
			disableRipple
			icon={<CustomIcon />}
			{...props}
		/>
	);
};

export { CustomRadioButton };
