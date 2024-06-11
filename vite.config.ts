import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { ConfigEnv, defineConfig, loadEnv } from "vite";

const indexZero = 0;
const indexOne = 1;

const config = ({ mode }: ConfigEnv): ReturnType<typeof defineConfig> => {
	const { VITE_APP_DEVELOPMENT_PORT } = loadEnv(mode, process.cwd());

	return defineConfig({
		build: {
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes("node_modules")) {
							return id
								.toString()
								.split("node_modules/")
								[indexOne].split("/")
								[indexZero].toString();
						}
					},
				},
			},
		},
		plugins: [react()],
		resolve: {
			alias: [
				{
					find: "~",
					replacement: fileURLToPath(new URL("src", import.meta.url)),
				},
			],
		},
		server: {
			host: true,
			port: Number(VITE_APP_DEVELOPMENT_PORT),
		},
	});
};

export default config;
