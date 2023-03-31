import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from "expo-router";
import HomeScreen from "./home/home";
import DetailsScreen from "./details/details";

export default function App() {
  const [isReady, setReady] = useState(false);

  const Stack = createNativeStackNavigator();


  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <>
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

      {/* When all loading is setup, unmount the splash screen component. */}
      {!isReady && <SplashScreen />}
      
    </>
  );
}