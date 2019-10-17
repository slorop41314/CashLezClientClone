import React from 'react';
import { 
    View , 
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'

import { removeAll } from '../../../../action/cart'
import { HeaderCompCashPay } from '../../../component/Header/HeaderComp';
import { FlatList } from 'react-native-gesture-handler';

const CashPayment = ({navigation}) => {
    const dispatch = useDispatch()

    const handleFinishTransaction = () => {
        dispatch(removeAll())
        navigation.navigate('MainScreen')
    }

    const rincianbelanja = navigation.state.params.dataNya
        return (
            <View>  
                <HeaderCompCashPay backKeAwal={handleFinishTransaction} title={"Receipt"}/>
                <View style={styles.bodyContainer}>
                    <View style={styles.duit}>
                        <Icon size={40} color="green" name="money-bill-alt"/>
                        <Text>{rincianbelanja.totalbelanja}</Text>
                    </View>
                    <View style={styles.rinciantotal}>
                        <View>
                            <FlatList
                            data={rincianbelanja.produkyangdibeli}
                            
                            renderItem = {({ item }) => (
                                <View style={styles.listbelanjaan}>
                                    <View style={styles.detailbarang}>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={styles.subdetailbarang}>                                       
                                        <View>  
                                            <Text>{item.quantity}</Text>
                                        </View>
                                        <View>
                                            <Text>{item.price}</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()} 
                            />
                            <View style={styles.borderRincian}>
                                <View style={styles.duaItemJauh}>
                                    <Text>Total</Text>
                                    <Text>{rincianbelanja.totalbelanja}</Text>
                                </View>
                                <View style={styles.duaItemJauh}>
                                    <Text>Cash tendered</Text>
                                    <Text>{rincianbelanja.cashtendered}</Text>
                                </View>
                                <View style={styles.duaItemJauh}>
                                    <Text>Change</Text>
                                    <Text>{rincianbelanja.change}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>        
            </View>
            
        );
    }

const styles = StyleSheet.create({
    bodyContainer : {
        paddingHorizontal : 15
    },
    duit : {
        flexDirection:'row',
        alignItems: "center"
    },
    rinciantotal : {
        borderTopWidth:0.5,
        borderBottomWidth:0.5
    },
    listbelanjaan : {
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    borderRincian :{
        borderTopWidth : 0.5,

    },
    duaItemJauh : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    detailbarang : {
        flex : 3
    },
    subdetailbarang : {
        flex : 2,
        flexDirection :"row", 
        justifyContent : "space-between"
    }
})

export default CashPayment