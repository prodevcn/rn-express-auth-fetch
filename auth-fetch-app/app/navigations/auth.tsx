import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../screens/auth/Login'
import ForgotPassword from '../screens/auth/ForgotPassword'
import Register from '../screens/auth/Register'

const Auth = () => {
  const Stack = createNativeStackNavigator()
  const headerOption = {
    headerShown: false,
  }

  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Login} options={headerOption} />
      <Stack.Screen
        name="register"
        component={Register}
        options={headerOption}
      />
      <Stack.Screen
        name="forgot-password"
        component={ForgotPassword}
        options={headerOption}
      />
    </Stack.Navigator>
  )
}

export default Auth
