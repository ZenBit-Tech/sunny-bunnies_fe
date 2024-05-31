import { Button } from "@mui/material";
import React from "react";

import GoogleIcon from "~/assets/images/auth/google.png";
import { colors } from "~/libs/constants/index.ts";

import styles from "./styles.module.css";

const GoogleButton: React.FC = () => {
	return (
		<Button
			fullWidth
			sx={{
				"&:hover": { backgroundColor: colors.lightGray },
				backgroundColor: colors.lightGray,
				mb: 2,
				mt: 3,
				padding: "12px 24px",
			}}
			variant="contained"
		>
			<img
				alt="Google icon"
				className={styles["google__icon"]}
				src={GoogleIcon}
			/>
		</Button>
	);
};

export { GoogleButton };
