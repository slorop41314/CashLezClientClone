import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import product from '../reducer/product'
import category from '../reducer/category'
import cart from '../reducer/cart'
import history from '../reducer/paymenthistory'
const reducer = combineReducers({
    product,
    category,
    cart,
    history
})

const store = createStore(reducer , applyMiddleware(thunkMiddleware))

export default store




