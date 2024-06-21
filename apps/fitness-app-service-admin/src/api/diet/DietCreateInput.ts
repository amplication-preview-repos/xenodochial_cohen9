import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DietCreateInput = {
  calories?: number | null;
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
