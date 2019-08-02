import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { removeOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';



import MyButton from './MyButton'

export default class BoardCreateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }

    submitBoard() {
        const createFunc = this.props.navigation.getParam('createFunc')
        const boardItem = {
            title: this.state.title,
            content: this.state.content
        }
        createFunc(boardItem)
        return this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View>

                <Text style={{ fontSize: 30, color: 'blue', textAlign: 'center' }}> 글 쓰기 </Text>

                <TextInput style={{ borderWidth: 1, fontSize: 20, height: 50, margin: 20, marginTop: 30 }} placeholder="제목" onChangeText={(text) => this.setState({ title: text })} />
                <Text> {this.state.title}</Text>
                <TextInput style={{ borderWidth: 1, minHeight: 300, margin: 20, marginTop: 50 }} placeholder="내용" multiline={true} onChangeText={(text) => this.setState({ content: text })} />
                <Text> {this.state.content}</Text>

                <View style={{ margin: 20, alignself: 'flex-end' }}>
                    <MyButton title="제출하기" onPress={this.submitBoard.bind(this)} />
                </View>
            </View>

        )
    }
}