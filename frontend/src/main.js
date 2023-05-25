import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MyButton from '@/components/buttons/MyButton.vue'
import IconButton from '@/components/buttons/IconButton.vue'

import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App)
  .component('MyButton', MyButton)
  .component('IconButton', IconButton)
  .use(router)
  .use(createPinia())
  .mount('#app')
