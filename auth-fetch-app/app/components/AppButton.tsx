import React from 'react'
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native'

type AppButtonProps = {
  type?: string
  label?: string
  img?: string
  rounded?: boolean
  style?: ViewStyle
  full?: boolean
  onPress: () => void
}

const AppButton = (props: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style, props.full ? styles.full : {}]}
      activeOpacity={0.8}
      onPress={props.onPress}>
      <Text style={styles.label}>{props.label ?? 'Default Button'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#892352',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  full: {
    width: '100%',
  },
  label: {
    color: '#fff',
  },
})

export default AppButton
