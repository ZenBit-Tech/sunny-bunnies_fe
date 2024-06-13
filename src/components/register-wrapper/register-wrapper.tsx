import { Box } from "@mui/material";
import React from "react";

import { Header } from "../Header/Header.tsx";

type Properties = {
	children: React.ReactNode;
};

const RegisterWrapper: React.FC<Properties> = ({ children }: Properties) => {
	return (
		<Box>
			<Header />
			{children}
		</Box>
	);
};

export { RegisterWrapper };
