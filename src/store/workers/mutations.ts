import { MutationTree } from "vuex";
import { WorkersState, WorkerType } from "./types";

export enum WorkersMutations {
  SET_WORKERS = "SET_WORKERS",
  SET_SELECTED_WORKER = "SET_SELECTED_WORKER",
}

export const mutations: MutationTree<WorkersState> = {
  [WorkersMutations.SET_WORKERS](state, payload: Array<WorkerType>) {
    state.workers = payload;
  },
  [WorkersMutations.SET_SELECTED_WORKER](state, payload: number) {
    state.selectedWorker = payload;
  },
};
