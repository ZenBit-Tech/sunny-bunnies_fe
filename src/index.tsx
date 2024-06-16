import { ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./app/app.tsx";
import {
	PublicRoute,
	RouterProvider,
	StoreProvider,
} from "./components/index.ts";
import { RegisterRoute } from "./components/register-route/register-route.tsx";
import { AppRoute } from "./libs/constants/index.ts";
import "./libs/locales/i18n.ts";
import {
	Auth,
	Home,
	NotFound,
	SizeGuide,
	VendorProfile,
} from "./pages/index.ts";
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
											element: <RegisterRoute component={<ProfileBoard />} />,
											path: AppRoute.ROLE,
										},
										{
											element: <RegisterRoute component={<ProfileBoard />} />,
											path: AppRoute.GENERAL_INFORMATION,
										},
										{
											element: <RegisterRoute component={<ProfileBoard />} />,
											path: AppRoute.ADDRESS,
										},
										{
											element: <RegisterRoute component={<ProfileBoard />} />,
											path: AppRoute.CREDIT_CARD,
										},
										{
											element: <RegisterRoute component={<ProfileBoard />} />,
											path: AppRoute.SIZE,
										},
										{
											element: <PublicRoute component={<Auth />} />,
											path: AppRoute.ROOT,
										},
										{
											element: <PublicRoute component={<Auth />} />,
											path: AppRoute.SIGN_UP,
										},
										{
											element: <PublicRoute component={<Auth />} />,
											path: AppRoute.SIGN_IN,
										},
										{
											element: <PublicRoute component={<Home />} />,
											path: AppRoute.HOME,
										},
										{
											element: <PublicRoute component={<PrivacyPolicy />} />,
											path: AppRoute.PRIVACY_POLICY,
										},
										{
											element: <PublicRoute component={<TermsConditions />} />,
											path: AppRoute.TERMS_OF_USE,
										},
										{
											element: <PublicRoute component={<SizeGuide />} />,
											path: AppRoute.SIZE_GUIDE,
										},
										{
											element: <PublicRoute component={<VendorProfile />} />,
											path: AppRoute.VENDOR_PROFILE,
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
