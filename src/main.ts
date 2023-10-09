import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { vuetify } from './plugins/vuetify'
import { createPinia } from 'pinia'
import "./global.css"

export const pinia = createPinia()

createApp(App).use(pinia).use(vuetify).use(router).mount('#app')
