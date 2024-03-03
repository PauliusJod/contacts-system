export default {
  modules: {
    tempContact: {
      namespaced: true,
      state: () => ({
        tempContact: [],
      }),
      getters: {
        getTempContact: (state) => {
          return state.tempContact;
        },
      },
      mutations: {
        SET_TEMP_CONTACT(state, data) {
          state.tempContact = data;
        },
        REMOVE_TEMP_CONTACT(state) {
          console.log("remove...");
          state.tempContact = [];
        },
      },
      actions: {
        async removeContact({ commit }, payload) {
          const res = await this.removeContactAPI(payload);
          if (res == undefined) {
            return;
          }
          if (res == true) {
            commit(
              "ADD_NOTIFICATION",
              { message: "Successfuly deleted", type: "success" },
              { root: true }
            );
            commit("REMOVE_DATA_BY_INDEX", { id: payload }, { root: true });
          } else {
            commit("ADD_NOTIFICATION", { message: res, type: "danger" }, { root: true });
          }
        },
      },
    },
  },
  state: {
    contacts: [],
    contactsRelationships: {},
    contactsAmount: 0,
    page: 0,
    totalPages: 0,
    contactById: {},
  },
  getters: {
    getContacts: (state) => {
      return state.contacts;
    },
    getContactsAmount: (state) => {
      return state.contactsAmount;
    },
    getContactsPage: (state) => {
      return state.page;
    },
    getContactsTotalPages: (state) => {
      return state.totalPages;
    },
    getContactById: (state) => {
      return state.contactById;
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.contacts = data;
    },
    REPLACE_DATA(state, data) {
      console.log(state.contacts[1]);
      // const index = state.contacts.findIndex((el) => el.id == payload.id);
      // if (index > -1) state.contacts.splice(index, 1);
      // state.contacts = data;
    },
    SET_DATA_BY_ID(state, data) {
      state.contactById = data;
    },
    SET_DATA_AMOUNT(state, payload) {
      state.contactsAmount = payload;
    },
    SET_DATA_PAGE(state, payload) {
      state.page = payload;
    },
    SET_DATA_TOTAL_PAGES(state, payload) {
      state.totalPages = payload;
    },
    REMOVE_DATA_BY_INDEX(state, payload) {
      const index = state.contacts.findIndex((el) => el.id == payload.id);
      if (index > -1) state.contacts.splice(index, 1);
    },
    RESET_DATA(state) {
      state.contacts = [];
      state.contactsAmount = 0;
      state.page = 0;
      state.totalPages = 0;
    },
  },
  actions: {
    async getContactsData({ commit }, payload) {
      const res = await this.getAllContacts(payload);
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
        commit("ADD_NOTIFICATION", { message: "Successfuly loaded", type: "success" }); // success/warning/danger
      } else if (res.items.length <= 0) {
        commit("RESET_DATA");
        commit("ADD_NOTIFICATION", { message: "Failed to load", type: "danger" }); // success/warning/danger
      }
    },
    async getContactDataById({ commit }, payload) {
      const res = await this.getContactDataByIdAPI(payload);
      if (res == undefined) {
        return;
      }
      if ((typeof res === "object", Object.hasOwn(res, "surname"))) {
        commit("SET_DATA_BY_ID", res);
      } else {
        commit("SET_DATA_BY_ID", {});
      }
    },
    async editContactData({ commit }, payload) {
      const res = await this.editContactDataAPI(payload);
      console.log("res: ", res);
      if (res == undefined) {
        return;
      }
      if ((typeof res === "object", Object.hasOwn(res, "surname"))) {
        commit("tempContact/REMOVE_TEMP_CONTACT");

        commit("REMOVE_MODAL");
        commit("TOGGLE_VISIBLE");
      } else {
        commit("tempContact/REMOVE_TEMP_CONTACT");
      }
    },
  },
};
