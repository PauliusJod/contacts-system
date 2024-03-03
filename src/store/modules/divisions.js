export default {
  state: {
    divisions: [],
    contactDivisions: [],
    selectedDivision: null,
  },
  getters: {
    getDivisions: (state) => state.divisions,
    getContactDivisions: (state) => state.contactDivisions,
    getSelectedDivision: (state) => state.selectedDivision,
  },
  mutations: {
    CHANGE_SELECTED_DIVISION(state, id) {
      state.selectedDivision = id ? id : null;
    },
    SET_DIVISIONS(state, divisions) {
      state.divisions = divisions;
    },
    SET_CONTACT_DIVISIONS(state, divisions) {
      state.contactDivisions = divisions;
    },
  },
  actions: {
    async getContactsDataByDivision({ commit }, payload) {
      const res = await this.getAllContactsByDivision(payload);
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
        commit("ADD_NOTIFICATION", { message: "Filtered by division", type: "success" }); // success/warning/danger
      } else if (res.items.length <= 0) {
        commit("RESET_DATA");
        commit("ADD_NOTIFICATION", { message: "Zero contacts found by division", type: "danger" }); // success/warning/danger
      }
    },
    async fetchDivisionsByOffice({ commit }, id) {
      const res = await this.fetchDivisionsCollection(id);
      if (res == undefined) {
        return;
      }
      commit("SET_DIVISIONS", res);
    },
    async fetchDivisionsByOfficeContact({ commit }, id) {
      const res = await this.fetchDivisionsCollection(id);
      commit("SET_CONTACT_GROUPS", []);
      if (res == undefined) {
        return;
      }
      commit("SET_CONTACT_DIVISIONS", res);
      // commit('SET_CONTACT_GROUPS', []);
    },
  },
};
