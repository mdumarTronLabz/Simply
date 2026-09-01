import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import manifest from './manifest.json' 
import { crx } from "@crxjs/vite-plugin";


export default defineConfig({
  plugins: [react(), crx({ manifest })],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});