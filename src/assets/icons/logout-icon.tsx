import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

export const LogoutIcon: React.FC<SvgIconProps> = (props) => {
	return (
		<SvgIcon {...props} sx={{ color: "white" }}>
			<svg
				fill="#000000"
				height="64px"
				stroke="#000000"
				strokeWidth="0.00024000000000000003"
				transform="matrix(-1, 0, 0, 1, 0, 0)"
				viewBox="0 0 24 24"
				width="64px"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z" />
			</svg>
		</SvgIcon>
	);
};
