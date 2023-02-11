import React from 'react'
import {TextInput, View, StyleSheet, ViewStyle} from 'react-native'
import {generatePlaceholder} from '../lib/utils'

type InputProps = {
  style?: ViewStyle
  value?: string
  labelIcon?: JSX.Element
  type: string
  onChange: (str: string) => void
}

const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      {props.labelIcon}
      <TextInput
        onChangeText={props.onChange}
        value={props.value}
        style={[styles.input, props.style]}
        secureTextEntry={
          props.type === 'password' || props.type === 'confirm-password'
            ? true
            : false
        }
        keyboardType={props.type === 'email' ? 'email-address' : 'default'}
        placeholder={generatePlaceholder(props.type)}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  input: {
    width: '100%',
    color: '#fff',
    paddingLeft: 10,
  },
})

export default Input
