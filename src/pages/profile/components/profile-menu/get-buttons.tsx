import React from "react";

import { Theme } from "@mui/material/styles";

import { BoxIcon } from "~/assets/icons/box-icon.tsx";
import { Dashboard } from "~/assets/icons/dashbord-icon.tsx";
import HeartIcon from "~/assets/icons/heart-icon.svg?react";
import { LetterIcon } from "~/assets/icons/letter-icon.tsx";
import LogoutIcon from "~/assets/icons/logout-icon.svg?react";
import OrdersIcon from "~/assets/icons/orders-icon.svg?react";
import { ProductsIcon } from "~/assets/icons/product-icon.tsx";
import SettingsIcon from "~/assets/icons/settings-icon.svg?react";
import SupportIcon from "~/assets/icons/support-icon.svg?react";
import UserIcon from "~/assets/icons/user-icon.svg?react";
import { IconWrapper } from "~/components/index.ts";
import { AppRoute, userRole } from "~/libs/constants/index.ts";

type ButtonConfig = {
	color: string;
	onClick?: () => void;
	startIcon: React.ReactNode;
	text: string;
	to?: string;
};

type ButtonsConfigParams = {
	handleLogout?: () => void;
	role?: string;
	t: (key: string) => string;
	theme: Theme;
};

const getButtonsConfig = ({
	handleLogout,
	role,
	t,
	theme,
}: ButtonsConfigParams): ButtonConfig[] => {
	const buttons: ButtonConfig[] = [
		{
			color: theme.palette.lightGreen,
			startIcon: (
				<IconWrapper color={theme.palette.lightGreen} icon={<UserIcon />} />
			),
			text: t("Profile.personalInformation"),
			to: AppRoute.PROFILE as string,
		},
	];

	if (role === userRole.BUYER) {
		buttons.push(
			{
				color: theme.palette.lightGray,
				startIcon: (
					<IconWrapper color={theme.palette.lightGray} icon={<OrdersIcon />} />
				),
				text: t("Profile.orders"),
				to: AppRoute.PROFILE_ORDERS,
			},
			{
				color: theme.palette.lightGreen,
				startIcon: (
					<IconWrapper color={theme.palette.lightGreen} icon={<HeartIcon />} />
				),
				text: t("Profile.wishlist"),
				to: AppRoute.PROFILE_WISHLIST,
			},
		);
	}

	if (role === userRole.VENDOR) {
		buttons.push(
			{
				color: theme.palette.lightGray,
				startIcon: (
					<IconWrapper color={theme.palette.lightGray} icon={<Dashboard />} />
				),
				text: t("Profile.dashboard"),
				to: AppRoute.PROFILE_DASHBOARD,
			},
			{
				color: theme.palette.lightGreen,
				startIcon: (
					<IconWrapper
						color={theme.palette.lightGreen}
						icon={<ProductsIcon />}
					/>
				),
				text: t("Profile.orders"),
				to: AppRoute.PROFILE_ORDERS,
			},
			{
				color: theme.palette.lightGray,
				startIcon: (
					<IconWrapper color={theme.palette.lightGray} icon={<BoxIcon />} />
				),
				text: t("Profile.products"),
				to: AppRoute.PROFILE_PRODUCTS,
			},
			{
				color: theme.palette.lightGreen,
				startIcon: (
					<IconWrapper color={theme.palette.lightGreen} icon={<LetterIcon />} />
				),
				text: t("Profile.chat"),
				to: AppRoute.PROFILE_CHAT,
			},
		);
	}

	buttons.push(
		{
			color: theme.palette.lightGray,
			startIcon: (
				<IconWrapper color={theme.palette.lightGray} icon={<SettingsIcon />} />
			),
			text: t("Profile.settings"),
			to: AppRoute.PROFILE_SETTINGS,
		},
		{
			color: theme.palette.lightGreen,
			startIcon: (
				<IconWrapper color={theme.palette.lightGreen} icon={<SupportIcon />} />
			),
			text: t("Profile.support"),
			to: AppRoute.PROFILE_SUPPORT,
		},
		{
			color: theme.palette.lightGray,
			onClick: handleLogout,
			startIcon: (
				<IconWrapper color={theme.palette.lightGray} icon={<LogoutIcon />} />
			),
			text: t("Profile.logout"),
		},
	);

	return buttons;
};

export { getButtonsConfig };
