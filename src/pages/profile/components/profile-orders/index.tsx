import React from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

const ProfileOrders: React.FC = () => {
	const { t } = useTranslation();
	return <Box>{t("Profile.orders")}</Box>;
};

export { ProfileOrders };
