import React from "react";
import {
	RouterProvider as LibraryRouterProvider,
	type RouteObject,
	createBrowserRouter,
} from "react-router-dom";

type Properties = {
	routes: RouteObject[];
};

const RouterProvider: React.FC<Properties> = ({ routes }: Properties) => (
	<LibraryRouterProvider router={createBrowserRouter(routes)} />
);

export { RouterProvider };
