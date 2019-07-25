import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Greeting from './Greeting'

export default class GreetingGroups extends Component {
    render() {
        return(
            <View>
                <Greeting name="일이삼사"/>
                <Greeting name="오육칠팔"/>
                <Greeting name="구십"/>
            </View>
        )
    }
}