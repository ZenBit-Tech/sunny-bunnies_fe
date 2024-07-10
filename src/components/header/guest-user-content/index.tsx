import React from "react";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import { t } from "i18next";

import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { AppRoute, headerLoginLinks } from "~/libs/constants/index.ts";

import { NavHeader } from "../nav-header/index.tsx";
import { ButtonsContainer, IconsSection, StyledBadge } from "../styles.ts";
import { StyledButtonLogIn, StyledButtonSignUp } from "./styles.ts";

const GuestUserContent: React.FC = () => {
	return (
		<>
			<NavHeader links={headerLoginLinks} />
			<IconsSection>
				<ButtonsContainer>
					<StyledButtonLogIn href={AppRoute.SIGN_IN}>
						{t("header.buttons.LogIn")}
					</StyledButtonLogIn>
					<StyledButtonSignUp href={AppRoute.SIGN_UP}>
						{t("header.buttons.SignUp")}
					</StyledButtonSignUp>
				</ButtonsContainer>
				<StyledBadge badgeContent={2}>
					<IconButton component={Link} to={AppRoute.HOME}>
						<ShopIcon />
					</IconButton>
				</StyledBadge>
			</IconsSection>
		</>
	);
};

export { GuestUserContent };
