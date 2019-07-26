import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class StyleApp extends Component {
    render(){
        return (
            <View>
                <Text style={{color:'red'}}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bighblue</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color : 'red',
    },
});