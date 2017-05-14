import React from 'react'

import { connect } from 'react-redux'

import {ADD_TO_CART} from '../constants/constants'

import Products from '../components/Products.jsx'

// store.getState()
function mapStateToProps(state) {
    return {
        products: state.products
    }
}

// store.dispatch
function mapDispatchToProps(dispatch) {
    return {
        handleClick(id) {
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    id
                }
            })
        }
    }
}

let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer