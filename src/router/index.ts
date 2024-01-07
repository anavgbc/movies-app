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
                path: '/details/:id/:type',
                component: () => import('../views/Details/DetailsPage.vue')
            },
            {
                path: '/movies',
                component: () => import('../views/Movies/MoviePage.vue')
            },
            {
                path: '/tvShows',
                component: () => import('../views/TvShows/tvShowsPage.vue')
            },

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
