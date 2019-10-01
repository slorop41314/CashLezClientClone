import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {
    GuestNavigator,
    MemberNavigator,
    CheckLogin
} from './navigator'

const AppNavigator = createSwitchNavigator({
  MemberNavigator : MemberNavigator,
  GuestNavigator : GuestNavigator,
  CheckLogin : CheckLogin
}, {
    initialRouteName: 'CheckLogin'
  })


export default createAppContainer(AppNavigator)

