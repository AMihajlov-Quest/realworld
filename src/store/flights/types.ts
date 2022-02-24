export type FlightType = {
  num: string;
  from: string;
  to: string;
  from_date: string;
  to_data: string;
  plane: string;
  duration: number;
  from_gate: number;
  to_gate: number;
};

export interface FlightsState {
  flights: FlightType[];
  selectedFlight: number;
}
