import React, { useEffect } from 'react';
import { Text, View , FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';

import { useSelector ,useDispatch} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { HeaderComp } from '../component/Header/HeaderComp';
import { getHistory } from '../../action/history';
import { getUserId } from '../../function/getget';
import { Card } from 'native-base';

const PaymentList = ({navigation}) =>  {
    const historyData = useSelector(state => state.history.historyPayment)
    const isLoading = useSelector(state => state.history.isLoading)

    const dispatch = useDispatch()
    useEffect(() => { 
        fetchHistory()
    }, [])

    const fetchHistory = async () => {
        const userId = await getUserId()
        dispatch(getHistory(userId))
    }
        if(isLoading) {
            return(
                <ActivityIndicator/>
            )
        }
        else{
        return (
            <View>
                <HeaderComp onPressBack={() => navigation.goBack()} title="Transaction History"/>
                <FlatList
                        data={historyData}
                        renderItem={({ item }) => (
                            <TouchableOpacity>     
                                <Card>      
                                <View style={{ flexDirection : "row", justifyContent : "space-around", padding: 15}}>
                                    <View style={{alignItems: "center", justifyContent : "center"}}>
                                        <Icon size={40} color="green" name="money-bill-alt"/>
                                    </View>
                                    <View style={{alignItems : "flex-start"}}>
                                        <Text>Customer : {item.customerData.name}</Text>
                                        <Text>Total : {item.totalbelanja}</Text>
                                        <Text>Tendered : {item.cashtendered}</Text>
                                    </View>
                                </View>
                                </Card>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
            }
}

export default PaymentList