import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class Em extends Component {
    render(){
        return (
            <Text style={{fontWeight:'bold', color:'red', fontSize:50}}>
                {this.props.children}
            </Text>
        )
    }
};