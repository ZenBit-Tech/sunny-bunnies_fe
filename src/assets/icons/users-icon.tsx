import React from "react";

import { SvgIconProps } from "@mui/material";

const UsersIcon: React.FC<SvgIconProps> = (props) => {
	return (
		<svg
			fill="none"
			height="25"
			viewBox="0 0 24 25"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="12" cy="6.09521" r="4" stroke="#333333" strokeWidth="1.5" />
			<path
				d="M18 9.09521C19.6569 9.09521 21 7.97593 21 6.59521C21 5.2145 19.6569 4.09521 18 4.09521"
				stroke="#333333"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
			<path
				d="M6 9.09521C4.34315 9.09521 3 7.97593 3 6.59521C3 5.2145 4.34315 4.09521 6 4.09521"
				stroke="#333333"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
			<ellipse
				cx="12"
				cy="17.0952"
				rx="6"
				ry="4"
				stroke="#333333"
				strokeWidth="1.5"
			/>
			<path
				d="M20 19.0952C21.7542 18.7105 23 17.7363 23 16.5952C23 15.4541 21.7542 14.4799 20 14.0952"
				stroke="#333333"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
			<path
				d="M4 19.0952C2.24575 18.7105 1 17.7363 1 16.5952C1 15.4541 2.24575 14.4799 4 14.0952"
				stroke="#333333"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
		</svg>
	);
};

export { UsersIcon };
