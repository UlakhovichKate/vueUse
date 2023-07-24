import { createRouter, createWebHistory, RouterView } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../components/HelloWorld.vue"),
    redirect: { name: "showListState" },
    children: [
      {
        path: "state",
        name: "showListState",
        component: () => import("../components/ListState.vue"),
      },
      {
        path: "elements",
        name: "showListElements",
        component: () => import("../components/ListElements.vue"),
      },
      {
        path: "browser",
        name: "showListBrowser",
        component: () => import("../components/ListBrowser.vue"),
      },
      {
        path: "sensors",
        name: "showListSensors",
        component: () => import("../components/ListSensors.vue"),
      },
      {
        path: "network",
        name: "showListNetwork",
        component: () => import("../components/ListNetwork.vue"),
      },
      {
        path: "animation",
        name: "showListAnimation",
        component: () => import("../components/ListAnimation.vue"),
      },
      {
        path: "components",
        name: "showListComponents",
        component: () => import("../components/ListComponents.vue"),
      },
      {
        path: "watch",
        name: "showListWatch",
        component: () => import("../components/ListWatch.vue"),
      },
      {
        path: "reactivity",
        name: "showListReactivity",
        component: () => import("../components/ListReactivity.vue"),
      },
      {
        path: "array",
        name: "showListArray",
        component: () => import("../components/ListArray.vue"),
      },
      {
        path: "time",
        name: "showListTime",
        component: () => import("../components/ListTime.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFoundPage",
    component: () => import("../components/PageNotFound.vue"),
    meta: {
      layout: "empty",
    },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  linkActiveClass: "active",
});

export default router;
