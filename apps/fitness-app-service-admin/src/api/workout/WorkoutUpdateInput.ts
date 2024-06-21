import { ExerciseUpdateManyWithoutWorkoutsInput } from "./ExerciseUpdateManyWithoutWorkoutsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkoutUpdateInput = {
  description?: string | null;
  duration?: number | null;
  exercises?: ExerciseUpdateManyWithoutWorkoutsInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
