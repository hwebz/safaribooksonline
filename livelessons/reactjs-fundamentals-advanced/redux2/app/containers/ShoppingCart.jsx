import React from 'react'
import { connect } from 'react-redux'
import {REMOVE_FROM_CART} from '../constants/constants'
import ShoppingCart from '../components/ShoppingCart.jsx'

function getProductsInCart(products, shoppingCart) {
    let shoppingCarts = [];
    shoppingCart.forEach(cart => {
        let newCart = products.filter(product => product.id == cart.id)
        if (newCart.length) newCart = {...newCart[0], count: cart.count}
        shoppingCarts.push(newCart)
    })
    // return products.filter(product => shoppingCart.includes(product.id))
    return shoppingCarts
}

// store.getState()
function mapStateToProps(state) {
    return {
        products: getProductsInCart(state.products, state.shoppingCart)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick(id) {
            dispatch({
                type: REMOVE_FROM_CART,
                payload: {
                    id
                }
            })
        }
    }
}

let ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingCartContainer