import { createPinia } from 'pinia'
import { user } from './user';
import { problem } from './problem';
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist) // 使用插件
   
export { user, problem };
export default store;
