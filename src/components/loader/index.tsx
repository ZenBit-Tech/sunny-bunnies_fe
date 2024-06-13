import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader: React.FC = () => {
	return (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				height: "100%",
				justifyContent: "center",
				width: "100%",
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export { Loader };
