import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  // Image,
} from 'react-native'

import {AppDispatch, RootState} from '../../redux/store'
// import {formValidation} from '../../lib/utils'
import {register} from '../../redux/actions/auth'
import {IRegisterData} from '../../lib/interfaces'

import AppScreen from '../../layouts/AppScreen'
import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'
import AppLink from '../../components/AppLink'

import UserIcon from '../../assets/image/svg/user.svg'
import LockIcon from '../../assets/image/svg/lock.svg'
import EmailIcon from '../../assets/image/svg/mail.svg'

const {width} = Dimensions.get('window')

const Register = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const dispatch: AppDispatch = useDispatch()
  const {fetching} = useSelector((state: RootState) => state.auth)

  const registerHandle = () => {
    const formData: IRegisterData = {username, email, password}
    dispatch(register(formData))
  }

  return (
    <AppScreen title="Register" scroll={false} loading={fetching}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logoTitle}>Auth & Fetch</Text>
            {/* <Image
              source={require('../../assets/image/logo.png')}
              alt="App Logo"
              style={styles.logo}
            /> */}
            <AppInput
              type="username"
              value={username}
              onChange={setUsername}
              labelIcon={<EmailIcon width={20} height={20} color="#fff" />}
            />
            <AppInput
              type="email"
              value={email}
              onChange={setEmail}
              labelIcon={<UserIcon width={20} height={20} color="#fff" />}
            />
            <AppInput
              type="password"
              value={password}
              onChange={setPassword}
              labelIcon={<LockIcon width={20} height={20} color="#fff" />}
            />
            <AppInput
              type="confirm-password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              labelIcon={<LockIcon width={20} height={20} color="#fff" />}
            />
            <AppButton
              label="REGISTER"
              rounded={false}
              full
              onPress={registerHandle}
            />
            <View style={styles.registerArea}>
              <Text>Do you have an account? </Text>
              <AppLink target="login" label=">> Login" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
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

export default Register
