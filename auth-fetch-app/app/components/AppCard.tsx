import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AppCard = () => {
  return (
    <View style={styles.container}>
      <Text>AppCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    minHeight: 200,
    marginVertical: 10,
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
})

export default AppCard
