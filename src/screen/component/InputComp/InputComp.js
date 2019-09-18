import React, { Component } from 'react';
import {
    Item,
    Input,
    Label,
    Icon,
    Right,
} from 'native-base'

export class InputFloating extends Component {
    render() {
        return (
            <Item floatingLabel  >
                <Label>{this.props.label}</Label>
                <Input 
                keyboardType="default"
                onChangeText={this.props.handleChangeText}
                
                />
            </Item>
        );
    }
}

