import React, { useState } from 'react';
import { 
    View , 
    Text,
    ScrollView,
    FlatList,
    TextInput 
} from 'react-native';
import {
    Button
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { useSelector, useDispatch } from 'react-redux'
import {HeaderComp} from '../../component/Header/HeaderComp';
import { MinusQuantity, AddQuantity } from '../../../action/cart';


const CheckOut = ({navigation}) =>  {
    const dispatch = useDispatch()
    const dataCart = useSelector(state => state.cart)
    const [persenDiskon , setPersenDiskon ] = useState(0)

    const diskon = Math.round(persenDiskon/100 * dataCart.total)

        return (
           <View style={{flex:1}}>
               <HeaderComp title="Check Out" onPressBack={() => navigation.goBack()}/>
               <View style={{flex:1}}>
                   <ScrollView>
                       <FlatList 
                       data={dataCart.belanja}
                       renderItem={ ({ item }) => (
                            <View style={{flexDirection: "row", justifyContent: "space-between", borderBottomColor:'grey', borderBottomWidth:1}}>
                                <View style={{justifyContent: "center", paddingHorizontal:20, paddingVertical:10}}>
                                    <Text>{item.name}</Text>
                                    <Text style={{fontWeight:'600'}}>Rp {item.price}</Text>
                                </View>
                                <View style={{alignItems: "center", flexDirection: "row", paddingRight:20}}>
                                    <Icon size={20} name="minus-square" onPress={() => dispatch(MinusQuantity(item))}/>
                                    <Text style={{padding:5, fontSize:20}}>{item.quantity}</Text>
                                    <Icon size={20} name="plus-square" onPress={() => dispatch(AddQuantity(item))}/>
                                </View>
                            </View>
                       )}
                       keyExtractor={(item, index) => index.toString()}
                       />
                   </ScrollView>
               </View>
               <View style={{flex : 1, justifyContent:"flex-end"}}>
                   <View style={{padding:20}}>
                   <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                       <Text>Subtotal</Text>
                       <Text>{dataCart.total}</Text>
                   </View>
                   <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                       <Text>Discount</Text>
                       <Text>{diskon}</Text>
                   </View>
                   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                       <View style={{flexDirection:'row', alignItems:"center"}}>
                            <TextInput
                            onChangeText={text => setPersenDiskon(text)}
                            value={`${persenDiskon}`}
                            keyboardType="numeric"
                            style={{textDecorationLine:"underline"}}
                            />
                            <Text> %</Text>
                        </View>
                       <Text>{diskon}</Text>
                   </View>
                   <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                       <Text>Service Charge</Text>
                       <Text>0</Text>
                   </View>
                   <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                       <Text>Tax</Text>
                       <Text>0</Text>
                   </View>
                   <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                       <Text>Total</Text>
                       <Text>{dataCart.total - diskon}</Text>
                   </View>
                   </View>
                   <Button primary disabled={dataCart.jumlahitem === 0 ? true : false} style={{justifyContent:"center", alignItems: "center"}} onPress={() => navigation.navigate('FinalCheck')}>
                       <Text style={{color : 'white', textTransform:"uppercase"}}>Checkout</Text>
                   </Button>
               </View>
           </View> 
        );
    
}
export default CheckOut