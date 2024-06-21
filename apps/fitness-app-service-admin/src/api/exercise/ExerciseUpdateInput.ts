import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";

export type ExerciseUpdateInput = {
  description?: string | null;
  name?: string | null;
  reps?: number | null;
  sets?: number | null;
  workout?: WorkoutWhereUniqueInput | null;
};
