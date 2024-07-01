import React from "react";

import { SvgIcon } from "@mui/material";

export const CheckIcon: React.FC = (props) => {
	return (
		<SvgIcon {...props} sx={{ color: "white" }} viewBox="0 0 24 30">
			<path d="M20.293 7.293L9 18.586l-5.293-5.293-1.414 1.414L9 21.414l12-12-1.414-1.414z" />
		</SvgIcon>
	);
};
