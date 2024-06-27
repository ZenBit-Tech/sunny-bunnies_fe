import { Box } from "@mui/material";
import React from "react";

type IconWrapperProps = {
	color: string;
	icon: React.ReactNode;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ color, icon }) => {
	return (
		<Box
			sx={{
				alignItems: "center",
				backgroundColor: color,
				borderRadius: "50%",
				display: "flex",
				height: "32px",
				justifyContent: "center",
				padding: "6px",
				width: "32px",
			}}
		>
			{icon}
		</Box>
	);
};

export { IconWrapper };
