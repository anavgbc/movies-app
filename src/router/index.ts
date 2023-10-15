import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../layout/DefaultLayout.vue'),
        children: [
            {
                path: '/home',
                component: () => import('../views/Home/HomePage.vue')
            },
            {
                path: '/details/:id',
                component: () => import('../views/Details/DetailsPage.vue')
            },

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
