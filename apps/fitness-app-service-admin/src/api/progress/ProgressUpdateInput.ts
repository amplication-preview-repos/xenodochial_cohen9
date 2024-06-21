import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProgressUpdateInput = {
  bodyFat?: number | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
  weight?: number | null;
};
