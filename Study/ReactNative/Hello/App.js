import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./src/components/HomeScreen";
import DetailScreen from "./src/components/DetailScreen";
import SettingScreen from "./src/components/SettingScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  },
  Setting: {
    screen: SettingScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
  return <AppContainer />;
}
