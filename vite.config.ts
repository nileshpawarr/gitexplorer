import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";


// https://vite.dev/config/
const envDir = "."; // cwd

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir);

  return {
    plugins: [
      react(),
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 10240,
      }),
    ],
    base: env.VITE_BASE_URL,
    server: {
      port: 3000,
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      rollupOptions: {
        output: {
          // Better chunk naming
          chunkFileNames: 'assets/[name]-[hash].js',
        }
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
    esbuild: {
      pure:
        process.env.NODE_ENV === "production"
          ? ["console.log", "console.debug", "console.error"]
          : [],
      minifyIdentifiers: true,
    },
    css: {
      devSourcemap: false,
      transformer: "postcss",
    },
  };
});
