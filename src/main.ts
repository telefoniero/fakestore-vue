import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/main.scss'
import { store, key } from '@/store/store'

createApp(App).use(store, key).mount('#app')
