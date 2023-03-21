import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": "https://just-another-chat-app.herokuapp.com/",
        },
        // middlewareMode: true,
        // watch: {
        //     exclude: [
        //         "**/*.html", // skip parsing for HTML files
        //     ],
        // },
    },

    plugins: [react()],
});
