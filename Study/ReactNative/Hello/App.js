import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import { createStackNavigator, RouteConfigs, BottomTabNavigatorConfig, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import SettingScreen from './src/components/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';



const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  },
  // Setting : {
  //   screen : SettingScreen
  // }
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
    screen: SettingScreen
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
