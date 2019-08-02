import React, { Component } from 'react';
import { StyleSheet, Styles, Text, View, TouchableHighlight, } from 'react-native';
import MyButton from './MyButton';
import BoardList from "./BoardList";

let board = [
    {
        key: '1',
        title: '제목1',
        content: '내용1'
    },
    {
        key: '2',
        title: "제목2",
        content: '내용2'
    }
];

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: board
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 40 }}>홈 스크린!</Text>
                <MyButton
                    //navigation={this.props.navigation}
                    onPress={() => this.props.navigation.push('Create')}
                    title="글 작성" />
                <BoardList board={this.state.board} navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        flexDirection: "column",
    }
});
