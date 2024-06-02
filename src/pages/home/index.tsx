import { Box } from "@mui/material";
import React from "react";

import {
	CategoryCarousel,
	Newsletter,
	Products,
	TopInfoSection,
} from "./components/index.ts";

const Home: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flex: 1,
				flexDirection: "column",
				padding: "15px 0",
			}}
		>
			<TopInfoSection />
			<CategoryCarousel />
			<Products />
			<Newsletter />
		</Box>
	);
};

export { Home };
