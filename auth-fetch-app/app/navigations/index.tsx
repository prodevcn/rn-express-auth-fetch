import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AppDispatch, RootState} from '../redux/store'
import {checkAuth} from '../redux/actions/auth'
import Auth from './auth'
import Main from './main'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()
  const headerOption = {
    headerShown: false,
  }

  const {authenticated} = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated ? (
          <Stack.Screen name="main" component={Main} options={headerOption} />
        ) : (
          <Stack.Screen name="auth" component={Auth} options={headerOption} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation
