import { AppRoute } from "../constants/app-route.ts";

export const footerColumnsLogIn = [
	{
		links: [
			{ href: "#", label: "footer.footerColumnsLogIn.Login" },
			{ href: "#", label: "footer.footerColumnsLogIn.Wishlist" },
			{ href: "#", label: "footer.footerColumnsLogIn.Cart" },
		],
		title: "footer.footerColumnsLogIn.Shop",
	},
	{
		links: [
			{ href: "#", label: "footer.footerColumnsLogIn.AboutUs" },
			{
				href: AppRoute.TERMS_OF_USE,
				label: "footer.footerColumnsLogIn.TermsAndConditions",
			},
			{
				href: AppRoute.PRIVACY_POLICY,
				label: "footer.footerColumnsLogIn.PrivacyPolicy",
			},
			{ href: "#", label: "footer.footerColumnsLogIn.ContactUs" },
		],
		title: "footer.footerColumnsLogIn.Company",
	},
	{
		links: [
			{ href: "#", label: "footer.footerColumnsLogIn.FAQs" },
			{
				href: "#",
				label: "footer.footerColumnsLogIn.ShippingAndDelivery",
			},
			{ href: "#", label: "footer.footerColumnsLogIn.RentYourCloset" },
			{ href: "#", label: "footer.footerColumnsLogIn.ResellYourCloset" },
		],
		title: "footer.footerColumnsLogIn.Help",
	},
];

export const footerColumnsLogOut = [
	{
		links: [
			{ href: "#", label: "footer.footerColumnsLogOut.MyAccount" },
			{ href: "#", label: "footer.footerColumnsLogOut.Login" },
			{ href: "#", label: "footer.footerColumnsLogOut.Wishlist" },
			{ href: "#", label: "footer.footerColumnsLogOut.Cart" },
		],
		title: "footer.footerColumnsLogOut.Shop",
	},
	{
		links: [
			{ href: "#", label: "footer.footerColumnsLogOut.ShippingPolicy" },
			{ href: "#", label: "footer.footerColumnsLogOut.ReturnsAndRefunds" },
			{ href: "#", label: "footer.footerColumnsLogOut.CookiesPolicy" },
			{ href: "#", label: "footer.footerColumnsLogOut.FrequentlyAsked" },
		],
		title: "footer.footerColumnsLogOut.Information",
	},
	{
		links: [
			{ href: "#", label: "footer.footerColumnsLogOut.AboutUs" },
			{
				href: AppRoute.TERMS_OF_USE,
				label: "footer.footerColumnsLogOut.TermsAndConditions",
			},
			{
				href: AppRoute.PRIVACY_POLICY,
				label: "footer.footerColumnsLogOut.PrivacyPolicy",
			},
			{ href: "#", label: "footer.footerColumnsLogOut.ContactUs" },
		],
		title: "footer.footerColumnsLogOut.Company",
	},
];
