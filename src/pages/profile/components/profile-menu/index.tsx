import { Avatar, Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { LogoutIcon } from "~/assets/icons/logout-icon.tsx";
import { MessageIcon } from "~/assets/icons/message-icon.tsx";
import { SettingsIcon } from "~/assets/icons/settings-icon.tsx";
import { UserIcon } from "~/assets/icons/user-icon.tsx";
import { IconWrapper } from "~/components/index.ts";
import { colors } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";

import { StyledBaseButton, StyledButtonsContainer } from "./styles.ts";

const ProfileMenu: React.FC = () => {
	const { t } = useTranslation();
	const user = useAppSelector((state) => state.auth.user);

	const buttonsConfig = useMemo(
		() => [
			{
				startIcon: (
					<IconWrapper color={colors.pastelGreen} icon={<UserIcon />} />
				),
				text: t("Profile.personalInformation"),
				to: "/profile",
			},
			{
				startIcon: (
					<IconWrapper
						color={colors.grayishRed}
						icon={<SettingsIcon fontSize="small" />}
					/>
				),
				text: t("Profile.settings"),
				to: "/profile",
			},
			{
				startIcon: (
					<IconWrapper
						color={colors.pastelGreen}
						icon={<MessageIcon fontSize="small" />}
					/>
				),
				text: t("Profile.support"),
				to: "/profile",
			},
			{
				startIcon: (
					<IconWrapper
						color={colors.grayishRed}
						icon={<LogoutIcon fontSize="small" />}
					/>
				),
				text: t("Profile.logout"),
				to: "/profile",
			},
		],
		[t],
	);

	return (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				padding: "24px",
			}}
		>
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
				{buttonsConfig.map((button, index) => (
					<StyledBaseButton
						key={index}
						startIcon={button.startIcon}
						to={button.to}
					>
						{button.text}
					</StyledBaseButton>
				))}
			</StyledButtonsContainer>
		</Box>
	);
};

export { ProfileMenu };
