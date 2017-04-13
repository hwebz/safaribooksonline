let initialState = [
    {id: 123, name: 'TV', cost: 1000},
    {id: 221, name: 'Phone', cost: 1000}
]

export default function products(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}