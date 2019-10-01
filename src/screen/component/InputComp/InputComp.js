import React, { Component } from 'react';
import {
    Item,
    Input,
    Label,
} from 'native-base'

export class InputFloating extends Component {
    constructor() {
        super() 
        this.state= {
            color : 'black'
        }
    }
    onFocus() {
        this.setState({
            color: 'green'
        })
      }
    
    onBlur() {
        this.setState({
          color: 'black'
        })
      }
    render() {
        return (
            <Item floatingLabel style={{borderColor:'grey'}}>
                <Label>{this.props.label}</Label>
                <Input
                value={this.props.value}
                onBlur={ () => this.onBlur() }
                onFocus={ () => this.onFocus() }                
                keyboardType="default"
                onChangeText={this.props.handleChangeText}
                style={{ height:60, color: this.state.color}}
                />
            </Item>
        );
    }
}

