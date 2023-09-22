import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';
import ProductDetail from './src/screens/ProductDetail';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {

  const [fontsLoaded] = useFonts({
    Satoshi: require("./assets/Fonts/Satoshi-Bold.ttf"),
  })

  if (!fontsLoaded){
    return;
  }

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}