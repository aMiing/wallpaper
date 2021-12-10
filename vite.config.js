import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		proxy: {
			'^/api': {
				target: 'http://wallpaper.apc.360.cn',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		},

	}
})
