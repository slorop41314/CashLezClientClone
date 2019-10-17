import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
    Container, 
    Button,
    Text, 
    Picker
} from 'native-base';

import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'

import {HeaderComp} from '../../component/Header/HeaderComp';
import { InputFloating } from '../../component/InputComp/InputComp';
import {
    getUserId, 
} from '../../../function/getget';
import { getProduct } from '../../../action/product'
import { getCategory } from '../../../action/category'
import Host from '../../../environment/Host'


const AddProduct = ({navigation}) => {
    const dispatch = useDispatch()
    const [formData , setFormData] = useState({
        name : '',
        price : '',
        userId : '',
        categoryId : null
    })
    const [isLoading , setIsLoading] = useState(true)
    const categoryData = useSelector(state => state.category.data)
    useEffect(() => { 
        getListCategory()
    }, [])

    const getListCategory = async () => {
        const response = await getUserId()
        
        dispatch(getCategory(response))
        
        if(response) {
            setFormData({...formData,
                userId : response,
                categoryId : categoryData[0]._id 
            })
        }
        
        // setFormData({
        //     ...formData,
        //   categoryId : categoryData[0]._id 
        // });
        console.log(formData.categoryId)
        setIsLoading(false)
    }
    const handleReset = () => {
        setFormData({
            ...formData,
            name : '',
            price : ''
        })
    }

    const handleSaveCategory = async () =>  {
        alert(formData.categoryId)
        console.log(formData)
        await axios.post(`${Host.localhost}/product`, formData)
        .then(res => res)
        dispatch(getProduct(formData.userId))
        navigation.goBack()
    }

    const onValueChange = (value) => {
        setFormData({
            ...formData,
          categoryId : value 
        });
      }
    
      if(isLoading) {
          return (
              <ActivityIndicator/>
          )
      }
      else {
      return (
            <Container style={{}}>
                <HeaderComp title="Add new product" onPressBack={() => navigation.goBack()}/>
                <View style={{paddingHorizontal:10, paddingVertical: 15}}>
                <InputFloating 
                label="Name*"
                value={formData.name}
                handleChangeText={(text) => setFormData({...formData,name : text})}
                />
                <InputFloating 
                label="Price*"
                value={formData.price}
                handleChangeText={(text) => setFormData({...formData,price : text})}
                />
                <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={formData.categoryId}
                        onValueChange={onValueChange.bind(this)}
                            >
                        {
                            categoryData.map((item) =>{
                            return(
                            <Picker.Item  label={item.categoryname} value={item._id} key={item._id}/>
                            );
                            })
                        }
                    </Picker>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Button full onPress={handleReset} style={{flex : 1, marginRight:5}}>
                        <Text>Reset</Text>
                    </Button>
                    <Button full onPress={handleSaveCategory} style={{flex : 1}}>
                        <Text>Save</Text>
                    </Button>
                </View>

            </Container>
        );
    }
}

export default AddProduct
