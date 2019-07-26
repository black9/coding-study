import React, {Component} from 'react';
import {View,Text, FlatList, StyleSheet, } from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return (
            <View style={{flex:1, paddingTop:22}}>
                <FlatList
                    data={[
                        {key: '영수', univ: '경북대학교 '},
                        {key: '윤수', univ: '경북대학교 '},
                        {key: '영탁', univ: '경북대학교 '},
                        {key: '소희', univ: '경북대학교 '},
                        {key: '영진', univ: '경북대학교 '},
                        {key: '보라', univ: '경북대학교 '},
                        {key: '미영', univ: '경북대학교 '},
                        {key: '다희', univ: '경북대학교 '},
                        {key: '미영', univ: '경북대학교 '},
                        {key: '1'},
                        {key: '2'},
                        {key: '3'},
                        {key: '4'},
                        {key: '5'},
                        {key: '6'},
                        {key: '7'},
                        {key: '8'},
                        {key: '9'},
                        {key: '10'},
                        {key: '11'},
                        {key: '12'},
                        {key: '13'},


                    ]}
                    renderItem={
                        ({item}) => {
                            return (
                            <Text style={{padding:10, fontSize: 18, height: 44}}>
                                이름 : {item.key} / 학교 : {item.univ}
                            </Text>);
                        }
                    }
                />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  
