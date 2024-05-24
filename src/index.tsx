import { ThemeProvider } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";

import "~/assets/styles.css";

import { App } from "./app/app.tsx";
import { RouterProvider, StoreProvider } from "./components/index.tsx";
import "./i18n.ts";
import { AppRoute } from "./libs/enum/index.ts";
import { store } from "./modules/store.ts";
import { Auth } from "./pages/auth/index.tsx";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<ThemeProvider theme={theme}>
				<RouterProvider
					routes={[
						{
							children: [
								{
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
		</StoreProvider>
	</React.StrictMode>,
);
