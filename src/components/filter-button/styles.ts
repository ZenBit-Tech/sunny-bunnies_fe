import { Button, ButtonProps, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

type FilterButtonProps = { selected: boolean } & ButtonProps;

const StyledFilterButton = styled(Button)<FilterButtonProps>(
	({ selected, theme }) => ({
		...theme.typography.dmSans,
		"&:hover": {
			backgroundColor: selected ? colors.pastelGreen : "transparent",
			border: "none",
		},
		backgroundColor: selected ? colors.pastelGreen : "transparent",
		border: "none",
		textTransform: "none",
	}),
);

export { StyledFilterButton };
