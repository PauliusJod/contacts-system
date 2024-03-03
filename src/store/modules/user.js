export default {
  state: {
    user: null,
    userToken: null,
    userPermissions: null,
    userValid: false,
    userLoginError: null,
  },
  // permissions / edit_permissions + edit_employees + delete_employees
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getError: (state) => {
      return state.userLoginError;
    },
    getUserValid: (state) => {
      return state.userValid;
    },
    getUserToken: (state) => {
      return state.userToken;
    },
    getUserPermissions: (state) => {
      return state.userPermissions;
    },
    getSuperAdminPermissions: (state) => {
      if (state.userPermissions != null) {
        return (
          state.userPermissions.edit_permissions &&
          state.userPermissions.edit_employees &&
          state.userPermissions.delete_employees
        );
      }
      return null;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USER_TOKEN(state, token) {
      state.userToken = token;
    },
    SET_USER_PERMISSIONS(state, data) {
      state.userPermissions = data;
    },
    IS_VALID(state, data) {
      state.userValid = data;
    },
    SET_LOGIN_ERROR(state, data) {
      state.userLoginError = data;
    },
    RESET_USER(state) {
      state.user = null;
      state.userToken = null;
      state.userPermissions = null;
      state.userValid = false;
      state.userLoginError = null;
    },
  },
  actions: {
    async getUserDataOnLogin({ commit }, payload) {
      const status = await this.checkHealth();
      if (status == 200) {
        const response = await this.getUserDataOnLoginAPI(payload);
        if (response == undefined) {
          return;
        }
        if (
          response.record != null &&
          typeof response.record === "object" &&
          response.token != null
        ) {
          commit("SET_USER", response.record);
          commit("SET_USER_TOKEN", response.token);
          commit("IS_VALID", true);
          commit("SET_LOGIN_ERROR", null);
          if (
            response.record.expand != null &&
            typeof response.record.expand.permissions_id === "object"
          ) {
            commit("SET_USER_PERMISSIONS", response.record.expand.permissions_id);
            commit("SET_LOGIN_ERROR", null);
          } else {
            commit("SET_USER_PERMISSIONS", null);
            commit("SET_LOGIN_ERROR", null);
          }
          commit("ADD_NOTIFICATION", { message: "Successfuly logged in", type: "success" }); // success/warning/danger
          return true;
        } else {
          commit("RESET_USER");
          commit("SET_LOGIN_ERROR", "User credentials are incorrect.");
          commit("ADD_NOTIFICATION", { message: "Check data fields..", type: "warning" }); // success/warning/danger
          return false;
        }
      } else {
        commit("ADD_NOTIFICATION", { message: "Try later..", type: "warning" }); // success/warning/danger
        commit("SET_LOGIN_ERROR", "Server down!");
        return false;
      }
    },
    async confirmUser({ commit }) {
      const response = await this.confirmUserAPI(this.state.user.userToken);
      if (response) {
        commit("IS_VALID", response);
      } else {
        commit("RESET_USER");
      }
    },
    async getUserPermissionsData({ commit }) {
      if (this.state.user != null && this.state.user.user.permissions_id != null) {
        const response = await this.getUserPermissionsAPI(this.state.user.user.permissions_id);
        if (response == undefined) {
          return;
        }
        if (response != null && typeof response === "object") {
          commit("SET_USER_PERMISSIONS", response);
        } else {
          commit("SET_USER_PERMISSIONS", null);
        }
      }
    },
    resetUserToken({ commit }) {
      this.resetTokenAPI();
      commit("RESET_USER");
      commit("SET_LOGIN_ERROR", null);
      commit("ADD_NOTIFICATION", { message: "Successfuly logged out", type: "success" }); // success/warning/danger
    },
  },
};
