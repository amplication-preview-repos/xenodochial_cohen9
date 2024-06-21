import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DietUpdateInput = {
  calories?: number | null;
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
