import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const fonts = {
  google: {
    families: [
      {
        name: "Roboto",
        styles: 'ital,wght@0,300;0,400;1,200',
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unfonts(fonts)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
