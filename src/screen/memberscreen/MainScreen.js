import React, { useState, useEffect } from 'react';
import { View , StyleSheet, Dimensions ,Image, TouchableOpacity, ActivityIndicator, ScrollView, FlatList} from 'react-native';
import {
    Header,
    Container,
    Content,
    Left,
    Icon,
    Text,
    Body,
    Right,
    Picker
} from 'native-base'
import Touchablekayakbutton from '../component/TouchableComp/Touchablekayakbutton';

import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch, useSelector } from 'react-redux'

import { getProduct } from '../../action/product'
import { getCategory } from '../../action/category';
import { AddCart, removeAll } from '../../action/cart'


const height = Dimensions.get('window').height
const width = Math.round(92/100 * Dimensions.get('window').width)

const MainScreen = ({navigation}) => {
    const [userData , setUserData] = useState('')
    const [category, setCategory] = useState('')
    const [isLoading , setIsLoading] = useState(true)
    const defaultimage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAACrCAMAAAATgapkAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8W4AAH7AbJ4AAAAAElFTkSuQmCC"
    const dispatch = useDispatch()
    const categoryData = useSelector(state => state.category.data)
    const dataproduct = useSelector((state) => state.product.data)
    const cart = useSelector(state => state.cart)

    useEffect(() => { 
        fetchData()
    }, [])
    
    const fetchData = async() =>  {
        const userDataJSON = await AsyncStorage.getItem('userData')
        const userData = JSON.parse(userDataJSON)
        setUserData(userData)
        const userId = userData._id   
        dispatch(getCategory(userId))
        dispatch(getProduct(userId)) 
        setIsLoading(false)
    }
    
    const _onValueChange = (value) => {
        setCategory(value)
      }

    const _onPressItem = (item) => {
        dispatch(AddCart(item))    
        // alert(item.name)
    }

    if (isLoading) {
        return (
            <ActivityIndicator/>
        )
    }
    else {
        return (
            <Container>
                <Header style={{backgroundColor:'#e6e8e6'}}>
                    <Left>
                        <Icon name="menu" onPress={() => navigation.openDrawer()}/>
                    </Left>
                    <Body>
                        <Text style={{fontSize:23}}>{userData.fullname}</Text>
                    </Body>
                    <Right>
                        <Text>Cashier Mode</Text>
                    </Right>
                </Header>
                <Content>
                    <View style={{flexDirection:"row", backgroundColor:'#7FFFD7', height: height/8, justifyContent:'space-between'}}>
                        <View style={{flexDirection:"row"}} >
                            <View style={styles.showitmbelanja}>
                                <Text style={styles.jumlahbelanja}>Rp </Text>
                            </View>
                            <View style={styles.showitmbelanja}>
                                <Text style={styles.jumlahbelanja} >{cart.total}</Text>
                            </View>
                        </View>
                        <View style={styles.showitmbelanja}>
                            <Text style={{fontSize:20, fontWeight:'500'}}>{cart.jumlahitem}</Text>
                            <Text style={{fontSize:17, fontWeight:'500'}}>Item</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Touchablekayakbutton abc="Input Customer" disabled={false} buatapa={() => alert("Customer")}/>
                        <Touchablekayakbutton abc="Clear All" disabled={cart.belanja.length > 0 ? false : true} buatapa={() => dispatch(removeAll())}/>
                        <Touchablekayakbutton abc="Checkout" disabled={cart.belanja.length > 0 ? false : true} buatapa={() => alert("CheckOut")}/>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={category}
                        onValueChange={_onValueChange}
                            >
                        {
                            categoryData.map((item) =>{
                                
                            return(
                                
                            <Picker.Item  label={item.categoryname} value={item._id} key={item.categoryname}/>
                            
                            ); 
                            })
                        }
                    </Picker>
                    <Icon name="grid" style={{fontSize:50}}/>
                    </View>
                    <ScrollView>
                        <FlatList
                        data={dataproduct}
                        numColumns={2}
                        //Item Separator View
                        renderItem={({ item }) => (
                            item.categoryId === category ?
                            // Single Comes here which will be repeatative for the FlatListItems
                            <View style={{padding:"2%"}}>
                            <TouchableOpacity 
                            onPress={() => _onPressItem(item)}
                            style={{borderWidth:1, width : width/2}}
                            >
                                <View style={{justifyContent: "center", alignItems:"center", }}>
                                    <Image style={{height : height/7}} source={{uri : item.image ? item.image : defaultimage}}/>
                                    {item.image ? null : 
                                    item.name ? <Text style={{position:"absolute", fontSize:30,color:'red' }}>{item.name[0].toUpperCase()}</Text> : null
                                    }    
                                </View>           
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.price}</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                            : null
                        )}
                        enableEmptySections={true}
                        style={{ marginTop: 10 }}
                        keyExtractor={(item, index) => index.toString()}
                        />
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

export default MainScreen

const styles = StyleSheet.create({
    showitmbelanja : {
        paddingHorizontal: 20,
        paddingTop : 10
    },
    jumlahbelanja : {
        fontSize : 30,
        fontWeight:'600'
    }
})