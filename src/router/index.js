import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from '@/data.json'
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/invoices',
        name: 'invoices',
        components:{
            default: ()=> import('@/views/Invoices.vue'),
            LeftSidebar: ()=> import('@/components/LeftSidebar.vue'),
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/protected',
        name: 'protected',
        components:{
            default: ()=> import('@/views/Protected.vue'),
            LeftSidebar: ()=> import('@/components/LeftSidebar.vue')
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({ id: parseInt(route.params.id) }),
        beforeEnter: (to, from) => {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
            if (!exists) {
                return { name: 'NotFound' }
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: route => ({ ...route.params, id: parseInt(route.params.id) })

            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass:'vue-school-active-link'
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
        })
    }
});
router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        console.log(to.fullPath)
        return { name: 'login' , query: { redirect: to.fullPath }}
    }
})

export default router;
