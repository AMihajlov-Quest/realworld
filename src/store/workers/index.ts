import { Module } from "vuex";
import { RootState } from "../types";
import { WorkersState } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
export const initialState = (): WorkersState => ({
  workers: [
    {
      id: 0,
      name: "Alex",
    },
  ],
  selectedWorker: 0,
});
export const state: WorkersState = initialState();
const namespaced = true;
export const workers: Module<WorkersState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
