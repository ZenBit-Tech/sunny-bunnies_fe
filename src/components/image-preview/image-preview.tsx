import { Box } from "@mui/material";
import React from "react";

import avatar from "~/assets/images/user/avatar.png";
import theme from "~/theme.ts";

import styles from "./styles.module.css";

interface ImagePreviewProps {
	file: File | null | string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ file }) => {
	let src: string;

	if (file instanceof File) {
		src = URL.createObjectURL(file);
	} else if (typeof file === "string") {
		src = file;
	} else {
		src = avatar;
	}

	return (
		<Box
			alignItems="center"
			display="flex"
			flexDirection="column"
			gap={1}
			sx={{
				border: `1px solid ${theme.palette.lightGreen}`,
				borderRadius: "60px",
				height: "120px",
				overflow: "hidden",
				width: "120px",
			}}
		>
			<img alt="Preview" className={styles["image"]} src={src} />
		</Box>
	);
};

export { ImagePreview };
