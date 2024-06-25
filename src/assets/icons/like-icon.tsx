import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

import { colors } from "~/libs/constants/index.ts";

const LikeIcon: React.FC<SvgIconProps> = (props) => {
	return (
		<SvgIcon
			{...props}
			sx={{
				color: "currentColor",
				...props.sx,
			}}
		>
			<svg
				fill={colors.white}
				height="18px"
				viewBox="0 0 20 18"
				width="20px"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.95948 15.378C3.25168 13.2861 0.0712891 10.829 0.0712891 6.56968C0.0712891 1.86765 5.37502 -1.46694 9.71415 3.05354L11.6427 4.98605C11.9252 5.2692 12.3831 5.26912 12.6655 4.98587C12.9479 4.70261 12.9478 4.24345 12.6653 3.9603L10.8023 2.0929C14.8909 -0.908428 19.357 2.25488 19.357 6.56968C19.357 10.829 16.1766 13.286 13.4688 15.378C13.1874 15.5954 12.911 15.8089 12.6439 16.0201C11.6427 16.8115 10.6784 17.5566 9.71415 17.5566C8.74986 17.5566 7.78558 16.8115 6.78439 16.0201C6.51726 15.8089 6.24093 15.5954 5.95948 15.378Z"
					fill="currentColor"
					stroke={colors.likeIconColor}
					strokeWidth="1.2"
				/>
			</svg>
		</SvgIcon>
	);
};

export { LikeIcon };
