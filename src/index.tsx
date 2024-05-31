import { ThemeProvider } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "~/app/app.tsx";
import { AppRoute } from "~/libs/constants/index.ts";

import {
	PrivateRoute,
	PublicRoute,
	RouterProvider,
	StoreProvider,
} from "./components/index.ts";
import "./libs/locales/i18n.ts";
import { Auth, Home } from "./pages/index.ts";
import { persistor, store } from "./redux/store.ts";
import "./styles.css";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
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
								element: <App />,
							},
						]}
					/>
				</ThemeProvider>
			</PersistGate>
		</StoreProvider>
	</React.StrictMode>,
);
