/* eslint-disable */
import { describe, expect, it } from "vitest";
import { customRender } from "~/test/test-utils.tsx";

import { Notification } from "./index.tsx";

describe("Notification component", () => {
	it("renders notification with default props", async () => {
		customRender(<Notification />);

    const toastifyContainer = document.getElementsByClassName('Toastify')[0];
		expect(toastifyContainer).toBeInTheDocument();
	});
});
