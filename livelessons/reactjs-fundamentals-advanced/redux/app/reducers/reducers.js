let initialState = 0

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1
        default:
            return state
    }
}

// let result = reducer(0, {type: 'INCREMENT_COUNT'});
