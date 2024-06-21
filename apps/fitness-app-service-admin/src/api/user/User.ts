import { Diet } from "../diet/Diet";
import { Progress } from "../progress/Progress";
import { JsonValue } from "type-fest";
import { Workout } from "../workout/Workout";

export type User = {
  createdAt: Date;
  diets?: Array<Diet>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  progresses?: Array<Progress>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  workouts?: Array<Workout>;
};
