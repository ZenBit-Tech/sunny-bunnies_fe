import { ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import {
	PrivateRoute,
	PublicRoute,
	RouterProvider,
	StoreProvider,
} from "./components/common/index.ts";
import { AppRoute } from "./libs/enum/index.ts";
import "./libs/locales/i18n.ts";
import { Auth, Home } from "./pages/index.ts";
import { PrivacyPolicy } from "./pages/privacy-policy/privacy-policy-page.tsx";
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
														{
															element: <PrivacyPolicy />,
															path: AppRoute.PRIVACY_POLICY,
														},
														{
															element: <TermsConditions />,
															path: AppRoute.TERMS_OF_USE,
														},
													],
													element: <PublicRoute />,
													path: AppRoute.ROOT,
												},
											],
										},
										{
											children: [
												{
													element: <Home />,
													path: AppRoute.HOME,
												},
											],
											element: <PrivateRoute />,
											path: AppRoute.ROOT,
										},
									],
								},
							]}
						/>
					</ThemeProvider>
				</PersistGate>
			</StoreProvider>
		</GoogleOAuthProvider>
	</React.StrictMode>,
);
