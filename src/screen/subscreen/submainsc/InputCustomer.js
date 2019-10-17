import React, { useState } from 'react';
import {
    Container, 
    Content
} from 'native-base'
import { useDispatch } from 'react-redux'
import HeaderComp from '../../component/Header/HeaderComp'
import  {InputFloating, InputFloatingNumber } from '../../component/InputComp/InputComp'
import Buttonsavereset from '../../component/TouchableComp/Buttonsavereset';
import { AddCustomer } from '../../../action/cart';
const InputCustomer = ({navigation}) => {
    const dispatch = useDispatch()

    const [formData , setFormData] = useState({
        name : '',
        phonenumber : '',
        email : ''
    })

    const _resetHandler = () => {
        setFormData({
            name : '',
            phonenumber : '',
            email : ''
        })
    }
    
    const _saveHandler = () => {
        dispatch(AddCustomer(formData))
        navigation.goBack()
    }
    return (
        <Container>
            <HeaderComp title="Add Customer Info" onPressBack={() => navigation.goBack()}/>
            <Content style={{padding:20}}>
                <InputFloating 
                label="Name"
                value={formData.name}
                handleChangeText={(text) => setFormData({...formData,name : text})}
                />
                <InputFloatingNumber 
                label="Phone Number"
                value={formData.phonenumber}
                handleChangeText={(text) => setFormData({...formData,phonenumber : text})}/>
                <InputFloating 
                label="Email"
                value={formData.email}
                handleChangeText={(text) => setFormData({...formData,email : text})}/>
            </Content>
            <Content>
                <Buttonsavereset
                onPressSave={_saveHandler}
                onPressReset={_resetHandler}/>
            </Content>
        </Container>
    )
}

export default InputCustomer