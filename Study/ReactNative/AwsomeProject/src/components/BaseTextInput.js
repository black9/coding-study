import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class BaseTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text : 'BaseText input 입니다.'};
    }
    render() {
        return (
            <TextInput
            style={{height: 40, width:"80%", borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            placeholder='입력을 해주세요'
            value={this.state.text} />
        );
    }

} 