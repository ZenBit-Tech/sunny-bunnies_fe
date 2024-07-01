import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, List, ListItemIcon } from "@mui/material";

import { ChatIcon as CustomChatIcon } from "~/assets/icons/chat-icon.tsx";
import { ProductsIcon } from "~/assets/icons/product-icon.tsx";
import { UsersIcon } from "~/assets/icons/users-icon.tsx";
import { AppRoute } from "~/libs/constants/index.ts";

import { useIsRouteActive } from "../../../hooks/use-is-route-active.ts";
import { ProductBox, VerticalDivider } from "../../styles.ts";
import { StyledLink, StyledMainTab, StyledTab } from "./styles.ts";

const SidebarList: React.FC = () => {
	const { t } = useTranslation();
	const [productsOpen, setProductsOpen] = useState(false);
	const [usersOpen, setusersOpen] = useState(false);

	const handleProductsClick = useCallback(() => {
		setProductsOpen((prevOpen) => !prevOpen);
	}, []);

	const handleUsersClick = useCallback(() => {
		setusersOpen((prevOpen) => !prevOpen);
	}, []);

	return (
		<List sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
			<StyledLink
				className={useIsRouteActive(AppRoute.USER_MANAGEMENT) ? "active" : ""}
				onClick={handleUsersClick}
				to="#"
			>
				<ListItemIcon sx={{ minWidth: "36px" }}>
					<UsersIcon />
				</ListItemIcon>
				<ProductBox>
					<StyledMainTab>{t("AdminPage.users")}</StyledMainTab>
					{usersOpen ? <ExpandLess /> : <ExpandMore />}
				</ProductBox>
			</StyledLink>
			<Collapse in={usersOpen} timeout="auto" unmountOnExit>
				<List
					component="div"
					disablePadding
					sx={{
						display: "flex",
					}}
				>
					<VerticalDivider />
					<Box display="flex" flexDirection="column" gap="12px" width="100%">
						<StyledLink
							className={
								useIsRouteActive(AppRoute.MANAGEMENT_BUYERS) ? "active" : ""
							}
							to={AppRoute.MANAGEMENT_BUYERS}
						>
							<StyledTab>{t("AdminPage.buyers")}</StyledTab>
						</StyledLink>
						<StyledLink
							className={
								useIsRouteActive(AppRoute.MANAGEMENT_VENDORS) ? "active" : ""
							}
							to={AppRoute.MANAGEMENT_VENDORS}
						>
							<StyledTab>{t("AdminPage.vendors")}</StyledTab>
						</StyledLink>
					</Box>
				</List>
			</Collapse>

			<StyledLink
				className={
					useIsRouteActive(AppRoute.PRODUCT_MANAGEMENT) ? "active" : ""
				}
				onClick={handleProductsClick}
				to="#"
			>
				<ListItemIcon sx={{ minWidth: "36px" }}>
					<ProductsIcon />
				</ListItemIcon>
				<ProductBox>
					<StyledMainTab>{t("AdminPage.products")}</StyledMainTab>
					{productsOpen ? <ExpandLess /> : <ExpandMore />}
				</ProductBox>
			</StyledLink>
			<Collapse in={productsOpen} timeout="auto" unmountOnExit>
				<List
					component="div"
					disablePadding
					sx={{
						display: "flex",
					}}
				>
					<VerticalDivider />
					<Box display="flex" flexDirection="column" gap="12px" width="100%">
						<StyledLink to={AppRoute.PRODUCT_LIST}>
							<StyledTab>{t("AdminPage.request")}</StyledTab>
						</StyledLink>
						<StyledLink to={AppRoute.PRODUCT_LIST}>
							<StyledTab>{t("AdminPage.productList")}</StyledTab>
						</StyledLink>
					</Box>
				</List>
			</Collapse>
			<StyledLink
				className={useIsRouteActive(AppRoute.ADMIN_CHAT) ? "active" : ""}
				to={AppRoute.ADMIN_CHAT}
			>
				<ListItemIcon sx={{ minWidth: "36px" }}>
					<CustomChatIcon />
				</ListItemIcon>
				<StyledMainTab>{t("AdminPage.chats")}</StyledMainTab>
			</StyledLink>
		</List>
	);
};

export { SidebarList };
