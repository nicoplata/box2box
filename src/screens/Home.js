import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Header title="Categorias" />
      <Categories />
    </>
  )
}

export default Home