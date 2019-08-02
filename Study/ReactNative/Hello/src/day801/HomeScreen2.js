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

    createBoard(boardItem) {
        // key: '2',
        // title: "제목2",
        // content: '내용2'
        const itemKey = (this.state.board.length + 1).toString()
        const item = {
            key: itemKey,
            title: boardItem.title,
            content: boardItem.content
        }
        const board = this.state.board.concat(item);
        //console.log(this.state.board)
        this.setState({ board: board })
        return
    }

    deleteBoard(itemKey) {
        const board = this.state.board.filter(
            (item) => {
                if (item.key != itemKey) {
                    return item
                }
            }
        )
        this.setState({ board: board })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 40 }}>홈 스크린!</Text>
                <MyButton
                    title="글 작성" onPress={() => this.props.navigation.push('Create', { 'createFunc': this.createBoard.bind(this) })}
                //navigation={this.props.navigation}
                />

                <BoardList board={this.state.board} navigation={this.props.navigation} deleteFuc={this.deleteBoard.bind(this)} />

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
