import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

const ProfileSettings: React.FC = () => {
	const { t } = useTranslation();

	return <Box>{t("Profile.settings")}</Box>;
};

export { ProfileSettings };
