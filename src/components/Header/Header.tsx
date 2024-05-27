import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { NotificationIcon } from "~/assets/icons/notification-icon.tsx";
import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { UserIcon } from "~/assets/icons/user-icon.tsx";
import { MainLogo } from "~/components/Header/MainLogo.tsx";
import { NavHeader } from "~/components/Header/NavHeader.tsx";
import {
	ButtonsContainer,
	HeaderContainer,
	IconsSection,
	StyledButtonLogIn,
	StyledButtonSignUp,
	StyledContainer,
} from "~/components/Header/styles.ts";
import { useHeaderLinks } from "~/libs/constants/header-links.ts";

export const Header = () => {
	const { headerLogOutLinks, headerLoginLinks } = useHeaderLinks();
	const { t } = useTranslation();
	const isLoggedIn = false;
	return (
		<HeaderContainer>
			<StyledContainer>
				<Box>
					<MainLogo />
				</Box>
				{isLoggedIn ? (
					<NavHeader links={headerLoginLinks} />
				) : (
					<NavHeader links={headerLogOutLinks} />
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
