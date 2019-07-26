import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Text, Button} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={{width : '90%', justifyContent: 'center', }}>
                <Text style={styles.title}> CAR ACTION </Text>
                <TextInput style={styles.input} placeholder='이름' > </TextInput>
                <TextInput style={styles.input} placeholder='이메일'> </TextInput>
                <Button style={styles.button} title= '회원가입/로그인'  /> 
            </View> 
        )
    }
} 


const styles = StyleSheet.create({
    title:{ alignSelf: "center", fontSize: 40, color:"#DB3A00", marginBottom : 10 },
    input:{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom : 10},
    button: {backgroundColor: '#7a42f4', padding: 10, margin: 15, height: 40}, 
    
})
 