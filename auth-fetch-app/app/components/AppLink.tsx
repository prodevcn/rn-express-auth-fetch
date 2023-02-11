import React from 'react'
import {TouchableOpacity, Text, ViewStyle, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

type AppLinkProps = {
  label: string
  target: string
  style?: ViewStyle
}

const AppLink = (props: AppLinkProps) => {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate(props.target as never)
  }

  return (
    <TouchableOpacity
      onPress={handleNavigation}
      style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label ?? 'LINK'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  label: {
    color: '#892352',
  },
})

export default AppLink
