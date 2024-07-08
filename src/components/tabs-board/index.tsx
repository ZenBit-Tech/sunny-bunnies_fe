import React from "react";
import { useLocation } from "react-router-dom";

import { CheckIcon } from "~/assets/icons/check-icon.tsx";
import theme from "~/theme";

import { StyledTabLabel, StyledNumberCircle, StyledLabelText } from "./styles";

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
		<StyledTabLabel
			bgcolor={isBeforeActive ? theme.palette.lightGreen : theme.palette.white}
		>
			<StyledNumberCircle
				bgcolor={isCompleted ? theme.palette.primary.dark : "transparent"}
				isBeforeActive={isBeforeActive}
				isCompleted={isCompleted}
			>
				{isCompleted ? <CheckIcon /> : `0${number}`}
			</StyledNumberCircle>
			<StyledLabelText variant="body1">{label}</StyledLabelText>
		</StyledTabLabel>
	);
};

export { TabsBoard };
