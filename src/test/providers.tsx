import React, { ReactNode } from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "~/redux/store.ts";
import theme from "~/theme.ts";

type ProvidersProps = {
	children: ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
			<StoreProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<Router>{children}</Router>
					</ThemeProvider>
				</PersistGate>
			</StoreProvider>
		</GoogleOAuthProvider>
	);
};

export { Providers };
