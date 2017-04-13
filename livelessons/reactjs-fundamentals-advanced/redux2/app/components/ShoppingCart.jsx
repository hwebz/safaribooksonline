import React from 'react'
import ShoppingCartProduct from './ShoppingCartProduct.jsx'

let ShoppingCart = ({products, handleClick}) => (
    <section>
        <h2>Shopping Cart</h2>
        <section>
            {products.map(product => <ShoppingCartProduct key={product.id} {...product} handleClick={handleClick} />)}
        </section>
    </section>
)

export default ShoppingCart