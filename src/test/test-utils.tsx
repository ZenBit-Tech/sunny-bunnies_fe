/* eslint-disable react-refresh/only-export-components */
import React from "react";

import { RenderOptions, RenderResult, render } from "@testing-library/react";

import { Providers } from "./providers.tsx";

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
): RenderResult => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender };
