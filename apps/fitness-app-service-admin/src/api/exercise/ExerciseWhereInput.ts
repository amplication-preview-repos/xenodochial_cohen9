import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WorkoutWhereUniqueInput } from "../workout/WorkoutWhereUniqueInput";

export type ExerciseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  reps?: IntNullableFilter;
  sets?: IntNullableFilter;
  workout?: WorkoutWhereUniqueInput;
};
