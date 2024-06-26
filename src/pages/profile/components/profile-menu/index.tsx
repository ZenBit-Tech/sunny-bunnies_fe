import { Avatar, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { LogoutIcon } from "~/assets/icons/logout-icon.tsx";
import { MessageIcon } from "~/assets/icons/message-icon.tsx";
import { SettingsIcon } from "~/assets/icons/settings-icon.tsx";
import { UserIcon } from "~/assets/icons/user-icon.tsx";
import { IconWrapper } from "~/components/index.ts";
import { AppRoute, colors } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";

import {
	StyledButtonContainer,
	StyledButtonsContainer,
	StyledMenuButton,
	StyledMenuContainer,
} from "./styles.ts";

const ProfileMenu: React.FC = () => {
	const { t } = useTranslation();
	const user = useAppSelector((state) => state.auth.user);
	const location = useLocation();

	const buttonsConfig = useMemo(
		() => [
			{
				color: colors.pastelGreen,
				startIcon: (
					<IconWrapper color={colors.pastelGreen} icon={<UserIcon />} />
				),
				text: t("Profile.personalInformation"),
				to: AppRoute.PROFILE,
			},
			{
				color: colors.grayishRed,
				startIcon: (
					<IconWrapper
						color={colors.grayishRed}
						icon={<SettingsIcon fontSize="small" />}
					/>
				),
				text: t("Profile.settings"),
				to: AppRoute.PROFILE_SETTINGS,
			},
			{
				color: colors.pastelGreen,
				startIcon: (
					<IconWrapper
						color={colors.pastelGreen}
						icon={<MessageIcon fontSize="small" />}
					/>
				),
				text: t("Profile.support"),
				to: AppRoute.PROFILE_SUPPORT,
			},
			{
				color: colors.pastelGreen,
				startIcon: (
					<IconWrapper
						color={colors.grayishRed}
						icon={<LogoutIcon fontSize="small" />}
					/>
				),
				text: t("Profile.logout"),
				to: "/",
			},
		],
		[t],
	);

	return (
		<StyledMenuContainer>
			<Avatar
				alt={user?.name}
				src={user?.profile.profilePhoto as string}
				sx={{
					height: "120px",
					width: "120px",
				}}
			/>
			<Typography fontSize={20} variant="playfairDisplay">
				{user?.name}
			</Typography>
			<StyledButtonsContainer>
				{buttonsConfig.map((button) => {
					const isActive = location.pathname === button.to;

					return (
						<StyledButtonContainer key={button.text}>
							<StyledMenuButton
								customColor={button.color}
								isActive={isActive}
								startIcon={button.startIcon}
								to={button.to}
							>
								{button.text}
							</StyledMenuButton>
						</StyledButtonContainer>
					);
				})}
			</StyledButtonsContainer>
		</StyledMenuContainer>
	);
};

export { ProfileMenu };
