import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, } from "react-native";

export default class Settings extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: '환경설정',
            tabBarIcon: (
                <Ionicons name="md-settings" size={20} color="#ff6666" />
            ),
        };
    };

    render() {
        return (
            <View style={style.container}>
                <Text style={{ color='tomato', fontSize: 40 }}>Setting을 위한 스크린</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

})
