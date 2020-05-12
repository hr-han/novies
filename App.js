import React, { useState } from 'react';
import { AppLoading } from "expo";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { Asset } from 'expo-asset';
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import Stack from './navigation/Stack';

const cacheImages = images => 
  images.map(image => {
    if(typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

  const cacheFonts = fonts => fonts.map(font=>Font.loadAsync(font))


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1589157390189-a3a7f7ff0866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font])
    console.log(fonts);
    return Promise.all([...images, ...fonts])
  }
  const onFinish = async () => setIsReady(true)
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content"/>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );

}

