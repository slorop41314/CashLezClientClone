import React, { Component } from 'react';
import {
    Header ,
    Left,
    Button,
    Icon,
    Body,
    Title,
} from 'native-base'

export class HeaderComp extends Component {
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

export class HeaderCompCashPay extends Component {
    state = {  }
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.backKeAwal} >
                        <Icon  name="ios-close"/>
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}