export default {
  state: {
    companies: [],
    contactCompanies: [],
    selectedCompany: null,
  },
  getters: {
    getCompanies: (state) => state.companies,
    getContactCompanies: (state) => state.contactCompanies,
    getSelectedCompany: (state) => state.selectedCompany,
  },
  mutations: {
    CHANGE_SELECTED_COMPANY(state, id) {
      state.selectedCompany = id ? id : null;
    },
    SET_COMPANIES(state, companies) {
      state.companies = companies;
    },
    SET_CONTACT_COMPANIES(state, companies) {
      state.contactCompanies = companies;
    },
  },
  actions: {
    async getContactsDataByCompany({ commit }, payload) {
      const res = await this.getAllContactsByCompany(payload);
      if (res == undefined) {
        return;
      }
      if (res.items == undefined) {
        commit("RESET_DATA");
        return;
      }
      if (typeof res === "object" && res.items.length > 0) {
        commit("SET_DATA", res.items);
        commit("SET_DATA_AMOUNT", res.totalItems);
        commit("SET_DATA_PAGE", res.page);
        commit("SET_DATA_TOTAL_PAGES", res.totalPages);
        commit("RESET_NOTIFICATIONS");
        commit("ADD_NOTIFICATION", { message: "Filtered by companies", type: "success" }); // success/warning/danger
      } else if (res.items.length <= 0) {
        commit("RESET_DATA");
        commit("ADD_NOTIFICATION", { message: "Zero contacts found by company", type: "danger" }); // success/warning/danger
      }
    },
    async fetchCompanies({ commit }) {
      const res = await this.fetchCompaniesCollection();
      if (res == undefined) {
        return;
      }
      commit("SET_COMPANIES", res.items);
      commit("SET_CONTACT_COMPANIES", res.items);
      commit("SET_CONTACT_DIVISIONS", []);
      commit("SET_CONTACT_DEPARTMENTS", []);
      commit("SET_CONTACT_GROUPS", []);
    },
  },
};
