import React from "react";

import { Box } from "@mui/material";

import { MainLogo } from "~/components/Header/main-logo.tsx";
import { HeaderContainer } from "~/components/Header/styles.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";

import { AuthUserContent } from "./auth-user-content/index.tsx";
import { GuestUserContent } from "./guest-user-content/index.tsx";

export const Header: React.FC = () => {
	const isLoggedIn = Boolean(
		useAppSelector((state: RootState) => state.auth.accessToken),
	);

	const user = useAppSelector((state: RootState) => state.auth.user);

	return (
		<HeaderContainer>
			<Box sx={{ alignItems: "center", display: "flex" }}>
				<MainLogo />
			</Box>
			{isLoggedIn ? (
				<AuthUserContent role={user?.profile.role as string} />
			) : (
				<GuestUserContent />
			)}
		</HeaderContainer>
	);
};
