import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Button,
    Text
} from 'native-base'

export default class Buttonsavereset extends Component {
    render() {
        return (
            <View style={{flexDirection:"row"}}>
                <Button full onPress={this.props.onPressReset} style={{flex : 1, marginRight:5}}>
                    <Text>Reset</Text>
                </Button>
                <Button full onPress={this.props.onPressSave} style={{flex : 1}}>
                    <Text>Save</Text>
                </Button>
            </View>
        );
    }
}