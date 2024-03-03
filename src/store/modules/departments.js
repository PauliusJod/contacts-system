export default {
  state: {
    departments: [],
    contactDepartments: [],
    selectedDepartments: null,
  },
  getters: {
    getDepartments: (state) => state.departments,
    getContactDepartments: (state) => state.contactDepartments,
    getSelectedDepartment: (state) => state.selectedDepartments,
  },
  mutations: {
    CHANGE_SELECTED_DEPARTMENT(state, id) {
      state.selectedDepartments = id ? id : null;
    },
    SET_DEPARTMENTS(state, departments) {
      state.departments = departments;
    },
    SET_CONTACT_DEPARTMENTS(state, departments) {
      state.contactDepartments = departments;
    },
  },
  actions: {
    async getContactsDataByDepartment({ commit }, payload) {
      const res = await this.getAllContactsByDepartment(payload);
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
        commit("ADD_NOTIFICATION", { message: "Filtered by department", type: "success" }); // success/warning/danger
      } else if (res.items.length <= 0) {
        commit("RESET_DATA");
        commit("ADD_NOTIFICATION", {
          message: "Zero contacts found by department",
          type: "danger",
        }); // success/warning/danger
      }
    },
    async fetchDepartmentsByDivision({ commit }, id) {
      const res = await this.fetchDepartmentsCollection(id);
      if (res == undefined) {
        return;
      }
      commit("SET_DEPARTMENTS", res);
    },
    async fetchDepartmentsByDivisionContact({ commit }, id) {
      const res = await this.fetchDepartmentsCollection(id);
      if (res == undefined) {
        return;
      }
      commit("SET_CONTACT_DEPARTMENTS", res);
    },
  },
};
