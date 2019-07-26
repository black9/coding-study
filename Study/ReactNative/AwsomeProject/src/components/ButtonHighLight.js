import React, {Component} from 'react';
import {View, Text} from 'react-native';



    render(){
     return(
        <TouchableHighlight
        onPress={this.search}
        underlayColor="red"
        >
        <Image
         style={{width:100, height:100}}
         source={require('search.png')} />
        </TouchableHighlight>
        )
    }
}