import React from 'react';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    Satoshi: require("./assets/Fonts/Satoshi-Bold.ttf"),
  })

  if (!fontsLoaded){
    return;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </Provider>
  );
}