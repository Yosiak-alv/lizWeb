import { createRouter, createWebHistory } from "vue-router";
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

export default router;