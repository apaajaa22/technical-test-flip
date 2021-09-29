import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailPage from '../screens/DetailPage';
import TransactionPage from '../screens/TransactionPage';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="transaction-page">
        <Stack.Screen
          name="transaction-page"
          component={TransactionPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="transaction-detail"
          component={DetailPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
