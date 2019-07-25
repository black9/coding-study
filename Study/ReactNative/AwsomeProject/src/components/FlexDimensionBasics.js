import React, {Component} from 'react';
import { View } from 'react-native';

export default class FlexDimensionBasics extends Component{
    render() {
        return (
            <View style={{flex: 1, width:'100%'}}>
                <View style={{flex: 1, backgroundColor:'red'}}/>
                <View style={{flex: 2, backgroundColor:'black'}}/>
                <View style={{flex: 3, backgroundColor:'blue'}}/>     
            </View>
        );
    }
};