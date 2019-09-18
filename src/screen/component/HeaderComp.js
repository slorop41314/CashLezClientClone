import React, { Component } from 'react';
import {
    Header ,
    Left,
    Button,
    Icon,
    Body,
    Title,
} from 'native-base'

export default class HeaderComp extends Component {
    state = {  }
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.onPressBack} >
                        <Icon  name="ios-arrow-round-back"/>
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}