import React, { Component } from 'react';
import { Text , View} from 'react-native';
import ListJudulSubJudul from '../component/List/ListJudulSubJudul';
import {HeaderComp} from '../component/Header/HeaderComp'

export default class PointofSale extends Component {
    state = {  }
    render() {
        return (
            <View>
            <HeaderComp title="Point of Sale" onPressBack={() => this.props.navigation.navigate('Payment')}/>
            <View>
                <ListJudulSubJudul 
                onpresskemana={() => this.props.navigation.navigate('Product')}
                judul="Product" 
                subjudul="Content list of product. You can add, modify, or delete your product"
                />
                <ListJudulSubJudul 
                onpresskemana={() => this.props.navigation.navigate('Category')}
                judul="Category" 
                subjudul="Content list of product category. You can add, modify, or delete your product category"
                />
                <ListJudulSubJudul 
                onpresskemana={() => this.props.navigation.navigate('TaxScreen')}
                judul="Tax, Service Charge and Rounding" 
                subjudul="Setting for Tax, Service Charge and Rounding. This setting will effect on each payment"
                />
            </View>
            </View>
            );
    }
}