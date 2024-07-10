import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { Avatar, Typography, useTheme } from "@mui/material";

import { logout } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";

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
	const dispatch = useAppDispatch();

	const handleLogout = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	const buttonsConfig = useMemo(
		() =>
			getButtonsConfig({
				handleLogout,
				role: user?.profile.role,
				t,
				theme,
			}),
		[t, theme, user?.profile.role, handleLogout],
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
					const checked = location.pathname === button.to;

					return (
						<StyledButtonContainer key={button.text}>
							<StyledMenuButton
								bgcolor={button.color}
								checked={checked}
								onClick={button.onClick}
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
