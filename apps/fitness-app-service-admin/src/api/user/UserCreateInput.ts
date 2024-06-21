import { DietCreateNestedManyWithoutUsersInput } from "./DietCreateNestedManyWithoutUsersInput";
import { ProgressCreateNestedManyWithoutUsersInput } from "./ProgressCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WorkoutCreateNestedManyWithoutUsersInput } from "./WorkoutCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  diets?: DietCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  progresses?: ProgressCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  workouts?: WorkoutCreateNestedManyWithoutUsersInput;
};
