import { AliasOptions, defineConfig } from 'vite'
import path from "path";


const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": root,
        } as AliasOptions,
    },
});