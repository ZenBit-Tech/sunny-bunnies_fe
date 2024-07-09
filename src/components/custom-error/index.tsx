import React from "react";

import { Typography } from "@mui/material";
import { t } from "i18next";

import { ErrorBox } from "./styles.ts";

type Properties = {
	errorMessage?: string;
};

const CustomError: React.FC<Properties> = ({
	errorMessage = t("Error.unknownError"),
}) => {
	return (
		<ErrorBox>
			<Typography color="error" variant="body1">
				{errorMessage}
			</Typography>
		</ErrorBox>
	);
};

export { CustomError };
