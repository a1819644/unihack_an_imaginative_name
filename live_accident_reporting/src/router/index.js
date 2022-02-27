import { createRouter, createWebHistory } from "vue-router";
import Body from "../components/Sections/Body.vue";
const Map = () => import("../components/Map/Map.vue");
const Insights = () => import("../components/Insights/Insights.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Body,
    meta: {
      title: "Live Accident Database",
    },
    children: [
      {
        path: "",
        name: "map",
        component: Map,
      },
      {
        path: "insights",
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
