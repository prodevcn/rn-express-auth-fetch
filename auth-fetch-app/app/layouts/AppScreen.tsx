import React from 'react'
import type {PropsWithChildren} from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
} from 'react-native'

type DefaultProps = PropsWithChildren<{
  title?: string
  scroll?: boolean
  loading?: boolean
}>

const AppScreen = (props: DefaultProps) => {
  return (
    <SafeAreaView style={styles.app}>
      {props.loading && (
        <View style={styles.backdrop}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#892352" />
          </View>
        </View>
      )}
      {props.scroll ? (
        <ScrollView style={styles.scrollContainer}>{props.children}</ScrollView>
      ) : (
        <View style={styles.container}>{props.children}</View>
      )}
    </SafeAreaView>
  )
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  backdrop: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  loader: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AppScreen
