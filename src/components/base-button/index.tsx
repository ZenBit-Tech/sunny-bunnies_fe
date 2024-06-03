import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { Interpolation, SxProps } from "@mui/system";
import React, { cloneElement } from "react";

type BaseButtonProperties = {
	children?: React.ReactNode;
	iconColor?: string;
	isLoading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	startIcon?: React.ReactNode;
	sx?: SxProps<Theme>;
} & ButtonProps;

const BaseButton: React.FC<BaseButtonProperties> = ({
	children,
	iconColor,
	isLoading,
	onClick,
	startIcon,
	sx,
	...props
}) => {
	const iconStyle: Interpolation<Theme> = {
		color: iconColor,
	};

	return (
		<Button
			onClick={onClick}
			startIcon={
				startIcon
					? cloneElement(startIcon as React.ReactElement, {
							style: iconStyle,
					  })
					: undefined
			}
			sx={sx}
			{...props}
		>
			{isLoading ? <CircularProgress color="inherit" size={24} /> : children}
		</Button>
	);
};

export { BaseButton };
