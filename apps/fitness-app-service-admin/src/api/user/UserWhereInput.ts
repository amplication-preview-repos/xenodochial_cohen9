import { DietListRelationFilter } from "../diet/DietListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";
import { WorkoutListRelationFilter } from "../workout/WorkoutListRelationFilter";

export type UserWhereInput = {
  diets?: DietListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  progresses?: ProgressListRelationFilter;
  username?: StringFilter;
  workouts?: WorkoutListRelationFilter;
};
