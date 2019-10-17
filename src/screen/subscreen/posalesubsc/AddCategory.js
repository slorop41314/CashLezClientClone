import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { View } from 'react-native';
import {
    Container
} from 'native-base'
import { InputFloating } from '../../component/InputComp/InputComp';
import Buttonsavereset from '../../component/TouchableComp/Buttonsavereset';
import {HeaderComp} from '../../component/Header/HeaderComp';

import axios from 'axios'
import Host from '../../../environment/Host'
import { 
    getUserId  
} from '../../../function/getget';
import {getCategory }from '../../../action/category'


 const AddCategory = ({navigation}) => {
    const [isLoading , setIsLoading] = useState(true)
    const [formCategory , setFormCategory] = useState({
        categoryname : '',
        userId : '' 
    })
    const dispatch = useDispatch()

    useEffect(() => {
        setUserId()
    }, [])
    const setUserId = async () => {
        const response = await getUserId()
        if(response) {
            setFormCategory({...formCategory,
                userId : response})
        }
    }
    const handleSaveCategory = async () => {
        await axios.post(`${Host.localhost}/category`, formCategory)
        .then(res => res)
        dispatch(getCategory(formCategory.userId))
    }
    const handleReset = () => {
        alert('Reset')
    }

        return (
            <Container >
                <HeaderComp title="Add New Category" onPressBack={() => navigation.goBack()}/>
                <View style={{padding : 20}}>
                <InputFloating 
                label="Name*"
                handleChangeText={(text) => setFormCategory({...formCategory,categoryname : text})}
                />
                <Buttonsavereset onPressSave={handleSaveCategory} onPressReset={handleReset}/>
                </View>
            </Container>
        );
    }

export default AddCategory

