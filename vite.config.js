import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {//打包文件分类
        chunkFileNames: 'static/js/[hash].js',//入口文件
        entryFileNames: 'static/js/index.[hash].js',//出口文件
        assetFileNames: 'static/[ext]/[hash].[ext]',//静态文件目录

        manualChunks: function (id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }

})
