import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Brazil from "@/views/Brazil.vue";
import Jamacia from "@/views/Jamaica.vue";
import Hawaii from "@/views/Hawaii.vue";
import Panama from "@/views/Panama.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: Brazil
  },
  {
    path:'/hawaii',
    name:'Hawaii',
    component: Hawaii
  },
  {
    path:'/jamaica',
    name:'Jamacia',
    component: Jamacia
  },
  {
    path:'/panama',
    name:'Panama',
    component: Panama
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
