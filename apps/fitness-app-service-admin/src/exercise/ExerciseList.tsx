import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKOUT_TITLE_FIELD } from "../workout/WorkoutTitle";

export const ExerciseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Exercises"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="reps" source="reps" />
        <TextField label="sets" source="sets" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Workout" source="workout.id" reference="Workout">
          <TextField source={WORKOUT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
