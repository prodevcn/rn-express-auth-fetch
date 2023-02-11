import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {logout} from '../redux/actions/auth'
import Home from '../screens/main/Home'
import {AppDispatch, RootState} from '../redux/store'

const Main = () => {
  const Stack = createNativeStackNavigator()
  const {username} = useSelector((state: RootState) => state.user)
  const dispatch: AppDispatch = useDispatch()

  const logoutHandle = () => {
    dispatch(logout())
  }

  const logoutButton = () => {
    return (
      <TouchableOpacity onPress={logoutHandle}>
        <Text style={styles.logoutColor}>Logout</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerTitle: username ?? 'Home', headerRight: logoutButton}}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  logoutColor: {
    color: '#892352',
  },
})

export default Main
