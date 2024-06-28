import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

const ProfileWishlist: React.FC = () => {
	const { t } = useTranslation();

	return <Box>{t("Profile.wishlist")}</Box>;
};

export { ProfileWishlist };
