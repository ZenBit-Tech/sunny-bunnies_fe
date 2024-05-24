import { ThemeProvider } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app/app.tsx";
import { RouterProvider, StoreProvider } from "./components/index.tsx";
import { AppRoute } from "./libs/enum/index.ts";
import "./libs/locales/i18n.ts";
import { Auth } from "./pages/auth/index.tsx";
import { store } from "./redux/store.ts";
import "./styles.css";
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
