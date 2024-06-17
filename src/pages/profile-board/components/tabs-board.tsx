import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

import { CheckIcon } from "~/assets/icons/check-icon.tsx";
import theme from "~/theme.ts";

type TabLabelProps = {
	label: string;
	number: number;
	tabRoute: string;
	tabRoutes: { label: string; number: number; route: string }[];
};

const TabsBoard: React.FC<TabLabelProps> = ({
	label,
	number,
	tabRoute,
	tabRoutes,
}) => {
	const { pathname } = useLocation();

	const isBeforeActive =
		tabRoutes.findIndex((tab) => tab.route === tabRoute) <=
		tabRoutes.findIndex((tab) => tab.route === pathname);
	const isCompleted =
		tabRoutes.findIndex((tab) => tab.route === pathname) >= number;

	return (
		<Box
			alignItems="center"
			bgcolor={isBeforeActive ? theme.palette.lightGreen : theme.palette.white}
			display="flex"
			height="100%"
			padding="16px 24px"
			width="100%"
		>
			<Box
				alignItems="center"
				bgcolor={isCompleted ? theme.palette.primary.dark : "transparent"}
				border={`2px solid ${
					isBeforeActive ? theme.palette.primary.dark : theme.palette.darkGrey
				}`}
				borderRadius="50%"
				color={theme.palette.primary.dark}
				display="flex"
				height="3em"
				justifyContent="center"
				marginRight={1}
				sx={{ display: { tablet: "flex", xs: "none" } }}
				width="3em"
			>
				{isCompleted ? <CheckIcon /> : `0${number}`}
			</Box>
			<Typography
				color="primary"
				sx={{ fontSize: theme.typography.dmSansBold, fontWeight: "bold" }}
				variant="body1"
			>
				{label}
			</Typography>
		</Box>
	);
};

export { TabsBoard };
