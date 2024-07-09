import React from "react";

import { BoxProps } from "@mui/material";

import { StyledCircularElement } from "~/components/temporary/footer/styles.ts";

type CircularElementProps = {
	backgroundColor?: string;
	children?: React.ReactNode;
} & BoxProps;

const CircularElement: React.FC<CircularElementProps> = ({
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

export { CircularElement };
