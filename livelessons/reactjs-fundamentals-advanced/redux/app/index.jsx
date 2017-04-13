import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from './stores/stores'
import reducer from './reducers/reducers'

let store = createStore(reducer, 0);

import App from './components/App.jsx'

ReactDOM.render(<App store={store} />, document.getElementById('app'));