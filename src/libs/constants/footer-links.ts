import { useTranslation } from "react-i18next";

export const useFooterColumns = () => {
	const { t } = useTranslation();

	const footerColumnsLogIn = [
		{
			links: [
				{ href: "#", label: t("footer.footerColumnsLogIn.Login") },
				{ href: "#", label: t("footer.footerColumnsLogIn.Wishlist") },
				{ href: "#", label: t("footer.footerColumnsLogIn.Cart") },
			],
			title: t("footer.footerColumnsLogIn.Shop"),
		},
		{
			links: [
				{ href: "#", label: t("footer.footerColumnsLogIn.AboutUs") },
				{
					href: "#",
					label: t("footer.footerColumnsLogIn.TermsAndConditions"),
				},
				{
					href: "#",
					label: t("footer.footerColumnsLogIn.PrivacyPolicy"),
				},
				{ href: "#", label: t("footer.footerColumnsLogIn.ContactUs") },
			],
			title: t("footer.footerColumnsLogIn.Company"),
		},
		{
			links: [
				{ href: "#", label: t("footer.footerColumnsLogIn.FAQs") },
				{
					href: "#",
					label: t("footer.footerColumnsLogIn.ShippingAndDelivery"),
				},
				{ href: "#", label: t("footer.footerColumnsLogIn.RentYourCloset") },
				{ href: "#", label: t("footer.footerColumnsLogIn.ResellYourCloset") },
			],
			title: t("footer.footerColumnsLogIn.Help"),
		},
	];

	const footerColumnsLogOut = [
		{
			links: [
				{ href: "#", label: t("footer.footerColumnsLogOut.MyAccount") },
				{ href: "#", label: t("footer.footerColumnsLogOut.Login") },
				{ href: "#", label: t("footer.footerColumnsLogOut.Wishlist") },
				{ href: "#", label: t("footer.footerColumnsLogOut.Cart") },
			],
			title: t("footer.footerColumnsLogOut.Shop"),
		},
		{
			links: [
				{ href: "#", label: t("footer.footerColumnsLogOut.ShippingPolicy") },
				{ href: "#", label: t("footer.footerColumnsLogOut.ReturnsAndRefunds") },
				{ href: "#", label: t("footer.footerColumnsLogOut.CookiesPolicy") },
				{ href: "#", label: t("footer.footerColumnsLogOut.FrequentlyAsked") },
			],
			title: t("footer.footerColumnsLogOut.Information"),
		},
		{
			links: [
				{ href: "#", label: t("footer.footerColumnsLogOut.AboutUs") },
				{
					href: "#",
					label: t("footer.footerColumnsLogOut.TermsAndConditions"),
				},
				{
					href: "#",
					label: t("footer.footerColumnsLogOut.PrivacyPolicy"),
				},
				{ href: "#", label: t("footer.footerColumnsLogOut.ContactUs") },
			],
			title: t("footer.footerColumnsLogOut.Company"),
		},
	];

	return { footerColumnsLogIn, footerColumnsLogOut };
};
