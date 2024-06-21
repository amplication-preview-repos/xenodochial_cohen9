import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProgressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="bodyFat" source="bodyFat" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
