import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/constants'

let initialState = [
    
]

export default function shoppingCart(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            let isExit = false;
            let updatedCart = []
            state.map(cart => {
                if (cart.id == action.payload.id) {
                    isExit = true;
                    cart.count++;
                }
                updatedCart.push(cart)
            })
            if (isExit) return updatedCart
            return [...state, {id: action.payload.id, count: 1}]
            // return [...state, action.payload.id]
        case REMOVE_FROM_CART:
            return state.filter(cart => cart.id !== action.payload.id)
        default:
            return state
    }
}