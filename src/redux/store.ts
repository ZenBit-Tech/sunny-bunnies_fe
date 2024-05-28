import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "./auth/auth-api.ts";
import { authReducer } from "./auth/auth-slice.ts";
import { api } from "./services/index.ts";

const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
	reducer: {
		auth: authReducer,
		[authApi.reducerPath]: authApi.reducer,
	},
});

setupListeners(store.dispatch);

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
