import { User } from "../user/User";

export type Progress = {
  bodyFat: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  weight: number | null;
};
