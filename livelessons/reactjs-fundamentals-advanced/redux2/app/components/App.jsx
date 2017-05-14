import React, {Component} from 'react'
import ProductsContainer from '../containers/Products.jsx'
import ShoppingCartContainer from '../containers/ShoppingCart.jsx'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Welcome to our shop!!</h1>
                <ProductsContainer />
                <hr/>
                <ShoppingCartContainer />
            </div>
        )
    }
}