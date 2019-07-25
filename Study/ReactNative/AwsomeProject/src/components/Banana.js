import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Banana extends Component {
    render() {
      const pic ={
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }
      return (
       <View> 
         <Image source={pic} style={{width:200, height:200}}> 
         
         </Image>
          {/* <Text>1</Text>
            <Text>2</Text>
          <Text>3</Text> */} 
       </View>
       )
    }
}