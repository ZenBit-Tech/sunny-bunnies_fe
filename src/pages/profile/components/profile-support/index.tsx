import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

const ProfileSupport: React.FC = () => {
	const { t } = useTranslation();

	return <Box>{t("Profile.support")}</Box>;
};

export { ProfileSupport };
