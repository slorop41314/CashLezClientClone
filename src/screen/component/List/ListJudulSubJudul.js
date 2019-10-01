import React, { Component } from 'react';
import { View, Text , TouchableOpacity} from 'react-native';

export default class ListJudulSubJudul extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onpresskemana}>
                <View style={{borderWidth:1, borderColor: 'grey'}}>
                    <View style={{paddingHorizontal:10, paddingTop:15, paddingBottom:10}}>
                        <Text style={{fontSize:22, fontWeight:'600'}}>{this.props.judul}</Text>
                        <Text style={{fontSize:17, fontWeight:'400'}}>{this.props.subjudul}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}