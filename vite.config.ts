import { AliasOptions, defineConfig } from 'vite'
import path from "path";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": root,
        } as AliasOptions,
    },

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                dashboard: resolve(__dirname, 'dashboard/index.html'),
            }
        }
    }
});