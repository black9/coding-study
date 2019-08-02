import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Style } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';



export default class MyButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    //onPress={() => this.props.navigation.push('Create')}
                    onPress={this.props.onPress}
                >
                    <Text style={{ backgroundColor: 'tomato', fontSize: 22, padding: 10, color: 'white', fontWeight: "bold" }}> {this.props.title} </Text>
                </TouchableOpacity>
            </View>


        )
    }
}