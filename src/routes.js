import 'react-native-gesture-handler';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Apresentation from './pages/Apresentation';
import StepOne from './pages/Steps/StepOne';
import StepTwo from './pages/Steps/StepTwo';
import StepThree from './pages/Steps/StepThree';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  const hasShortCode = useSelector((state) => state.formState.started);
  const firstAcess = useSelector((state) => state.formState.firstAcess);
  return (
    <NavigationContainer>
      {firstAcess ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Apresentation"
            component={Apresentation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StepOne"
            component={StepOne}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StepTwo"
            component={StepTwo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StepThree"
            component={StepThree}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
