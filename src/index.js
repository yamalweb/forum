import pageHome from "@/pages/TheHome";
import {createRouter, createWebHistory} from 'vue-router'
import PageThreadShow from "@/pages/ThreadShow";
import ThreadCreate from "@/pages/ThreadCreate";
import Forum from "@/pages/Forum";
import PageNotFound from '@/pages/NotFound';
import sourceData from '@/data.json'
import TheCategory from "@/pages/TheCategory";
import TheProfile from "@/pages/TheProfile";
import ThreadEdit from "@/pages/ThreadEdit";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: pageHome
    },
    {
        path: '/me',
        name: 'Profile',
        component: TheProfile,
        meta: { toTop: true, smoothScroll: true }
    },
    {
        path: '/me/edit',
        name: 'ProfileEdit',
        component: TheProfile,
        props: {
            edit: true
        }
    },
    {
        path: '/forum/:id',
        name: 'Forum',
        component: Forum,
        props: true
    },

    {
        path: '/category/:id',
        name: 'Category',
        component: TheCategory,
        props: true
    },

    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter: (to, from, next) => {
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            if (threadExists) {
                return next()
            } else {
                return next({
                    name: 'NotFound',
                    // preserve current path and remove the first char to avoid the target URL starting with `//`
                    params: {pathMatch: to.path.substring(1).split('/')},
                    query: to.query,
                    hash: to.hash,
                })
            }
        },
    },
    {
        path: '/forum/:forumId/thread/create',
        name: 'ThreadCreate',
        component: ThreadCreate,
        props: true
    },
    {
        path: '/thread/:id/edit',
        name: 'ThreadEdit',
        component: ThreadEdit,
        props: true
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
    scrollBehavior(to) {
        const scroll = {}
        if(to.meta.toTop) scroll.top = 0
        if(to.meta.smoothScroll) scroll.behavior = 'smooth'
        return scroll
    }
})
