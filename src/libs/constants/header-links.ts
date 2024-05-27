import { useTranslation } from "react-i18next";

export const useHeaderLinks = () => {
	const { t } = useTranslation();

	const headerLoginLinks = [
		{ href: "#", label: t("header.headerLoginLinks.Shop") },
		{ href: "#", label: t("header.headerLoginLinks.Vendors") },
		{ href: "#", label: t("header.headerLoginLinks.Messages") },
	];

	const headerLogOutLinks = [
		{ href: "#", label: t("header.headerLogOutLinks.Shop") },
		{ href: "#", label: t("header.headerLogOutLinks.ProductFeed") },
	];

	return { headerLogOutLinks, headerLoginLinks };
};
