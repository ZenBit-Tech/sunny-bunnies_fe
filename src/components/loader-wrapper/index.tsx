import React, { ReactNode } from "react";

import { Box } from "@mui/material";

import { Loader } from "../index.ts";

type LoaderWrapperProperties = {
	children: ReactNode;
	isLoading: boolean;
};

const LoaderWrapper: React.FC<LoaderWrapperProperties> = ({
	children,
	isLoading,
}) => {
	if (isLoading) {
		return (
			<Box alignItems="center" display="flex" minHeight="550px">
				<Loader />
			</Box>
		);
	}

	return <>{children}</>;
};

export { LoaderWrapper };
