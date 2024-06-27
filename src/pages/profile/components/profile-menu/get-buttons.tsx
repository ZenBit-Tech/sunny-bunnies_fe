import { Theme } from "@mui/material/styles";
import React from "react";

import HeartIcon from "~/assets/icons/heart-icon.svg?react";
import LogoutIcon from "~/assets/icons/logout-icon.svg?react";
import OrdersIcon from "~/assets/icons/orders-icon.svg?react";
import SettingsIcon from "~/assets/icons/settings-icon.svg?react";
import SupportIcon from "~/assets/icons/support-icon.svg?react";
import UserIcon from "~/assets/icons/user-icon.svg?react";
import { IconWrapper } from "~/components/index.ts";
import { AppRoute, userRole } from "~/libs/constants/index.ts";

type ButtonConfig = {
	color: string;
	startIcon: React.ReactNode;
	text: string;
	to: string;
};

const getButtonsConfig = (
	t: (key: string) => string,
	theme: Theme,
	role?: string,
): ButtonConfig[] => {
	const buttons = [
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
			startIcon: (
				<IconWrapper color={theme.palette.lightGray} icon={<LogoutIcon />} />
			),
			text: t("Profile.logout"),
			to: "/",
		},
	);

	return buttons;
};

export { getButtonsConfig };
