import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (e) {
    console.error('[Local Storage Controller]:[Store Data]:', e)
    return false
  }
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.error('[Local Storage Controller]:[Get Data]:', e)
    return undefined
  }
}

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (e) {
    console.error('[Local Storage Controller]:[Remove Data]:', e)
    return false
  }
}

export const clearData = async () => {
  try {
    await AsyncStorage.clear()
    return true
  } catch (e) {
    console.error('[Local Storage Controller]:[Clear Storage]:', e)
    return false
  }
}
