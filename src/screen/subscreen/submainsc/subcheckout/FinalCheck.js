import React, {useState} from 'react';
import { 
    View , 
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import axios from 'axios'
import Host from '../../../../environment/Host'

import { useSelector } from 'react-redux'
import {HeaderComp} from '../../../component/Header/HeaderComp';
import { getUserId } from '../../../../function/getget';

const height = Dimensions.get('window').height

const FinalCheck = ({navigation}) => {

    const cart = useSelector(state => state.cart)
    
    const [cashtendered , setCashtendered] = useState(0)
    const change = parseInt(cashtendered) - parseInt(cart.total)

    const handleToCash = async () => {
        const userId = await getUserId()
        const checkOutBelanjaan = {
            totalbelanja : cart.total,
            produkyangdibeli : cart.belanja,
            cashtendered,
            change,
            customerdata : cart.customer
        }
        const paramNya = await axios.post(`${Host.localhost}/users/${userId}/transaction`, checkOutBelanjaan)
        navigation.navigate('CashPayment', { dataNya: paramNya.data })
    }
        return (
            <View>
                <HeaderComp title="Choose Payment" onPressBack={() => navigation.goBack()}/>
                <View style={{height: height/6,padding : 15, justifyContent: "center", backgroundColor:'#34baeb'}}>
                    <Text style={{fontSize:20}}>Rp {cart.total}</Text>
                    <View style={{justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:20}}>
                            Cash tendered
                        </Text>
                        <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Text style={{fontSize:20}}>Rp </Text>
                            <TextInput
                            style={{fontSize:20}}
                            onChangeText={text => setCashtendered(text)}
                            placeholder="0"
                            keyboardType="numeric"
                            style={{textDecorationLine:"underline"}}
                            />
                        </View>
                        
                    </View>
                    <View style={{justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:'600', fontSize:20}}>
                            Change
                        </Text>
                        <Text style={{fontWeight:'600', fontSize:20}}>Rp {change >= 0 ? change : 0}</Text>
                    </View>
                    
                </View>
                
                <View style={{padding : 15,height : height/7, backgroundColor:'#34d2eb', flexDirection:'row', justifyContent:"space-between"}}>
                    <View>
                        <Text style={{fontWeight:'600', fontSize:18}}>SALE</Text>
                        <Text>
                            {Date().slice(4, 24)}
                        </Text>
                    </View>
                    <View>
                        <Icon size={25} name="calculator"/>
                        <Icon size={25} name="print"/>
                    </View>
                </View>
                {/* <View >
                    <Text style={{fontSize:30}}>Choose payment method</Text>
                </View> */}
                <TouchableOpacity disabled={change >= 0 ? false : true} onPress={handleToCash}>
                    <View style={{height : height/10,justifyContent: "space-between", padding:15, borderWidth : 1}}>
                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}> 
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Icon size={25} name="money-bill-alt"/>
                                <Text style={{fontSize:25, paddingLeft:20}}>
                                    Cash
                                </Text>
                            </View>
                            <View  style={{alignItems:"center"}}>
                                <Icon size={30} name="chevron-right"/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

export default FinalCheck