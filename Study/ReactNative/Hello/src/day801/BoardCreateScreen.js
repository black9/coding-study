import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { removeOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';
import { TextInput } from 'react-native-gesture-handler';

import MyButton from './MyButton'

export default class BoardCreateScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, color: 'blue', textAlign: 'center' }}> 글 쓰기 </Text>

                <TextInput></TextInput>

                <TextInput></TextInput>

                <MyButton title="글 작성" />

            </View>

        )
    }
}