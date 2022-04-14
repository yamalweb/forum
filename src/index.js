import pageHome from "@/pages/TheHome";
import {createRouter,createWebHistory } from 'vue-router'
import PageThreadShow from "@/pages/ThreadShow";
import Forum from "@/pages/Forum";
import PageNotFound from '@/pages/NotFound';
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name:'Home',
        component: pageHome
    },
    {
        path: '/forum/:id',
        name:'Forum',
        component: Forum,
        props: true
    },
    {
        path: '/thread/:id',
        name:'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter: (to, from, next) => {
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            if(threadExists){
                return next()
            }else{
                return next({
                    name: 'NotFound',
                    // preserve current path and remove the first char to avoid the target URL starting with `//`
                    params: { pathMatch: to.path.substring(1).split('/') },
                    query: to.query,
                    hash: to.hash,
                })
            }
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: PageNotFound
    },

]

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
