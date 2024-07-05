import React from "react";

import { SvgIconProps } from "@mui/material";

const DeclineIcon: React.FC = ({ ...props }: SvgIconProps) => (
	<svg
		fill="none"
		height="24"
		viewBox="0 0 24 24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle cx="12" cy="12" r="10" stroke="#333333" strokeWidth="1.5" />
		<path
			d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
			stroke="#333333"
			strokeLinecap="round"
			strokeWidth="1.5"
		/>
	</svg>
);

export { DeclineIcon };
