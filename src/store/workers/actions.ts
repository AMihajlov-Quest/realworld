import { ActionTree } from "vuex";
import { WorkersState } from "./types";
import { RootState } from "../types";
import { WorkersMutations } from "./mutations";
import axios from "axios";
export enum WorkersActions {
  GET_WORKERS_DATA = "GET_WORKERS_DATA",
}

export const actions: ActionTree<WorkersState, RootState> = {
  async [WorkersActions.GET_WORKERS_DATA]({ commit }) {
    axios
      .get("https://interview-mock.herokuapp.com/api/workers/")
      .then((res) => {
        commit(WorkersMutations.SET_WORKERS, res.data);
        if (res.data[0].id) {
          commit(WorkersMutations.SET_SELECTED_WORKER, res.data[0].id);
        }
      });
  },
};
