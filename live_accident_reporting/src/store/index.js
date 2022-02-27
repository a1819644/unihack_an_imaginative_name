import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    reports: [{ location: { lng: 138.572322, lat: -34.952511 } }],
  }),
  mutations: {
    addReport(state, payload) {
      state.reports = [...state.reports, payload];
    },
  },
  getters: {
    reports(state) {
      return state.reports;
    },
  },
});

export default store;
