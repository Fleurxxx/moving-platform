import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'.
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from "pinia"
//注册 Pinia 插件
const pinia = createPinia()


const app = createApp(App) 
app.use(store)
app.use(router)
app.use(pinia);
app.use(ElementPlus)
// 全局导入icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 挂载到Vue根实例
app.mount('#app')

