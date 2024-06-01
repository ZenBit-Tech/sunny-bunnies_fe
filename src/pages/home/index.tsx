import { Box } from "@mui/material";
import React from "react";

import { CategoryCarousel, TopInfoSection } from "./libs/components/index.ts";

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
		</Box>
	);
};

export { Home };
