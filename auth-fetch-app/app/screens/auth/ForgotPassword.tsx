import React, {useState, useEffect, useCallback} from 'react'
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

import AppScreen from '../../layouts/AppScreen'
import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'

import EmailIcon from '../../assets/image/svg/mail.svg'

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('')

  const handleSubmit = () => {
    console.log('pressed submit button')
  }

  const clear = useCallback(() => {
    setEmail('')
  }, [])

  useEffect(() => {
    clear()
  }, [clear])

  return (
    <AppScreen title="Forgot Password" scroll={false}>
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
            <AppButton
              label="SUBMIT"
              rounded={false}
              full
              onPress={handleSubmit}
            />
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

export default ForgotPassword
