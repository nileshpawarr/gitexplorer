import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const envDir = "."; // cwd

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir);

  return {
    plugins: [react()],
    base: env.VITE_BASE_URL,
    server: {
      port: 3000,
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});
