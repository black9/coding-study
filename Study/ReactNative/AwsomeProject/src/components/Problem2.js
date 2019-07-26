import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class Problem2 extends Component {
    render(){
        return (
            <Text style={[
                {fontSize:40, fontWeight:'bold'}, this.props.style]}>
                {this.props.childeren}
            </Text>
            )
    }
};