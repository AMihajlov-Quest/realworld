import { MutationTree } from "vuex";
import { FlightsState, FlightType } from "./types";

export enum FlightsMutations {
  SET_FLIGHTS = "SET_FLIGHTS",
  SET_SELECTED_FLIGHTS = "SET_SELECTED_FLIGHTS",
}

export const mutations: MutationTree<FlightsState> = {
  [FlightsMutations.SET_FLIGHTS](state, payload: Array<FlightType>) {
    state.flights = payload;
  },
  [FlightsMutations.SET_SELECTED_FLIGHTS](state, payload: FlightType) {
    state.selectedFlight = state.flights.indexOf(payload, 0);
  },
};
