import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  reps?: SortOrder;
  sets?: SortOrder;
  updatedAt?: SortOrder;
  workoutId?: SortOrder;
};
