import React, {Component} from 'react';
import {View ,Button, TouchableHighlight, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'name' : '김현구'
        }
    }
    onPressButton1() {
        alert("버튼 클릭2")
    }
    alertStateName() {
        alert(this.state.name)
    }
    render() {
        return(
            <View>
                <TouchableHighlight onPress={this._onPressButton}>
                        <Image
                        //style={StyleSheet.button}
                        source={require('./myButton.png')}
                        style={{width: 50, height: 50}}
                        />                        
                </TouchableHighlight>
                <Text>HighLight</Text>

            <TouchableOpacity onPress={this._onPressButton}>
                <Image
                    //style={StyleSheet.button}
                    source={require('./myButton.png')}
                    style={{width: 50, height: 50}}
                    />
                </TouchableOpacity>
                <Text>Opacity</Text>
            
            <Button onPress={()=>alert('버튼클릭1')} title="눌러주세요" /> 
            
            <Button onPress={this.onPressButton1} title="버튼2 클릭" 
                    color="#841584"/> 
                
            <Button onPress={this.alertStateName} title="이름보기" /> 
            </View>
        )
    }
}