import { createRouter, createWebHistory } from "vue-router";
const Map = () => import("../components/Map/Map.vue");
const Insights = () => import("../components/Insights/Insights.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Map,
    meta: {
      title: "Live Accident Database",
    },
    children: [
      {
        path: "/insights",
        name: "insights",
        component: Insights,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
