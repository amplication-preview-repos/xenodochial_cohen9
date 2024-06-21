import { Diet as TDiet } from "../api/diet/Diet";

export const DIET_TITLE_FIELD = "name";

export const DietTitle = (record: TDiet): string => {
  return record.name?.toString() || String(record.id);
};
