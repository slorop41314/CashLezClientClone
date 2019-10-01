import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

import Host from '../environment/Host'

export const getUserId = async() => {
    const userDataJSON = await AsyncStorage.getItem('userData')
    const userData = JSON.parse(userDataJSON)
    return userData._id    
}

export const getListOfCategory = async(userId) => {
    const response = await axios.get(`${Host.localhost}/category/${userId}`)
    return response.data
}

export const getListOfProduct = async(userId) => {
    const response = await axios.get(`${Host.localhost}/product/${userId}`)
    return response.data
}