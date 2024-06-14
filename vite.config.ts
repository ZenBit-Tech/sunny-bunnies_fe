import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

const config = ({ mode }: ConfigEnv): ReturnType<typeof defineConfig> => {
	const { VITE_APP_DEVELOPMENT_PORT } = loadEnv(mode, process.cwd());

	return defineConfig({
		build: {
			outDir: "build",
		},
		plugins: [react(), svgr()],
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
