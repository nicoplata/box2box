import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';

export default function App() {

  return (
    <SafeAreaView>
      {/* <Home />
      <Search /> */}
      <Products category="smartphones" />
    </SafeAreaView>
  );
}
