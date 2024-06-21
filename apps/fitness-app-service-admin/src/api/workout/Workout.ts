import { Exercise } from "../exercise/Exercise";
import { User } from "../user/User";

export type Workout = {
  createdAt: Date;
  description: string | null;
  duration: number | null;
  exercises?: Array<Exercise>;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
