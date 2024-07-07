import React from "react";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import { t } from "i18next";

import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { AppRoute } from "~/libs/constants/index.ts";

import {
	ButtonsContainer,
	IconsSection,
	StyledBadge,
	StyledButtonLogIn,
	StyledButtonSignUp,
} from "../styles.ts";

const GuestUserContent: React.FC = () => {
	return (
		<>
			<IconsSection>
				<ButtonsContainer>
					<StyledButtonLogIn href={AppRoute.SIGN_IN}>
						{t("header.buttons.LogIn")}
					</StyledButtonLogIn>
					<StyledButtonSignUp href={AppRoute.SIGN_UP}>
						{t("header.buttons.SignUp")}
					</StyledButtonSignUp>
				</ButtonsContainer>
				<StyledBadge
					// Pass here you product request count or order count
					badgeContent={2}
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
				</StyledBadge>
			</IconsSection>
		</>
	);
};

export { GuestUserContent };
