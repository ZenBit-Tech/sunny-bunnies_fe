import React, { useCallback } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { Box, Grid, Tab, Tabs } from "@mui/material";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";
import theme from "~/theme.ts";

import {
	AddressForm,
	CreditCardForm,
	GeneralInformationForm,
	RoleForm,
	SizeForm,
	TabsBoard,
} from "./components/index.ts";
import { tabRoutes } from "./constants.ts/index.ts";

const ProfileBoard: React.FC = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const user = useAppSelector((state: RootState) => state.auth.user);

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.ROLE:
				return <RoleForm />;
			case AppRoute.GENERAL_INFORMATION:
				return <GeneralInformationForm />;
			case AppRoute.ADDRESS:
				return <AddressForm />;
			case AppRoute.CREDIT_CARD:
				return <CreditCardForm />;
			case AppRoute.SIZE:
				return <SizeForm />;
			default:
				return <RoleForm />;
		}
	};

	const handleTabChange = useCallback(
		(_event: React.SyntheticEvent, newValue: string): void => {
			navigate(newValue);
		},
		[navigate],
	);

	if (user && user.profile.isRegistrationCompleted) {
		return <Navigate to={AppRoute.HOME} />;
	}

	return (
		<Grid
			bgcolor={theme.palette.gray}
			component="main"
			container
			justifyContent="center"
			sx={{ height: `calc(100vh - 68px)` }}
			width="100%"
		>
			<Box sx={{ margin: "85px 50px", width: "100%" }}>
				<Tabs
					aria-label="profile tabs"
					onChange={handleTabChange}
					scrollButtons="auto"
					value={pathname}
					variant="scrollable"
				>
					{tabRoutes.map((tab) => (
						<Tab
							disabled
							key={tab.route}
							label={
								<TabsBoard
									label={tab.label}
									number={tab.number}
									tabRoute={tab.route}
									tabRoutes={tabRoutes}
								/>
							}
							sx={{
								maxWidth: "none",
								padding: "0px",
								textTransform: "none",
								width: "20%",
							}}
							value={tab.route}
						/>
					))}
				</Tabs>
				<Box sx={{ bgcolor: theme.palette.white, width: "100%" }}>
					{getScreen(pathname)}
				</Box>
			</Box>
		</Grid>
	);
};

export { ProfileBoard };
