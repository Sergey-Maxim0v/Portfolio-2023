import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
    plugins: [react()],
    base: "/Portfolio-2023",
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                                    @import "src/assets/styles/constants.scss";
                                    @import "src/assets/styles/typography.scss";
                                    @import "src/assets/styles/global.scss";
                                `
            }
        }
    },
})
