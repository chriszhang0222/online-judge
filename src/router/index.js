import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue';
import Problems from "@/view/Problems";

Vue.use(VueRouter)

const routes = [
    {
        'path': '/',
        'name': 'Home',
        'component': Home,
        'children': [
            {
                'path': '/problems',
                'name': 'Problems',
                'component': Problems,
            }

        ]
    }

    ]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router