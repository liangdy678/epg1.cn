import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/publication",
      name: "publication",
      component: () => import("../views/Publication.vue"),
    },
    {
      path: "/collaboration",
      name: "collaboration",
      component: () => import("../views/Collaboration.vue"),
    },
    {
      path: "/funding",
      name: "funding",
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FundView.vue"),
    },
    {
      path: "/link",
      name: "link",
      component: () => import("../views/LinkView.vue"),
    },
    {
      path: "/answer",
      name: "answer",
      component: () => import("../views/AnswerView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
