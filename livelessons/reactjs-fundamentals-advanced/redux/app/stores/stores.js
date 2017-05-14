// let reducer = require('../reducers/reducers')
// let store = createStore(reducer, 0)

export function createStore(reducer, initialState) {
    let state = initialState
    let subscribers = []

    function getState() {
        return state
    }

    function subscribe(callback) {
        subscribers.push(callback)
    }

    function dispatch(action) {
        state = reducer(state, action)
        subscribers.forEach(sub => {
            sub()
        })
    }

    return { getState, subscribe, dispatch }
}

// console.log(store.getState)
// store.subscribe(() => {
//     console.log(`Current state: ${store.getState()}`)
// })

// store.dispatch({type: 'INCREMENT_COUNT'})
// store.dispatch({type: 'INCREMENT_COUNT'})
// store.dispatch({type: 'INCREMENT_COUNT'})