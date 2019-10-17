import React, { useEffect } from 'react';
import { View ,Text, ScrollView, ActivityIndicator} from 'react-native';
import {
    Container,
} from 'native-base'
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from '../../../action/product'
import { getUserId
} from '../../../function/getget';
import {HeaderComp} from '../../component/Header/HeaderComp'
import Buttontambahdibawh from '../../component/TouchableComp/Buttontambahdibawh';
import Flatlistcomp from '../../component/List/flatlistcomp';

const Product = ({navigation}) => {
    const dispatch = useDispatch()
    const dataproduct = useSelector((state) => state.product.data)
    const isDataLoading = useSelector((state) => state.product.isDataLoading)
    
    useEffect(() => {
        getProductData()
    }, [])
    
    const getProductData = async () => {
        const response = await getUserId()
        dispatch(getProduct(response))
    }
    
    
    if (isDataLoading) {
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ActivityIndicator />
            </View>
            )
    } 
    else {
        if(dataproduct.length>0) {
            return (
                <Container>
                    <HeaderComp title="Product" onPressBack={() => navigation.goBack()}/>
                    <ScrollView>
                        <Flatlistcomp dataNya={dataproduct}/>
                    </ScrollView>
                    <Buttontambahdibawh onpressKemana={() => navigation.navigate('AddProduct')}/>
                </Container>
            
            );
    }
        else {
            return (
                <Container>
                    <HeaderComp title="Product" onPressBack={() => navigation.goBack()}/>
                    <View style={{ alignItems: "center", justifyContent:'center'}}>
                        <Text>Kamu belum punya product</Text>
                        <Text>Tambahkan product dahulu</Text>
                    </View>
                    <Buttontambahdibawh onpressKemana={() => navigation.navigate('AddProduct')}/>
                </Container>
            )
        }
    }
}


export default Product