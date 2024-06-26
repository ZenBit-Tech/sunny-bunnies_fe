import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, List, ListItemIcon, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { ChatIcon as CustomChatIcon } from "~/assets/icons/chat-icon.tsx";
import { ProductsIcon } from "~/assets/icons/product-icon.tsx";
import { UsersIcon } from "~/assets/icons/users-icon.tsx";
import { AppRoute } from "~/libs/constants/index.ts";
import theme from "~/theme.ts";

import { useIsRouteActive } from "../hooks/use-is-route-active.ts";
import { ProductBox, StyledLink, VerticalDivider } from "./style.ts";

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
					<Typography
						sx={{
							fontSize: theme.typography.playfairDisplay,
						}}
					>
						{t("AdminPage.users")}
					</Typography>
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
							<Typography
								sx={{
									alignItems: "center",
									display: "flex",
									fontSize: theme.typography.dmSans,
									fontWeight: theme.fontWeight.medium,
									height: "32px",
								}}
							>
								{t("AdminPage.buyers")}
							</Typography>
						</StyledLink>
						<StyledLink
							className={
								useIsRouteActive(AppRoute.MANAGEMENT_VENDORS) ? "active" : ""
							}
							to={AppRoute.MANAGEMENT_VENDORS}
						>
							<Typography
								sx={{
									alignItems: "center",
									display: "flex",
									fontSize: theme.typography.dmSans,
									fontWeight: theme.fontWeight.medium,
									height: "32px",
								}}
							>
								{t("AdminPage.vendors")}
							</Typography>
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
					<Typography
						sx={{
							fontSize: theme.typography.playfairDisplay,
						}}
					>
						{t("AdminPage.products")}
					</Typography>
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
							<Typography
								sx={{
									alignItems: "center",
									display: "flex",
									fontSize: theme.typography.dmSans,
									fontWeight: theme.fontWeight.medium,
									height: "32px",
								}}
							>
								{t("AdminPage.request")}
							</Typography>
						</StyledLink>
						<StyledLink to={AppRoute.PRODUCT_LIST}>
							<Typography
								sx={{
									alignItems: "center",
									display: "flex",
									fontSize: theme.typography.dmSans,
									fontWeight: theme.fontWeight.medium,
									height: "32px",
								}}
							>
								{t("AdminPage.productList")}
							</Typography>
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
				<Typography
					sx={{
						fontSize: theme.typography.playfairDisplay,
					}}
				>
					{t("AdminPage.chats")}
				</Typography>
			</StyledLink>
		</List>
	);
};

export { SidebarList };
