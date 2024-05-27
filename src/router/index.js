import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/lizWeb/",
            name: "Home",
            meta: {layout: Layout},
            component: () => import("../views/Home.vue"),
        }
    ],
});


export default router;