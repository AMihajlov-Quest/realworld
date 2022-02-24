import { GetterTree } from "vuex";
import { FlightsState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<FlightsState, RootState> = {
  getFlights: (state) => {
    return state.flights;
  },
  getSelectedFlight: (state) => {
    return state.flights[state.selectedFlight];
  },
};
