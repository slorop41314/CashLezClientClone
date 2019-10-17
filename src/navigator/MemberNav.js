import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Dimensions , View} from 'react-native';
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator , DrawerNavigatorItems} from 'react-navigation-drawer'
import AsyncStorage from '@react-native-community/async-storage'


import { Button, Text } from 'native-base'

import PointofSaleNav from './subNav/PointofSaleNav';

import MainScreen from '../screen/memberscreen/MainScreen'
import PaymentList from '../screen/memberscreen/PaymentList'
import Help from '../screen/memberscreen/Help'
import Setting from '../screen/memberscreen/Setting'


import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import CheckOut from '../screen/subscreen/submainsc/CheckOut';
import FinalCheck from '../screen/subscreen/submainsc/subcheckout/FinalCheck'
import CashPayment from '../screen/subscreen/submainsc/subcheckout/CashPayment'

import InputCustomer from '../screen/subscreen/submainsc/InputCustomer';



const width = Dimensions.get('window').width

_onPressLogout= async (props) => {
    try {
        await AsyncStorage.clear()
        props.navigation.navigate('GuestNavigator')
      } 
      catch(e) {
          alert(e)      
    };

}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex : 1}}>
    <ScrollView>
      <DrawerNavigatorItems {...props} />
    </ScrollView>
    <View>
      <Button onPress={() => this._onPressLogout(props)}>
        <Text>Logout</Text>
      </Button>
    </View>
  </SafeAreaView>
)

const PaymentNavigator = createStackNavigator({
  MainScreen : {
    screen : MainScreen,
    navigationOptions : {
      header : null
    }
  },
  CheckOut : {
    screen : CheckOut,
    navigationOptions : {
      header : null
    }
  },
  InputCustomer : {
    screen : InputCustomer,
    navigationOptions : {
      header : null
    }
  },
  FinalCheck : {
    screen : FinalCheck,
    navigationOptions : {
      header : null
    }
  },
  CashPayment : {
    screen : CashPayment,
    navigationOptions : {
      header : null
    }
  },
})

const DrawerNavigator = createDrawerNavigator({
  Payment : {
    screen : PaymentNavigator,
    navigationOptions: {
      header: null
    }
  },
  PaymentList : {
    screen : PaymentList,
    navigationOptions : {
      header : null
    }
  },
  PointofSale : {
    screen : PointofSaleNav,
    navigationOptions :{
      header : null
    }
  },
  Help : {
    screen : Help
  },
  Setting : {
    screen : Setting
  }
}, {
  contentComponent : CustomDrawerComponent,
})

const MemberNavigator = createStackNavigator({
    SideBar : {
      screen : DrawerNavigator,
      navigationOptions : {
        header : null
      }
    }
  })

  export default createAppContainer(MemberNavigator)
