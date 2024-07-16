import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { colorsApi } from "~/redux/colors/colors-api.ts";
import { colorReducer } from "~/redux/colors/colors-slice.ts";
import { sizesApi } from "~/redux/sizes/sizes-api.ts";
import { sizeReducer } from "~/redux/sizes/sizes-slice.ts";

import { adminApi } from "./admin/admin-api.ts";
import { adminReducer } from "./admin/admin-slice.ts";
import { authApi } from "./auth/auth-api.ts";
import { authReducer } from "./auth/auth-slice.ts";
import { categoriesApi } from "./categories/categories-api.ts";
import { categoryReducer } from "./categories/categories-slice.ts";
import { filtersReducer } from "./filters/filters.slice.ts";
import { filtersApi } from "./filters/filters-api.ts";
import { productsApi } from "./products/products-api.ts";
import { productsReducer } from "./products/products-slice.ts";
import { api } from "./services.ts";
import { userApi } from "./user/user-api.ts";
import { userReducer } from "./user/user-slice.ts";

const rootReducer = combineReducers({
	admin: adminReducer,
	adminApiSlice: adminApi.reducer,
	auth: authReducer,
	[authApi.reducerPath]: authApi.reducer,
	category: categoryReducer,
	categoryApiSlice: categoriesApi.reducer,
	color: colorReducer,
	colorApiSlice: colorsApi.reducer,
	filters: filtersReducer,
	filtersApiSlice: filtersApi.reducer,
	products: productsReducer,
	productsApiSlice: productsApi.reducer,
	size: sizeReducer,
	sizeApiSlice: sizesApi.reducer,
	user: userReducer,
	userApiSlice: userApi.reducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
			},
		}).concat(api.middleware),
	reducer: persistedReducer,
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
