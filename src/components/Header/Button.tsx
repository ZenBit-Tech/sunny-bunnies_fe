import React from "react";

import { ButtonProps, Button as MuiButton } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
	href?: string;
}

export const Button: React.FC<CustomButtonProps> = ({
	children,
	href,
	...props
}: CustomButtonProps) => {
	if (href) {
		return (
			<MuiButton component="a" href={href} {...props}>
				{children}
			</MuiButton>
		);
	}

	return (
		<MuiButton component="button" {...props}>
			{children}
		</MuiButton>
	);
};
