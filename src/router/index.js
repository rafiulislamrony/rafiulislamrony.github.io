import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/Login.vue";
import DashboardPage from "../views/Dashboard.vue";

const Overview = () => import("../views/dashboard/Overview.vue");
const Drugs = () => import("../views/dashboard/Drugs.vue");
const SellingHistory = () => import("../views/dashboard/SellingHistory.vue");
const Settings = () => import("../views/dashboard/Settings.vue");
const Vendors = () => import("../views/dashboard/Vendors.vue");
const Account = () => import("../views/dashboard/settings/Account.vue");
const Website = () => import("../views/dashboard/settings/Website.vue");
const Theme = () => import("../views/dashboard/settings/Theme.vue");
import NotFoundPage from "../views/404.vue";

const routes = [
  { path: "/", component: LoginPage },
  {
    path: "/dashboard",
    component: DashboardPage,
    redirect: "/dashboard/overview",
    children: [
      { path: "overview", component: Overview },
      { path: "drugs", component: Drugs },
      { path: "selling-history", component: SellingHistory },
      { path: "vendors", component: Vendors },
      { 
        path: "settings", 
        component: Settings, 
        redirect:"/dashboard/settings/account" ,
        children:[
          { path: "account", component: Account },
          { path: "website", component: Website },
          { path: "theme", component: Theme },
        ]
      },
    
    ],
  },
  // 404 route
  { path: "/:catchAll(.*)", component: NotFoundPage }, // Replace NotFoundPage with the actual component you want to use for 404
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// router.beforeEach((to, from) => {
//   console.log(to);
//   console.log(from);
//   // ...
//   // explicitly return false to cancel the navigation
//   //return false
// });

export default router;
