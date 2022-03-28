import pageHome from "@/components/PageHome";
import {createRouter,createWebHistory } from 'vue-router'
import PageThreadShow from "@/components/PageThreadShow";

const routes = [
    {
        path: '/',
        name:'Home',
        component: pageHome
    },
    {
        path: '/thread/:id',
        name:'Thread',
        component: PageThreadShow,
        props: true
    },
]

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
