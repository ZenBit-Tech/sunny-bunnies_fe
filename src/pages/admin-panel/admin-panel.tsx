import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import {
	AppBar,
	Avatar,
	Box,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";

import { ArrowDownIcon } from "~/assets/icons/arrow-down-icon.tsx";
import { AppRoute } from "~/libs/constants/index.ts";
import { logout } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import theme from "~/theme.ts";

import { Sidebar, UserManagement } from "./component/index.ts";
import { VerticalDivider } from "./styles.ts";

const firstLetter = 0;

const AdminPanel: React.FC = () => {
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const user = useAppSelector((state) => state.auth.user);

	const handleMenuOpen = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			setAnchorEl(event.currentTarget);
		},
		[],
	);

	const handleMenuClose = useCallback(() => {
		setAnchorEl(null);
	}, []);

	const handleLogout = useCallback(() => {
		dispatch(logout());
		handleMenuClose();
	}, [dispatch, handleMenuClose]);

	const getScreen = (screen: string): React.ReactNode => {
		// eslint-disable-next-line sonarjs/no-all-duplicated-branches
		switch (screen) {
			case AppRoute.USER_MANAGEMENT: {
				return <UserManagement />;
			}
			case AppRoute.PRODUCT_MANAGEMENT: {
				return <UserManagement />;
			}
			default: {
				return <UserManagement />;
			}
		}
	};

	return (
		<Grid component="main" container sx={{ minHeight: "100vh" }}>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: theme.palette.white,
					boxShadow: "none",
				}}
			>
				<Toolbar>
					<Box
						sx={{
							alignItems: "center",
							display: "flex",
							justifyContent: "flex-end",
							width: "100%",
						}}
					>
						<VerticalDivider />
						<Avatar sx={{ mr: 1 }}>{user?.name?.charAt(firstLetter)}</Avatar>
						<Box sx={{ textAlign: "left" }}>
							<Typography
								sx={{
									color: theme.palette.primary.dark,
									fontFamily: theme.typography.playfairDisplay,
									fontSize: theme.fontSizes.medium,
								}}
							>
								{user?.name}
							</Typography>
							<Typography
								sx={{
									color: theme.palette.primary.dark,
									fontFamily: theme.typography.dmSans,
									fontSize: theme.fontSizes.small,
								}}
							>
								{t("AdminPage.admin")}
							</Typography>
						</Box>
						<IconButton
							color="inherit"
							onClick={handleMenuOpen}
							sx={{
								marginLeft: "12px",
							}}
						>
							<ArrowDownIcon />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							id="admin-menu"
							onClose={handleMenuClose}
							open={Boolean(anchorEl)}
						>
							<MenuItem onClick={handleLogout}>
								{t("AdminPage.logout")}
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Sidebar />
			<Grid sx={{ ml: "auto", mt: "64px", width: "80%" }}>
				{getScreen(pathname)}
			</Grid>
		</Grid>
	);
};

export { AdminPanel };
