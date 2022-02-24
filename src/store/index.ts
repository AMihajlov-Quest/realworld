import Vue from "vue";
import Vuex from "vuex";
import { LoadState, RootState } from "./types";
import { workers } from "./workers/index";
import { flights } from "./flights/index";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    status: 0,
  },
  getters: {
    getLoadState: (state) => {
      return state.status;
    },
  },
  mutations: {
    setStatus(state, payload: LoadState) {
      state.status = payload;
    },
  },
  modules: {
    workers,
    flights,
  },
});
