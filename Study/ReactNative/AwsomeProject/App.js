import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Banana from './src/components/Banana';
import GreetingGroup from './src/components/GreetingGroup';
import BlinkApp from './src/components/BlinkApp';
import StyleApp from './src/components/StyleApp';
import Problem1 from './src/components/Problem1';

export default function App() {
  return (
    <View style={styles.container}>
        {/*<Text>Hello React Native</Text>
        <Text>By Kim Hyeon Gu</Text>
        
        <Banana></Banana>
        <GreetingGroup></GreetingGroup>
        <BlinkApp></BlinkApp>
        <StyleApp></StyleApp> */}
       <Problem1></Problem1>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
