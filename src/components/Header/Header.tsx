import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

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
	AppRoute,
	headerLogOutLinks,
	headerLoginLinks,
} from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";

export const Header: React.FC = () => {
	const { t } = useTranslation();
	const location = useLocation();
	const isLoggedIn = Boolean(
		useAppSelector((state: RootState) => state.auth.accessToken),
	);
	const noHeaderRoutes = [
		AppRoute.ROOT,
		AppRoute.SIGN_UP,
		AppRoute.SIGN_IN,
	] as string[];
	const isDisplayHeader = !noHeaderRoutes.includes(location.pathname);

	return (
		<HeaderContainer style={{ display: isDisplayHeader ? "block" : "none" }}>
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
									<StyledButtonLogIn href={AppRoute.SIGN_IN}>
										{t("header.buttons.LogIn")}
									</StyledButtonLogIn>

									<StyledButtonSignUp href={AppRoute.SIGN_UP}>
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
