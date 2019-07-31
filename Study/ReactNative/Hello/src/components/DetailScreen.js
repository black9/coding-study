import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text, View, Styles } from 'react-native'



export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigtitle}>상세 스크린!</Text>

        <TouchableHighlight onPress={() => this.props.navigation.push('Detail')}>
          <Text style={{ color: 'blue', fontSize: 35, marginTop: 20 }}> 디테일의 디테일 가기 </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Text style={{ color: 'yellow', fontSize: 35, marginTop: 20 }}>  뒤로 가기</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.popToTop()}>
          <Text style={{ color: 'red', fontSize: 35, marginTop: 20 }}> 처음으로 가기 </Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigtitle: {
    fontWeight: 'bold',
    fontSize: 50,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
