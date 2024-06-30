import React from "react";

import { Box, CircularProgress } from "@mui/material";

const Loader: React.FC = () => {
	return (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				height: "100%",
				justifyContent: "center",
				margin: "12px",
				width: "100%",
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export { Loader };
