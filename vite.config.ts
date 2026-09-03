import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'robots.txt', 'assets/*'],
    manifest: {
      name: 'Plausch',
      short_name: 'Plausch',
      start_url: '/',
      display: 'standalone',
      background_color: '#faf5ec',
      icons: [
        { src: '/assets/icon-CN27k1iq.png', sizes: '192x192', type: 'image/png' }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg}'],
      // The phone mockups exist once per language and are several megabytes
      // together, so precaching them all would make every visitor download the
      // two languages they are not reading. They are ordinary lazy images and
      // load on demand, same as the posters (excluded above by being .jpg).
      globIgnores: ['**/phone-*.png']
    }
  })],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
