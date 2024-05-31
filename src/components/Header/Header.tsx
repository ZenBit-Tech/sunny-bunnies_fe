import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { NotificationIcon } from "~/assets/icons/notification-icon.tsx";
import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { UserIcon } from "~/assets/icons/user-icon.tsx";
import { MainLogo } from "~/components/Header/main-logo.tsx";
import { NavHeader } from "~/components/Header/nav-header.tsx";
import {
	ButtonsContainer,
	HeaderContainer,
	HeaderLogOutNav,
	IconsSection,
	StyledButtonLogIn,
	StyledButtonSignUp,
	StyledContainer,
} from "~/components/Header/styles.ts";
import {
	headerLogOutLinks,
	headerLoginLinks,
} from "~/libs/constants/header-links.ts";
import { useAppSelector } from "~/redux/hooks/use-app-selector.ts";
import { RootState } from "~/redux/store.ts";

export const Header: React.FC = () => {
	const { t } = useTranslation();
	const isLoggedIn = Boolean(
		useAppSelector((state: RootState) => state.auth.accessToken),
	);

	return (
		<HeaderContainer>
			<StyledContainer>
				<Box>
					<MainLogo />
				</Box>
				{isLoggedIn ? (
					<NavHeader links={headerLoginLinks} />
				) : (
					<HeaderLogOutNav>
						<NavHeader links={headerLogOutLinks} />
					</HeaderLogOutNav>
				)}
				<Box>
					<IconsSection>
						{!isLoggedIn ? (
							<>
								<ButtonsContainer>
									<StyledButtonLogIn href="#">
										{t("header.buttons.LogIn")}
									</StyledButtonLogIn>

									<StyledButtonSignUp href="#">
										{t("header.buttons.SignUp")}
									</StyledButtonSignUp>
								</ButtonsContainer>

								<NotificationIcon />
								<UserIcon />
								<ShopIcon />
							</>
						) : (
							<ShopIcon />
						)}
					</IconsSection>
				</Box>
			</StyledContainer>
		</HeaderContainer>
	);
};