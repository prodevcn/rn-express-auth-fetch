import React, {useState, useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native'
import {AppDispatch, RootState} from '../../redux/store'
// import {formValidation} from '../../lib/utils'
import {ILoginData} from '../../lib/interfaces'
import {login} from '../../redux/actions/auth'

import AppScreen from '../../layouts/AppScreen'
import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'
import AppLink from '../../components/AppLink'

import LockIcon from '../../assets/image/svg/lock.svg'
import EmailIcon from '../../assets/image/svg/mail.svg'

const Login = () => {
  const dispatch: AppDispatch = useDispatch()
  const {fetching} = useSelector((state: RootState) => state.auth)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const clear = useCallback(() => {
    setEmail('')
    setPassword('')
  }, [])

  const handleLogin = () => {
    // if (!formValidation('email', email))
    //   console.log('please input valid email address')
    // else if (!formValidation('password', password))
    //   console.log('please input valid password')
    // else console.log('okay')
    const loginData: ILoginData = {email, password}
    dispatch(login(loginData))
  }

  useEffect(() => {
    clear()
    return () => {
      clear()
    }
  }, [clear])

  return (
    <AppScreen title="LOGIN" scroll={false} loading={fetching}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logoTitle}>Auth & Fetch</Text>
            <Image
              source={require('../../assets/image/logo.png')}
              alt="App Logo"
              style={styles.logo}
            />
            <AppInput
              type="email"
              value={email}
              onChange={setEmail}
              labelIcon={<EmailIcon width={20} height={20} color="#fff" />}
            />
            <AppInput
              type="password"
              value={password}
              onChange={setPassword}
              labelIcon={<LockIcon width={20} height={20} color="#fff" />}
            />
            <View style={styles.forgotPwdArea}>
              <Text>Did you </Text>
              <AppLink target="forgot-password" label="forget password?" />
            </View>
            <AppButton
              label="LOGIN"
              rounded={false}
              full
              onPress={handleLogin}
            />
            <View style={styles.registerArea}>
              <Text>Don't you have any account? </Text>
              <AppLink target="register" label=">> Register" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </AppScreen>
  )
}

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginVertical: 20,
  },
  forgotPwdArea: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  registerArea: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  logoTitle: {
    fontSize: 30,
    color: '#892352',
    fontWeight: 'bold',
  },
})

export default Login
