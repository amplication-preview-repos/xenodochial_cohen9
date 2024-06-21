import { Workout } from "../workout/Workout";

export type Exercise = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  reps: number | null;
  sets: number | null;
  updatedAt: Date;
  workout?: Workout | null;
};
