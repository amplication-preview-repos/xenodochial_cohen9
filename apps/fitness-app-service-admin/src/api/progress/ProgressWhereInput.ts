import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProgressWhereInput = {
  bodyFat?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  weight?: FloatNullableFilter;
};
