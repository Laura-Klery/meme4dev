import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MyButton from "./components/buttons/MyButton.vue"



import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App)
    .component('MyButton', MyButton)
    .use(createPinia())
    .use(router)
    .mount('#app')
