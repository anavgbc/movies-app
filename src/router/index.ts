import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/HomePage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        component: Home
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
