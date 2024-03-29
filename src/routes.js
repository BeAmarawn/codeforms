import 'react-native-gesture-handler';
import * as React from 'react';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/AntDesign';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Apresentation from './pages/Apresentation';
import StepOne from './pages/Steps/StepOne';
import StepTwo from './pages/Steps/StepTwo';
import StepThree from './pages/Steps/StepThree';
import Home from './pages/Home';
import EnterCode from './pages/EnterCode';
import QrCodeScan from './pages/QrCodeScan';
import FormStart from './pages/FormStart';
import FormScreen from './pages/FormScreen';

const Stack = createStackNavigator();

export default function Routes() {
  const hasFormData = useSelector((state) => state.formState.formData);
  const firstAcess = useSelector((state) => state.formState.firstAcess);
  return (
    <NavigationContainer>
      {firstAcess && (
        <Stack.Navigator>
          <Stack.Screen
            name="Apresentation"
            component={Apresentation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StepOne"
            component={StepOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StepTwo"
            component={StepTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StepThree"
            component={StepThree}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
      {!hasFormData && !firstAcess && (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6719b7',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackImage: () => <Icon name="left" size={25} color="#fff" />,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterCode"
            component={EnterCode}
            options={{
              title: 'Inserir Código',
            }}
          />
          <Stack.Screen
            name="QrCodeScan"
            component={QrCodeScan}
            options={{
              title: 'Leia o QR do seu Form',
            }}
          />
        </Stack.Navigator>
      )}
      {hasFormData && !firstAcess && (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6719b7',
            },
          }}
        >
          <Stack.Screen
            name="FormStart"
            component={FormStart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FormScreen"
            component={FormScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
