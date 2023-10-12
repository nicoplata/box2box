import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
        }} 
    >
      <Stack.Screen component={Login} name='login'/>
      <Stack.Screen component={Register} name='register'/>
    </Stack.Navigator>
  )
}

export default AuthNav