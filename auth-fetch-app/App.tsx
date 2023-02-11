import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux'
import AppNavigation from './app/navigations'
import {checkAuth} from './app/redux/actions/auth'
import store from './app/redux/store'

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide()
    store.dispatch(checkAuth())
  }, [])

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
