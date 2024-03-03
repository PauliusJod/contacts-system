export default {
  state: {
    groups: [],
    contactGroups: [],
    selectedGroup: null,
  },
  getters: {
    getGroups: (state) => state.groups,
    getContactGroups: (state) => state.contactGroups,
    getSelectedGroup: (state) => state.selectedGroup,
  },
  mutations: {
    CHANGE_SELECTED_GROUP(state, id) {
      state.selectedGroup = id ? id : null;
    },
    SET_GROUPS(state, groups) {
      state.groups = groups;
    },
    SET_CONTACT_GROUPS(state, groups) {
      state.contactGroups = groups;
    },
  },
  actions: {
    async getContactsDataByGroup({ commit }, payload) {
      const res = await this.getAllContactsByGroup(payload);
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
        commit("ADD_NOTIFICATION", { message: "Filtered by group", type: "success" }); // success/warning/danger
      } else if (res.items.length <= 0) {
        commit("RESET_DATA");
        commit("ADD_NOTIFICATION", { message: "Zero contacts found by group", type: "danger" }); // success/warning/danger
      }
    },
    async fetchGroupsByDepartment({ commit }, id) {
      const res = await this.fetchGroupsCollection(id);
      if (res == undefined) {
        return;
      }
      commit("SET_GROUPS", res);
    },
    async fetchGroupsByDepartmentContact({ commit }, id) {
      const res = await this.fetchGroupsCollection(id);
      if (res == undefined) {
        return;
      }
      commit("SET_CONTACT_GROUPS", res);
    },
  },
};
