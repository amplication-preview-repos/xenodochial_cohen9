import { ExerciseCreateNestedManyWithoutWorkoutsInput } from "./ExerciseCreateNestedManyWithoutWorkoutsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkoutCreateInput = {
  description?: string | null;
  duration?: number | null;
  exercises?: ExerciseCreateNestedManyWithoutWorkoutsInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
