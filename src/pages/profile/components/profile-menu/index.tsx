import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Avatar, Typography, useTheme } from "@mui/material";

import { useAppSelector } from "~/redux/hooks.ts";

import { getButtonsConfig } from "./get-buttons.tsx";
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
	const theme = useTheme();

	const buttonsConfig = useMemo(
		() => getButtonsConfig(t, theme, user?.profile.role),
		[t, theme, user?.profile.role],
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
