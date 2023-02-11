import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {FlatList, StyleSheet, Text} from 'react-native'

import {fetchUser} from '../../redux/actions/user'
import {AppDispatch, RootState} from '../../redux/store'
import {IProduct} from '../../lib/interfaces'
import {fetchProducts} from '../../redux/actions/product'

import AppScreen from '../../layouts/AppScreen'
import AppSearchBar from '../../components/AppSearchBar'
import AppCard from '../../components/AppCard'

const Home = () => {
  const [searchCtx, setSearchCtx] = useState<string>('')
  const {products} = useSelector((state: RootState) => state.product)
  const dispatch: AppDispatch = useDispatch()
  const handleSearch = (value: string) => {
    setSearchCtx(value)
  }

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchProducts(searchCtx))
  }, [searchCtx, dispatch])

  return (
    <AppScreen title="Home" scroll={false}>
      <AppSearchBar value={searchCtx} onChange={handleSearch} />
      <FlatList
        data={[]}
        keyExtractor={(item, index: number) => item.id}
        renderItem={() => <AppCard />}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})

export default Home
