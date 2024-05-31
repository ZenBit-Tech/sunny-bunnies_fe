import { SvgIconProps } from "@mui/material";
import React from "react";

import { StyledSvgIcon } from "~/components/Header/styles.ts";

export const TwitterIcon: React.FC = ({ ...props }: SvgIconProps) => {
	return (
		<StyledSvgIcon
			fill="none"
			height="18"
			viewBox="0 0 18 18"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M16.2271 2.92963C15.4771 3.29713 14.7421 3.44638 13.9771 3.67213C13.1363 2.72338 11.8898 2.67088 10.6921 3.11938C9.4943 3.56788 8.7098 4.66438 8.72705 5.92213V6.67213C6.2933 6.73438 4.1258 5.62588 2.72705 3.67213C2.72705 3.67213 -0.40945 9.24688 5.72705 11.9221C4.32305 12.8574 2.9228 13.4881 1.22705 13.4221C3.70805 14.7744 6.4118 15.2394 8.75255 14.5599C11.4376 13.7799 13.6441 11.7676 14.4908 8.75338C14.7434 7.83663 14.8688 6.88952 14.8636 5.93863C14.8621 5.75188 15.9961 3.85963 16.2271 2.92888V2.92963Z"
				stroke="#121212"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
		</StyledSvgIcon>
	);
};