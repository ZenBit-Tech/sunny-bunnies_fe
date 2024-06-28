import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProfileWishlist: React.FC = () => {
	const { t } = useTranslation();

	return <Box>{t("Profile.wishlist")}</Box>;
};

export { ProfileWishlist };
