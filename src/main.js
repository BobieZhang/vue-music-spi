// 入口文件
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式文件*** 用于引用index.scss数据
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).mount('#app')
