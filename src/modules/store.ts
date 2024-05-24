import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./example-auth-api.ts";
import { userReducer } from "./example-slice.ts";

const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		user: userReducer,
	},
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
