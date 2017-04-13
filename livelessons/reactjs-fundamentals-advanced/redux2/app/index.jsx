import React from 'react'
import ReactDOM from 'react-dom'

import reducer from './reducers/index'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

let store = createStore(reducer)

import App from './components/App.jsx'

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
    ), 
    document.getElementById('app'));