import React from "react";
import { Link } from "react-router-dom";

import { Badge, Box, IconButton } from "@mui/material";

import { BoxIcon } from "~/assets/icons/box-icon.tsx";
import { ChatIcon } from "~/assets/icons/chat-icon.tsx";
import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { UserIcon } from "~/assets/icons/user-icon.tsx";
import {
	AppRoute,
	headerLoginLinks,
	userRole,
} from "~/libs/constants/index.ts";

import { NavHeader } from "../nav-header.tsx";
import { IconsSection } from "../styles.ts";

type Properties = {
	role: string;
};
const AuthUserContnet: React.FC<Properties> = ({ role }) => {
	return (
		<>
			<NavHeader links={headerLoginLinks} />
			<IconsSection>
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
					<Box>
						<IconButton component={Link} to={AppRoute.HOME}>
							<ChatIcon />
						</IconButton>
						<IconButton component={Link} to={AppRoute.PROFILE}>
							<UserIcon />
						</IconButton>
						{role === userRole.BUYER ? (
							<IconButton component={Link} to={AppRoute.HOME}>
								<ShopIcon />
							</IconButton>
						) : (
							<IconButton component={Link} to={AppRoute.HOME}>
								<BoxIcon />
							</IconButton>
						)}
					</Box>
				</Badge>
			</IconsSection>
		</>
	);
};

export { AuthUserContnet };
