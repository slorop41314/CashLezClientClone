import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Buttontambahdibawh extends Component {
    render() {
        return (
            <View style={{position:'absolute',bottom:0,alignSelf:'flex-end'}}>
            <Icon size={60} color="blue" name="plus-circle"
            onPress={this.props.onpressKemana}
            />
            </View>
        );
    }
}