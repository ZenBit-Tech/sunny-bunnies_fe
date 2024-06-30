import React from "react";

import { SvgIconProps } from "@mui/material";

const ArrowDownIcon: React.FC = ({ ...props }: SvgIconProps) => {
	return (
		<svg
			fill="none"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M19.5 9.09521L12 16.5952L4.5 9.09521"
				stroke="#A0A8B0"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};

export { ArrowDownIcon };
