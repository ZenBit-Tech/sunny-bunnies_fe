import React from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { CustomIconButton } from "./styles.ts";

type Properties = {
	isAscending: boolean;
};

const CustomArrowIcon: React.FC<Properties> = ({ isAscending }) => {
	return (
		<CustomIconButton>
			{isAscending ? <ExpandMoreIcon /> : <ExpandLessIcon />}
		</CustomIconButton>
	);
};

export { CustomArrowIcon };
