import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-2023",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/styles/constants.scss";`
      }
    }
  },
})


