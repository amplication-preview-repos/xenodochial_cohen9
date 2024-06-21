import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WorkoutTitle } from "../workout/WorkoutTitle";

export const ExerciseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="reps" source="reps" />
        <NumberInput step={1} label="sets" source="sets" />
        <ReferenceInput source="workout.id" reference="Workout" label="Workout">
          <SelectInput optionText={WorkoutTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
