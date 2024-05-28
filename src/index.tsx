import { ThemeProvider } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./app/app.tsx";
import { RouterProvider, StoreProvider } from "./components/common/index.ts";
import { AppRoute } from "./libs/enum/index.ts";
import "./libs/locales/i18n.ts";
import { Auth } from "./pages/auth/index.tsx";
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
												element: <Auth />,
												path: AppRoute.SIGN_UP,
											},
											{
												element: <Auth />,
												path: AppRoute.SIGN_IN,
											},
										],
										element: <Auth />,
										path: AppRoute.ROOT,
									},
								],
								element: <App />,
								path: AppRoute.ROOT,
							},
						]}
					/>
				</ThemeProvider>
			</PersistGate>
		</StoreProvider>
	</React.StrictMode>,
);
