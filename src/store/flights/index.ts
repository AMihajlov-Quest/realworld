import { Module } from "vuex";
import { RootState } from "../types";
import { FlightsState } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
export const initialState = (): FlightsState => ({
  flights: [
    {
      num: "",
      from: "",
      to: "",
      from_date: "",
      to_data: "",
      plane: "",
      duration: 0,
      from_gate: 0,
      to_gate: 0,
    },
  ],
  selectedFlight: 0,
});
export const state: FlightsState = initialState();
const namespaced = true;
export const flights: Module<FlightsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
