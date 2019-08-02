import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

export default class BoardList extends React.Component {

    renderBoard({ item }) {
        //this.props.deleteFuc()
        return (
            <TouchableOpacity style={{ flex: 1, width: "100%", flexDirection: 'row', borderWidth: 1 }} onPress={() => this.props.navigation.push('Detail', { item: item })}>
                <Text style={{ fontSize: 24, flex: 2 }}> {item.key}</Text>
                <Text style={{ fontSize: 24, flex: 10 }}> {item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ marginTop: 20, width: "100%" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 게시물 </Text>
                <FlatList data={this.props.board}
                    renderItem={this.renderBoard.bind(this)} />
            </View>
        )
    }
}