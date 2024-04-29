import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
const app = createApp(App)

import {createApp} from 'vue'
import { createPinia } from 'pinia'
import {router} from "@/router/index.js";

const store = createPinia();
app.use(router)
app.use(store)
app.mount('#app')
