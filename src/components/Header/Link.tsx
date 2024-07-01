import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type RouterLinkProps = {
	to: string;
};

type CustomLinkProps = MuiLinkProps & RouterLinkProps;

export const Link: React.FC<CustomLinkProps> = ({
	children,
	sx,
	to,
	...muiProps
}: CustomLinkProps) => {
	return (
		<MuiLink component={RouterLink} sx={sx} to={to} {...muiProps}>
			{children}
		</MuiLink>
	);
};
