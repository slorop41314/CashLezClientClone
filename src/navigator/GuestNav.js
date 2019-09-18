import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
    Login,
    Register,
    SK
} from '../screen/logregscreen'

const GuestNavigator = createStackNavigator({
    Login : {
      screen : Login,
      navigationOptions: {
        header: null
      }
    },
    SK:{
      screen: SK, 
      navigationOptions : {
          header : null
      }
    },
    Register : {
      screen : Register,
      navigationOptions : {
        header : null
      }
    },
  
  })

  export default createAppContainer(GuestNavigator)
