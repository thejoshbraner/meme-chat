import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": "http://localhost:3001",
        },
    },

    plugins: [react()],
    server: {
        middlewareMode: true,
        watch: {
            exclude: [
                "**/*.html", // skip parsing for HTML files
            ],
        },
    },
});
