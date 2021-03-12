import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import HomePage from './pages/home';
import LogInPage from "./pages/logIn";
const Stack = createStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name = "LogInPage"
          component={LogInPage}
      />
      <Stack.Screen
          name = "HomePage"
          component={HomePage}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
