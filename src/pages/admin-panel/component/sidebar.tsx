import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Box,
	Collapse,
	Drawer,
	List,
	ListItemButton,
	ListItemIcon,
	Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ChatIcon as CustomChatIcon } from "~/assets/icons/chat-icon.tsx";
import { ProductsIcon } from "~/assets/icons/product-icon.tsx";
import { UsersIcon } from "~/assets/icons/users-icon.tsx";
import Logo from "~/assets/images/logo/big.png";
import { AppRoute } from "~/libs/constants/index.ts";
import theme from "~/theme.ts";

import { useIsRouteActive } from "../hooks/index.ts";
import { VerticalDivider } from "./style.ts";

const Sidebar: React.FC = () => {
	const { t } = useTranslation();
	const [productsOpen, setProductsOpen] = useState(false);

	const handleProductsClick = useCallback(() => {
		setProductsOpen((prevOpen) => !prevOpen);
	}, []);

	return (
		<Drawer
			sx={{
				[`& .MuiDrawer-paper`]: { boxSizing: "border-box", width: "20%" },
				flexShrink: 0,
				width: "20%",
			}}
			variant="permanent"
		>
			<Box sx={{ overflow: "auto", padding: "24px" }}>
				<Box sx={{ marginBottom: "24px", padding: "0 12px" }}>
					<Link to={AppRoute.HOME}>
						<img alt={t("AuthPage.logo")} src={Logo} />
					</Link>
				</Box>
				<List sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
					<ListItemButton
						component={Link}
						sx={{
							backgroundColor: useIsRouteActive(AppRoute.USER_MANAGEMENT)
								? theme.palette.lightGreen
								: theme.palette.transparent,
							borderRadius: "4px",
							height: "48px",
							minWidth: "36px",
							padding: "8px 12px",
						}}
						to={AppRoute.USER_MANAGEMENT}
					>
						<ListItemIcon sx={{ minWidth: "36px" }}>
							<UsersIcon />
						</ListItemIcon>
						<Typography
							sx={{
								fontSize: theme.typography.playfairDisplay,
							}}
						>
							{t("AdminPage.users")}
						</Typography>
					</ListItemButton>
					<ListItemButton
						onClick={handleProductsClick}
						sx={{
							backgroundColor: useIsRouteActive(AppRoute.PRODUCT_MANAGEMENT)
								? theme.palette.lightGreen
								: theme.palette.transparent,
							borderRadius: "4px",
							height: "48px",
							minWidth: "36px",
							padding: "8px 12px",
						}}
					>
						<ListItemIcon sx={{ minWidth: "36px" }}>
							<ProductsIcon />
						</ListItemIcon>
						<Box
							sx={{
								alignItems: "center",
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<Typography
								sx={{
									fontSize: theme.typography.playfairDisplay,
								}}
							>
								{t("AdminPage.products")}
							</Typography>
							{productsOpen ? <ExpandLess /> : <ExpandMore />}
						</Box>
					</ListItemButton>
					<Collapse in={productsOpen} timeout="auto" unmountOnExit>
						<List
							component="div"
							disablePadding
							sx={{
								display: "flex",
							}}
						>
							<VerticalDivider />
							<Box
								display="flex"
								flexDirection="column"
								gap="12px"
								width="100%"
							>
								<ListItemButton component={Link} to={AppRoute.PRODUCT_LIST}>
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
								</ListItemButton>
								<ListItemButton component={Link} to={AppRoute.PRODUCT_LIST}>
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
								</ListItemButton>
							</Box>
						</List>
					</Collapse>
					<ListItemButton
						component={Link}
						sx={{
							backgroundColor: useIsRouteActive(AppRoute.ADMIN_CHAT)
								? theme.palette.lightGreen
								: theme.palette.transparent,
							borderRadius: "4px",
							height: "48px",
							minWidth: "36px",
							padding: "8px 12px",
						}}
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
					</ListItemButton>
				</List>
			</Box>
		</Drawer>
	);
};

export { Sidebar };
