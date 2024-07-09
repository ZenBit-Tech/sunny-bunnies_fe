import { setupServer } from "msw/node";

import { handlers } from "./handlers.ts";

const mockServer = setupServer(...handlers);

export { mockServer };
