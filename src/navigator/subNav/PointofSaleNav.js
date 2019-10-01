import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


import PointofSale from '../../screen/memberscreen/PointofSale';
import Product from '../../screen/subscreen/posalesubsc/Product';
import Category from '../../screen/subscreen/posalesubsc/Category';
import Taxdll from '../../screen/subscreen/posalesubsc/Taxdll';
import AddCategory from '../../screen/subscreen/posalesubsc/AddCategory';
import AddProduct from '../../screen/subscreen/posalesubsc/AddProduct';


const PointofSaleNav = createStackNavigator({
    PointofSaleMain : {
        screen : PointofSale
    },
    Product : {
        screen : Product
    },
    Category : {
        screen : Category
    },
    TaxScreen : {
        screen : Taxdll
    },
    AddCategory : {
        screen : AddCategory
    },
    AddProduct : {
        screen : AddProduct
    }
    
},{defaultNavigationOptions: {
    header: null
  },
})

export default createAppContainer(PointofSaleNav)