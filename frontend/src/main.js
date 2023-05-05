import { createApp } from 'vue'
import { createPinia } from 'pinia'
import IconButton from './components/buttons/IconButton.vue'

import App from './App.vue'
import router from './router'


const app = createApp(App)
    .component('IconButton', IconButton)
    .use(createPinia())
    .use(router)
    .mount('#app')
