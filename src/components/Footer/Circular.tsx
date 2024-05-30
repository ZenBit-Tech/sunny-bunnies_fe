import { BoxProps } from "@mui/material";
import React from "react";

import { StyledCircularElement } from "~/components/Footer/styles.ts";

interface CircularElementProps extends BoxProps {
	backgroundColor?: string;
	children?: React.ReactNode;
}

export const CircularElement: React.FC<CircularElementProps> = ({
	backgroundColor,
	children,
	...props
}: CircularElementProps) => {
	return (
		<StyledCircularElement
			sx={{
				backgroundColor: backgroundColor,
				height: props.height,
				width: props.width,

				...props.sx,
			}}
			{...props}
		>
			{children}
		</StyledCircularElement>
	);
};
