import React from 'react'

let ShoppingCartProduct = ({id, name, cost, count, handleClick}) => (
    <div>
        {name} ${cost} ({count}) <button onClick={() => handleClick(id)}>Remove from cart</button>
    </div>
)

export default ShoppingCartProduct