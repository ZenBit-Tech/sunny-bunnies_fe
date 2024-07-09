import React from "react";

import { SvgIconProps } from "@mui/material";

const UploadSimpleIcon: React.FC<SvgIconProps> = (props) => {
	return (
		<svg
			fill="none"
			height="32"
			viewBox="0 0 32 32"
			width="32"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.75 10.2486L16 5L21.25 10.2486"
				stroke="#6D6B6B"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<path
				d="M16 19V5.00366"
				stroke="#6D6B6B"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<path
				d="M27 19V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V19"
				stroke="#6D6B6B"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};

export { UploadSimpleIcon };
