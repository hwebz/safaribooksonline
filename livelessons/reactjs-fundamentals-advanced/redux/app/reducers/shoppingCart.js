import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'

let initialState = [
        {id: 132, name: 'pizza', cost: 10, category: 'food'},
        {id: 214, name: 'apples', cost: 20, category: 'food'},
        {id: 323, name: 'tv', cost: 120, category: 'electronics'},
        {id: 432, name: 'phone', cost: 300, category: 'electronics'}
    ];
export default function shoppingCart(state, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(id => id !== action.payload)
        default:
            return state
    }
}