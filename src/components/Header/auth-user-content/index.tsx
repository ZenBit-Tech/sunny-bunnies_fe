import React from "react";
import { Link } from "react-router-dom";

import { Box, IconButton } from "@mui/material";

import { BoxIcon } from "~/assets/icons/box-icon.tsx";
import { LetterIcon } from "~/assets/icons/letter-icon.tsx";
import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { UserIcon } from "~/assets/icons/user-icon.tsx";
import {
	AppRoute,
	headerLoginLinks,
	userRole,
} from "~/libs/constants/index.ts";

import { NavHeader } from "../nav-header.tsx";
import { IconsSection, StyledBadge } from "../styles.ts";

type Properties = {
	role: string;
};
const AuthUserContent: React.FC<Properties> = ({ role }) => {
	return (
		<>
			<NavHeader links={headerLoginLinks} />
			<IconsSection>
				<Box>
					<IconButton component={Link} to={AppRoute.PROFILE}>
						<UserIcon />
					</IconButton>
					<StyledBadge badgeContent={2}>
						<IconButton component={Link} to={AppRoute.HOME}>
							<LetterIcon />
						</IconButton>
					</StyledBadge>
					{role === userRole.BUYER ? (
						<StyledBadge badgeContent={2}>
							<IconButton component={Link} to={AppRoute.HOME}>
								<ShopIcon />
							</IconButton>
						</StyledBadge>
					) : (
						<StyledBadge badgeContent={2}>
							<IconButton component={Link} to={AppRoute.HOME}>
								<BoxIcon />
							</IconButton>
						</StyledBadge>
					)}
				</Box>
			</IconsSection>
		</>
	);
};

export { AuthUserContent };
