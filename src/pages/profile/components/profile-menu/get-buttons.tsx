import { Theme } from "@mui/material/styles";
import React from "react";

import { HeartIcon } from "~/assets/icons/heart-icon.tsx";
import { LogoutIcon } from "~/assets/icons/logout-icon.tsx";
import { MessageIcon } from "~/assets/icons/message-icon.tsx";
import { OrdersIcon } from "~/assets/icons/orders-icon.tsx";
import { SettingsIcon } from "~/assets/icons/settings-icon.tsx";
import { UserIcon } from "~/assets/icons/user-icon.tsx";
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
				<IconWrapper
					color={theme.palette.lightGray}
					icon={<SettingsIcon fontSize="small" />}
				/>
			),
			text: t("Profile.settings"),
			to: AppRoute.PROFILE_SETTINGS,
		},
		{
			color: theme.palette.lightGreen,
			startIcon: (
				<IconWrapper
					color={theme.palette.lightGreen}
					icon={<MessageIcon fontSize="small" />}
				/>
			),
			text: t("Profile.support"),
			to: AppRoute.PROFILE_SUPPORT,
		},
		{
			color: theme.palette.lightGray,
			startIcon: (
				<IconWrapper
					color={theme.palette.lightGray}
					icon={<LogoutIcon fontSize="small" />}
				/>
			),
			text: t("Profile.logout"),
			to: "/",
		},
	);

	return buttons;
};

export { getButtonsConfig };
