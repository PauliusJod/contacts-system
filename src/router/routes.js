const contactsView = () => import("../views/contactsView.vue");
const loginView = () => import("../views/loginView.vue");
const companiesView = () => import("../views/companiesView.vue");
const structureView = () => import("../views/structureView.vue");
const detailedContactView = () => import("../views/detailedContactView.vue");
const errorPage = () => import("../views/errorPageView.vue");
const accountsManagementView = () => import("../views/accountsManagementView.vue");

export const routes = [
  {
    path: "/",
    name: "contactsView",
    component: contactsView,
    meta: { requiresAuth: false, superAdmin: false },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: contactsView,
    meta: { requiresAuth: false, superAdmin: false },
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
    meta: { requiresAuth: false, superAdmin: false },
  },
  {
    path: "/companies",
    name: "companies",
    component: companiesView,
    meta: { requiresAuth: true, superAdmin: false },
  },
  {
    path: "/structure",
    name: "structure",
    component: structureView,
    meta: { requiresAuth: true, superAdmin: false },
  },
  {
    path: "/accounts",
    name: "accounts",
    component: accountsManagementView,
    meta: { requiresAuth: true, superAdmin: true },
  },
  { path: "*", name: "*", component: errorPage, meta: { requiresAuth: false, superAdmin: false } },
  {
    name: "detailedContactView",
    path: `/contacts/:contactId`,
    component: detailedContactView,
    props: true,
    meta: { requiresAuth: false, superAdmin: false },
  },
];
