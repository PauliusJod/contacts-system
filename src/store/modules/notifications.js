export default {
  state: {
    Notifications: [],
  },
  getters: {
    getNotifications: (state) => {
      return state.Notifications;
    },
  },
  mutations: {
    ADD_NOTIFICATION(state, notificationText) {
      state.Notifications.push({
        ...notificationText,
        id: (Date.now() + Math.round(Math.random() * 1000)).toString(),
      });
    },
    REMOVE_NOTIFICATION(state, notificationID) {
      state.Notifications = state.Notifications.filter((obj) => {
        return obj.id != notificationID;
      });
    },
    RESET_NOTIFICATIONS(state) {
      state.Notifications = [];
    },
  },
  actions: {
    removeNotification({ commit }, notificationID) {
      commit("REMOVE_NOTIFICATION", notificationID);
    },
    resetNotifications({ commit }) {
      commit("RESET_NOTIFICATIONS");
    },
  },
};
