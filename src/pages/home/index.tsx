import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
	const { t } = useTranslation();

	return <div>{t("homePage.home")}</div>;
};

export { Home };
