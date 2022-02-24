export type WorkerType = {
  id: number;
  name: string;
};

export interface WorkersState {
  workers: WorkerType[];
  selectedWorker: number;
}
