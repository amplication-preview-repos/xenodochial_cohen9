import { SortOrder } from "../../util/SortOrder";

export type DietOrderByInput = {
  calories?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
