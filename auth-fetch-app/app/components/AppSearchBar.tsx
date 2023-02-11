import React from 'react'
import {TextInput, View, ViewStyle, StyleSheet} from 'react-native'
import SearchIcon from '../assets/image/svg/search.svg'

type AppSearchBarProps = {
  style?: ViewStyle
  value: string
  onChange: (str: string) => void
}

const AppSearchBar = (props: AppSearchBarProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <SearchIcon width={20} height={20} color="#fff" />
      <TextInput
        style={styles.input}
        onChangeText={props.onChange}
        value={props.value}
        placeholder="Search by name, size, color, amount "
        placeholderTextColor="#ddd"
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
    backgroundColor: '#555',
  },
  input: {
    width: '100%',
    color: '#fff',
    paddingLeft: 10,
  },
})

export default AppSearchBar
