import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import product from '../reducer/product'
import category from '../reducer/category'
import cart from '../reducer/cart'

const reducer = combineReducers({
    product,
    category,
    cart
})

const store = createStore(reducer , applyMiddleware(thunkMiddleware))

export default store




