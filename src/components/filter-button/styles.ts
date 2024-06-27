import { Button, ButtonProps, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

type FilterButtonProps = { selected: boolean } & ButtonProps;

const StyledFilterButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== "selected",
})<FilterButtonProps>(({ selected, theme }) => ({
	...theme.typography.dmSans,
	"&:focus": {
		backgroundColor: selected ? colors.pastelGreen : theme.palette.action.focus,
		border: "none",
	},
	"&:hover": {
		backgroundColor: selected ? colors.pastelGreen : theme.palette.action.hover,
		border: "none",
	},
	backgroundColor: selected ? colors.pastelGreen : "transparent",
	border: "none",
	textTransform: "none",
	transition: "background-color 0.3s",
}));

export { StyledFilterButton };
