import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./src/components/HomeScreen";
import DetailScreen from "./src/components/DetailScreen";
import SettingScreen from "./src/components/SettingScreen";
import { createStackNavigator, createAppContainer, createTabNavigator, createButtonTapNavigator } from "react-navigation";


const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  },

});

const defaultNavigationOptions = {
  headerTintColor: 'white',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',

    labelStyle: {
      fontSize: 16,
    },
  },
};

const TabNavigator = createButtonTapNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '홈'
    }
  },
  Setting: {
    screen: SettingScreen
  }
},
  {
    defaultNavigationOptions
  })



const AppContainer = createAppcontainer(TapNavigator);
const StackContainer = createAppcontainer(StackContainer);

export default function App() {
  return (
    <Appcontainer />
  );
}



