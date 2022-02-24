import { GetterTree } from "vuex";
import { WorkersState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<WorkersState, RootState> = {
  getWorkers: (state) => {
    return state.workers;
  },
  getSelectedWorker: (state) => {
    return state.selectedWorker;
  },
};
