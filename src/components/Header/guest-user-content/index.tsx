import React from "react";
import { Link } from "react-router-dom";

import { Badge, IconButton } from "@mui/material";
import { t } from "i18next";

import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { AppRoute, headerLogOutLinks } from "~/libs/constants/index.ts";

import { NavHeader } from "../nav-header.tsx";
import {
	ButtonsContainer,
	HeaderLogOutNav,
	IconsSection,
	StyledButtonLogIn,
	StyledButtonSignUp,
} from "../styles.ts";

const GuestUserContent: React.FC = () => {
	return (
		<>
			<HeaderLogOutNav>
				<NavHeader links={headerLogOutLinks} />
			</HeaderLogOutNav>
			<IconsSection>
				<ButtonsContainer>
					<StyledButtonLogIn href={AppRoute.SIGN_IN}>
						{t("header.buttons.LogIn")}
					</StyledButtonLogIn>
					<StyledButtonSignUp href={AppRoute.SIGN_UP}>
						{t("header.buttons.SignUp")}
					</StyledButtonSignUp>
				</ButtonsContainer>
				<Badge
					// Pass here you product request count or order count
					badgeContent={2}
					color="primary"
					sx={{
						"& .MuiBadge-badge": {
							right: 10,
							top: 10,
						},
					}}
				>
					<IconButton component={Link} to={AppRoute.HOME}>
						<ShopIcon />
					</IconButton>
				</Badge>
			</IconsSection>
		</>
	);
};

export { GuestUserContent };
