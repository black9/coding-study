import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Blink extends Component{

    constructor(props){
        super(props);

        this.state = {showText: true};
            // == 위와 아래는 같다
            // 2초마다 toggle 하는 함수 
        setInterval(() => {
            // state 변경
            this.setState({showText: !this.state.showText})
        }, 2000)
    }

    render(){
        //showText가 True일 경우에만 호출
        let display = this.state.showText ? this.props.text :' ';
        return <Text>{display}</Text>
    }
}
