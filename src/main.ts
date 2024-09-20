import { createApp } from 'vue'
import './style.css'
import {App} from './App'
import { Footer } from './components/Footer'
import { Bar } from './components/Bar'
import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    { path: '/footer', component: Footer },
    { path: '/bar', component: Bar },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 这样之后 app里面就能使用路由插槽了
createApp(App).use(router).mount('#app')
