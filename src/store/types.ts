import { FlightsState } from "./flights/types";
import { WorkersState } from "./workers/types";

export interface RootState {
  status: number;
  workers?: WorkersState;
  flights?: FlightsState;
}

export enum LoadState {
  INIT = 0,
  LOADING = 1,
  ERROR = 2,
}
