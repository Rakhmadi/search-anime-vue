import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@mdi/font/css/materialdesignicons.min.css"
import router from './router/router.js'
import moment from 'moment'
createApp(App).use(moment).use(router).mount('#app')
