import { Box } from "@mui/material";
import React from "react";

import avatar from "~/assets/images/user/avatar.png";

const ImagePreview: React.FC<{ file: File | null }> = ({ file }) => {
	return (
		<Box
			alignItems="center"
			display="flex"
			flexDirection="column"
			gap={1}
			sx={{
				border: "1px solid #E3EEE2",
				borderRadius: "60px",
				height: "120px",
				overflow: "hidden",
				width: "120px",
			}}
		>
			{file ? (
				<img
					alt="Uploaded"
					src={URL.createObjectURL(file)}
					style={{ height: "100%", objectFit: "cover", width: "100%" }}
				/>
			) : (
				<img
					alt="Placeholder"
					src={avatar}
					style={{ height: "100%", objectFit: "cover", width: "100%" }}
				/>
			)}
		</Box>
	);
};

export { ImagePreview };
