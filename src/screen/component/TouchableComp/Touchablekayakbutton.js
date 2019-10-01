import React, { Component } from 'react';
import { TouchableOpacity, Text , View, StyleSheet, Dimensions } from 'react-native';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class Touchablekayakbutton extends Component {
    render() {
        return (
            <TouchableOpacity disabled={this.props.disabled} onPress={this.props.buatapa}>
                <View style={styles.button3}>
                    <Text style={{padding:5, fontSize:16}}>{this.props.abc}</Text>                            
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button3 : {
        borderColor:'grey', 
        width: width/3,
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding : 7,
        backgroundColor:'#e6e8e6'
    }
})