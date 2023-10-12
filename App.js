import React from 'react';
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNav from './src/navigation/MainNav';

export default function App() {

  const [fontsLoaded] = useFonts({
    Satoshi: require("./assets/Fonts/Satoshi-Bold.ttf"),
  })

  if (!fontsLoaded){
    return;
  }

  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}