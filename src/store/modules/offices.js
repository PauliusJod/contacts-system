export default {
  state: {
    offices: [],
    contactOffices: [],
    selectedOffice: null,
  },
  getters: {
    getOffices: (state) => state.offices,
    getContactOffices: (state) => state.contactOffices,
    getSelectedOffice: (state) => state.selectedOffice,
  },
  mutations: {
    CHANGE_SELECTED_OFFICE(state, id) {
      state.selectedOffice = id ? id : null;
    },
    SET_OFFICES(state, offices) {
      state.offices = offices;
    },
    SET_CONTACT_OFFICES(state, offices) {
      state.contactOffices = offices;
    },
  },
  actions: {
    async fetchOfficesByCompany({ commit }, id) {
      const res = await this.fetchOfficesCollection(id);
      if (res == undefined) {
        return;
      }
      commit("SET_OFFICES", res);
    },
    async fetchOfficesByCompanyContact({ commit }, id) {
      const res = await this.fetchOfficesCollection(id);
      if (res == undefined) {
        return;
      }
      commit("SET_CONTACT_OFFICES", res);
      commit("SET_CONTACT_DEPARTMENTS", []);
      commit("SET_CONTACT_GROUPS", []);
    },
    async getContactsDataByOffice({ commit }, payload) {
      const res = await this.getAllContactsByOffice(payload);
      if (res == undefined) {
        return;
      }
      if (res.items == undefined) {
        commit("RESET_DATA");
      }
      if (typeof res === "object" && res.items.length > 0) {
        commit("SET_DATA", res.items);
        commit("SET_DATA_AMOUNT", res.totalItems);
        commit("SET_DATA_PAGE", res.page);
        commit("SET_DATA_TOTAL_PAGES", res.totalPages);
        commit("RESET_NOTIFICATIONS");
        commit("ADD_NOTIFICATION", { message: "Filtered by office", type: "success" }); // success/warning/danger
      } else if (res.items.length <= 0) {
        commit("RESET_DATA");
        commit("ADD_NOTIFICATION", { message: "Zero contacts found by office", type: "danger" }); // success/warning/danger
      }
    },
  },
};
