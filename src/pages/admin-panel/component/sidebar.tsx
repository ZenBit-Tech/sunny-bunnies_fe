import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Box, Drawer } from "@mui/material";

import Logo from "~/assets/images/logo/big.png";
import { AppRoute } from "~/libs/constants/index.ts";

import { SidebarList } from "./sidebar-list.tsx";

const Sidebar: React.FC = () => {
	const { t } = useTranslation();

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
				<SidebarList />
			</Box>
		</Drawer>
	);
};

export { Sidebar };
