import { createApp } from 'vue'
import './style.css'
import {App} from './App'
import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './config/routes'



const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 这样之后 app里面就能使用路由插槽了
createApp(App).use(router).mount('#app')
