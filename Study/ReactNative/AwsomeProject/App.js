import React from 'react';
import { StyleSheet, Text, View, Styles} from 'react-native';

import Banana from './src/components/Banana';
import GreetingGroup from './src/components/GreetingGroup';
import BlinkApp from './src/components/BlinkApp';
import StyleApp from './src/components/StyleApp';
import Problem1 from './src/components/Problem1';
import FlexDimensionBasics from './src/components/FlexDimensionBasics';
import Em  from './src/components/Em';
import Problem2  from './src/components/Problem2';
import BaseTextInput from './src/components/BaseTextInput';
import ButtonGroup from './src/components/ButtonGroup';
import SectionListBasics from './src/components/SectionListBasics';
import FlatListBasics from './src/components/FlatListBasics';

export default function App() {
  return (
    <View style={styles.container}>
        {/*<Text>Hello React Native</Text>
        <Text>By Kim Hyeon Gu</Text>
        
        <Banana></Banana>
        <GreetingGroup></GreetingGroup>
        <BlinkApp></BlinkApp>
        <StyleApp></StyleApp> 
        <Problem1></Problem1> 
        <FlexDimensionBasics></FlexDimensionBasics> 
        <Em>안녕하세요.</Em>

        <Header style={{Color : 'red', fontSize:100}}> 안녕하세요</Header>
        <BaseTextInput></BaseTextInput>
        <ButtonGroup></ButtonGroup>

        <SectionListBasics></SectionListBasics>*/}

        <FlatListBasics></FlatListBasics>

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
