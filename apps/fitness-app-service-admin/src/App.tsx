import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WorkoutList } from "./workout/WorkoutList";
import { WorkoutCreate } from "./workout/WorkoutCreate";
import { WorkoutEdit } from "./workout/WorkoutEdit";
import { WorkoutShow } from "./workout/WorkoutShow";
import { ExerciseList } from "./exercise/ExerciseList";
import { ExerciseCreate } from "./exercise/ExerciseCreate";
import { ExerciseEdit } from "./exercise/ExerciseEdit";
import { ExerciseShow } from "./exercise/ExerciseShow";
import { DietList } from "./diet/DietList";
import { DietCreate } from "./diet/DietCreate";
import { DietEdit } from "./diet/DietEdit";
import { DietShow } from "./diet/DietShow";
import { ProgressList } from "./progress/ProgressList";
import { ProgressCreate } from "./progress/ProgressCreate";
import { ProgressEdit } from "./progress/ProgressEdit";
import { ProgressShow } from "./progress/ProgressShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FitnessAppService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Workout"
          list={WorkoutList}
          edit={WorkoutEdit}
          create={WorkoutCreate}
          show={WorkoutShow}
        />
        <Resource
          name="Exercise"
          list={ExerciseList}
          edit={ExerciseEdit}
          create={ExerciseCreate}
          show={ExerciseShow}
        />
        <Resource
          name="Diet"
          list={DietList}
          edit={DietEdit}
          create={DietCreate}
          show={DietShow}
        />
        <Resource
          name="Progress"
          list={ProgressList}
          edit={ProgressEdit}
          create={ProgressCreate}
          show={ProgressShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
