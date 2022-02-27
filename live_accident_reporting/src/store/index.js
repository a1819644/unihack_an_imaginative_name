import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    reports: [
      {
        location: { lng: 138.572322, lat: -34.952511 },
        type: "other",
        weather: "snow",
        vehicles: ["car", "car"],
      },
    ],
  }),
  mutations: {
    setReports(state, payload) {
      state.reports = [...payload];
    },
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
