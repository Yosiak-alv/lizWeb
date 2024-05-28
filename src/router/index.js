import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress';
import Layout from "../layout/Layout.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/lizWeb/",
            name: "home",
            meta: {layout: Layout},
            component: () => import("../views/Home.vue"),
        },
        {
            path: "/lizWeb/projects",
            name: "projects",
            meta: {layout: Layout},
            component: () => import("../views/Projects.vue"),
        },
        {
            path: "/lizWeb/contact",
            name: "contact",
            meta: {layout: Layout},
            component: () => import("../views/Contact.vue"),
        }
    ],
    scrollBehavior() {
        window.scrollTo(0,0);
    }
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;