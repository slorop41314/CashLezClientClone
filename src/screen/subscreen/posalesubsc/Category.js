import React, {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux'
import { ScrollView } from 'react-native';
import { Container } from 'native-base'

import {HeaderComp} from '../../component/Header/HeaderComp'
import Buttontambahdibawh from '../../component/TouchableComp/Buttontambahdibawh';
import Flatlistcomp from '../../component/List/flatlistcomp';
import { getCategory } from '../../../action/category';
import { getUserId } from '../../../function/getget';

const Category = ({navigation}) => {
    const dispatch = useDispatch()
    const categorydata = useSelector(state => state.category.data)
    
    useEffect(() => {
       getDataAwal() 
    })

    const getDataAwal = async () => {
        const userId = await getUserId()
        dispatch(getCategory(userId))
    }

        return (
            <Container >
            <HeaderComp title="Category" onPressBack={() => navigation.goBack()}/>
            <ScrollView>
            <Flatlistcomp dataNya={categorydata}/>
            </ScrollView>
            <Buttontambahdibawh onpressKemana={() => navigation.navigate('AddCategory')}/>
            </Container>
        );
    }

export default  Category
