import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ExerciseListRelationFilter } from "../exercise/ExerciseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkoutWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  exercises?: ExerciseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
