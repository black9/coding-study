import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 30 }}> 홈 화면 입니다 </Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate("Detail")}>
          <Text style={{ color: "green", fontSize: 18 }}> Detail가기 </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate("Setting")}>
          <Text style={{ color: "green", fontSize: 18, flexDirection: 'row', alignItems: 'flex-end' }}> Setting </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  }
});
