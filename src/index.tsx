import { ThemeProvider } from "@mui/material";
import "@preact/signals-react/auto";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./app/app.tsx";
import { AuthRoute } from "./components/auth-route/index.tsx";
import {
	FooterWrapper,
	HeaderWrapper,
	PrivateRoute,
	PublicRoute,
	RouterProvider,
	StoreProvider,
} from "./components/index.ts";
import { AppRoute } from "./libs/constants/index.ts";
import "./libs/locales/i18n.ts";
import { Auth, Home, NotFound, SizeGuide } from "./pages/index.ts";
import { PrivacyPolicy } from "./pages/privacy-policy/privacy-policy-page.tsx";
import { ProfileBoard } from "./pages/profile-board/index.tsx";
import { TermsConditions } from "./pages/terms-conditions/terms-and-conditions.tsx";
import { persistor, store } from "./redux/store.ts";
import "./styles.css";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
			<StoreProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<RouterProvider
							routes={[
								{
									children: [
										{
											children: [
												{
													children: [
														{
															children: [
																{
																	element: <Auth />,
																	path: AppRoute.ROOT,
																},
																{
																	element: <Auth />,
																	path: AppRoute.SIGN_UP,
																},
																{
																	element: <Auth />,
																	path: AppRoute.SIGN_IN,
																},
															],
															element: <AuthRoute />,
															path: AppRoute.ROOT,
														},
														{
															children: [
																{
																	element: <Home />,
																	path: AppRoute.HOME,
																},
																{
																	element: <PrivacyPolicy />,
																	path: AppRoute.PRIVACY_POLICY,
																},
																{
																	element: <TermsConditions />,
																	path: AppRoute.TERMS_OF_USE,
																},
																{
																	element: <SizeGuide />,
																	path: AppRoute.SIZE_GUIDE,
																},
															],
															element: <PublicRoute />,
															path: AppRoute.ROOT,
														},
														{
															children: [
																{
																	element: <Auth />,
																	path: AppRoute.VERIFY_EMAIL,
																},
																{
																	element: <ProfileBoard />,
																	path: AppRoute.ROLE,
																},
																{
																	element: <ProfileBoard />,
																	path: AppRoute.GENERAL_INFORMATION,
																},
																{
																	element: <ProfileBoard />,
																	path: AppRoute.ADDRESS,
																},
																{
																	element: <ProfileBoard />,
																	path: AppRoute.CREDIT_CARD,
																},
																{
																	element: <ProfileBoard />,
																	path: AppRoute.SIZE,
																},
															],
															element: <PrivateRoute />,
															path: AppRoute.ROOT,
														},
													],
													element: <FooterWrapper />,
													path: AppRoute.ROOT,
												},
											],
											element: <HeaderWrapper />,
											path: AppRoute.ROOT,
										},
									],
									element: <App />,
									path: AppRoute.ROOT,
								},
								{
									element: <NotFound />,
									path: AppRoute.ANY,
								},
							]}
						/>
					</ThemeProvider>
				</PersistGate>
			</StoreProvider>
		</GoogleOAuthProvider>
	</React.StrictMode>,
);
