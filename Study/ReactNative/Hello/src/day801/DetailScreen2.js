import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text, View, Styles } from 'react-native'



export default class DetailScreen2 extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}> 상세페이지! </Text>
        <Text style={styles.title}> 제목 </Text>
        <Text style={styles.content}> 글 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 20,
    fontWeight: '900',
  },

  content: {
    fontSize: 20,
    margin: 20,
  }
})
