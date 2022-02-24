import { ActionTree } from "vuex";
import { FlightsState } from "./types";
import { RootState } from "../types";
import { FlightsMutations } from "./mutations";
import axios from "axios";
export enum FlightsActions {
  GET_FLIGHTS_DATA = "GET_FLIGHTS_DATA",
}

export const actions: ActionTree<FlightsState, RootState> = {
  async [FlightsActions.GET_FLIGHTS_DATA]({ commit }, id: number) {
    axios
      .get(`https://interview-mock.herokuapp.com/api/workers/${id}`)
      .then((res) => commit(FlightsMutations.SET_FLIGHTS, res.data));
  },
};
