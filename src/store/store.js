import Vue from "vue";
import Vuex from "vuex";
import contacts from "./modules/contacts";
import companies from "./modules/companies";
import offices from "./modules/offices";
import divisions from "./modules/divisions";
import departments from "./modules/departments";
import groups from "./modules/groups";
import user from "./modules/user";
import modal from "./modules/modal";
import notifications from "./modules/notifications";
import { userAPI } from "./plugins/userAPI";
import { contactsAPI } from "./plugins/contactsAPI";
import { collectionsAPI } from "./plugins/collectionsAPI";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    modal,
    notifications,
    contacts,
    companies,
    offices,
    divisions,
    departments,
    groups,
  },
  plugins: [
    contactsAPI,
    collectionsAPI,
    userAPI,
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
