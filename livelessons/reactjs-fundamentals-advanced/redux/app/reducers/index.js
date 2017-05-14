import { combineReducers } from 'redux'
// import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CATEGORY } from '../constants/cartConstants'

import activeCategory from './activeCategory'
import products from './products'
import shoppingCart from './shoppingCart'

let reducer = combineReducers(activeCategory, products, shoppingCart)
export default reducer

/*let initialState = {
    activeCategory: 'food',
    products: [
        {id: 132, name: 'pizza', cost: 10, category: 'food'},
        {id: 214, name: 'apples', cost: 20, category: 'food'},
        {id: 323, name: 'tv', cost: 120, category: 'electronics'},
        {id: 432, name: 'phone', cost: 300, category: 'electronics'}
    ],
    shoppingCart: [

    ]
}*/

/*function reducer(state = initialState, action) {
    return {
        activeCategory: activeCategory(stae, action),
        products: products(state, action),
        shoppingCart: shoppingCart(state, action)
    }
    /*switch(action.type) {
        case CHANGE_CATEGORY:
            // state.activeCategory = action.payload
            return {
                ...state,
                activeCategory: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(productId => productId !== action.payload)
            }
        default:
            return state;
    }*\/
}*/

// let s = reducer(initialState, {type: ADD_TO_CART, payload: {id: 432}})
// s = reducer(initialState, {type: ADD_TO_CART, payload: {id: 132}})
// s = reducer(initialState, {type: REMOVE_FROM_CART, payload: {id: 432}})