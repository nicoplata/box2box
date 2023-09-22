import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Categorias" navigation={navigation}/>
      <Categories navigation={navigation}/>
    </SafeAreaView>
  )
}

export default Home