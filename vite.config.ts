import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // 这个路径会影响到页面跳转 配置后将只能使用 RouterLink 跳转
  // base:'/mangosteen-fe/dist/',
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    })
  ],
})
