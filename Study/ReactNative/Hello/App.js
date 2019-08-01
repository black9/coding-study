import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, RouteConfigs, BottomTabNavigatorConfig, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import SettingScreen2 from './src/day801/SettingScreen2';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen2 from './src/day801/HomeScreen2';
import DetailScreen2 from './src/day801/DetailScreen2';




const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen2
  },
  Detail: {
    screen: DetailScreen2
  },
  Setting: {
    screen: SettingScreen2
  }
});

const defaultNavigationOptions = {
  headerTintColor: 'white',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'black',

    labelStyle: {
      fontSize: 16,
    },
  },
};

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: StackNavigator,
    navigationOptions: {
      title: '홈',
      tabBarIcon: (
        <Ionicons name="ios-home" size={20} color="gray" />
      ),
    }
  },
  Setting: {
    screen: SettingScreen2
  }
},
  {
    defaultNavigationOptions
  })
// const AppContainer = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(TabNavigator);
const StackContainer = createAppContainer(StackNavigator)

export default function App() {

  return (

    <AppContainer></AppContainer>


  );
}
