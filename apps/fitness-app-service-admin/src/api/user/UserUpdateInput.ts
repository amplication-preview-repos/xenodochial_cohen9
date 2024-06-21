import { DietUpdateManyWithoutUsersInput } from "./DietUpdateManyWithoutUsersInput";
import { ProgressUpdateManyWithoutUsersInput } from "./ProgressUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WorkoutUpdateManyWithoutUsersInput } from "./WorkoutUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  diets?: DietUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  progresses?: ProgressUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  workouts?: WorkoutUpdateManyWithoutUsersInput;
};
