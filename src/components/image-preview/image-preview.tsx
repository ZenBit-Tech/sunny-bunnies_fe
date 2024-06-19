import { Box } from "@mui/material";
import React from "react";

import avatar from "~/assets/images/user/avatar.png";
import theme from "~/theme.ts";

import styles from "./styles.module.css";

const ImagePreview: React.FC<{ file: File | null }> = ({ file }) => {
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
			{file ? (
				<img
					alt="Uploaded"
					className={styles["image"]}
					src={URL.createObjectURL(file)}
				/>
			) : (
				<img alt="Placeholder" className={styles["image"]} src={avatar} />
			)}
		</Box>
	);
};

export { ImagePreview };
