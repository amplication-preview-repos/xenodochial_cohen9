import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WORKOUT_TITLE_FIELD } from "../workout/WorkoutTitle";

export const ExerciseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
