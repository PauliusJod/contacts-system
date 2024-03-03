export default {
  state: {
    modalVisible: false,
    modalComponent: null,
  },
  getters: {
    getVisible: (state) => {
      return state.modalVisible;
    },
    getComponent: (state) => {
      return state.modalComponent;
    },
  },
  mutations: {
    TOGGLE_VISIBLE(state) {
      state.modalVisible = !state.modalVisible;
    },
    SHOW_MODAL(state, componentName) {
      state.modalComponent = componentName;
    },
    REMOVE_MODAL(state) {
      state.modalComponent = null;
    },
  },
};
