import Radio, { RadioProps } from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomIcon = styled("span")(({ theme }) => ({
	".Mui-focusVisible &": {
		outline: "2px auto rgba(19,124,189,.6)",
		outlineOffset: 2,
	},
	backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
	backgroundImage:
		theme.palette.mode === "dark"
			? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
			: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
	borderRadius: "50%",
	boxShadow:
		theme.palette.mode === "dark"
			? "0 0 0 1px rgb(16 22 26 / 40%)"
			: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
	height: 16,
	"input:hover ~ &": {
		backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
	},
	width: 16,
}));

const CustomCheckedIcon = styled(CustomIcon)(({ theme }) => ({
	"&::before": {
		backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
		content: '""',
		display: "block",
		height: 16,
		width: 16,
	},
	backgroundColor: theme.palette.primary.main,
	backgroundImage:
		"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
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
