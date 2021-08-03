import { createWebHistory,createWebHashHistory,createRouter } from "vue-router";
import Home from '../components/Home.vue'
import Serch from '../components/search.vue'
const router = createRouter({
    history: createWebHashHistory(),
    mode: 'hash',
    routes : [
        {
            path: '/',
            component: Home
        },
        {   name:'serch',
            path: '/search/:query',
            component: Serch
        }
    ]
})


 export default router