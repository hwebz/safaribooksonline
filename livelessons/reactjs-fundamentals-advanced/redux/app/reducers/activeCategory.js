import { CHANGE_CATEGORY } from '../constants/cartConstants'

let initialState = 'food';
export default function activeCategory(state, action) {
    switch(action.type) {
        case CHANGE_CATEGORY:
            return action.payload
        default: 
            return state
    }
}